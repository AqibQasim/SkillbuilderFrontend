// src/pages/api/upload-video.js
import { Vimeo } from 'vimeo';
import multer from 'multer';
import fs from 'fs';
import { createRouter } from 'next-connect';

const upload = multer({ dest: '/tmp' });

const client_id = process.env.VIMEO_CLIENT_ID
const client_secret = process.env.VIMEO_CLIENT_SECRECT
const access_token = process.env.VIMEO_ACCESS_TOKEN;

const initializeClient = () => new Vimeo(client_id, client_secret, access_token);

const uploadVideo = (client, videoPath) => {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(videoPath);
    const fileSize = fs.statSync(videoPath).size;
    console.log("file size is ", fileSize);

    client.upload(
      videoPath,
      {
        name: 'Uploaded Video',
        description: 'The description goes here.',
        size: fileSize,
      },
      function (uri) {
        const videoId = uri.split('/').pop();
        console.log('API Response:', videoId);
        resolve({
          status: 200,
          body: JSON.stringify({ uri }),
        });
      },
      function (bytes_uploaded, bytes_total) {
        const percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2);
        console.log(`${bytes_uploaded} of ${bytes_total} bytes uploaded (${percentage}%)`);
      },
      function (error) {
        console.error('Upload failed:', error);
        reject({
          status: 500,
          body: JSON.stringify({ error: 'Upload failed: ' + error.message }),
        });
      }
    );
  });
};

const router = createRouter();

router.use(upload.single('video'));

router.post(async (req, res) => {
  const videoFile = req.file;
  if (!videoFile) {
    return res.status(400).json({ error: 'No video file uploaded' });
  }

  const client = initializeClient();

  try {
    const response = await uploadVideo(client, videoFile.path);
    // Optionally delete the temporary file after upload
    fs.unlinkSync(videoFile.path);
    res.status(response.status).json(JSON.parse(response.body));
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router.handler();

export const config = {
  api: {
    bodyParser: false,
  },
};
