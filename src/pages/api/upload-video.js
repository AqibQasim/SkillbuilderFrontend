// src/pages/api/upload-video.js
import { Vimeo } from 'vimeo';
import path from 'path';
import fs from 'fs';

const client_id = '51352c193f5c9f68a406c2d604aa0c032cf9264f';
const client_secret = 'iS/GQe0lnwlFfjvAruzirXe6lGtcV31mQhAdQBEAsK6H1jkm5vAgJXfeD2EYmeQpmjz5GCVpvisBNTpBELYY1pO2iCVFc1YNckc1zQq8Zd/dMerB3aETbP/4f56TUzSd';
const access_token = '229c38f65c4985eba51c5036f722b809';

const initializeClient = () => new Vimeo(client_id, client_secret, access_token);

const uploadVideo = (client, videoPath) => {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(videoPath);
    const fileSize = fs.statSync(videoPath).size;
    console.log("file size is ", fileSize)
    client.upload(
      videoPath,
      {
        name: 'fixed size 2',
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

// Default export function for the API route
export default async function handler(req, res) {
  const videoPath = path.join(process.cwd(), 'video.mp4'); // Adjust the path if needed
  const client = initializeClient();

  try {
    const response = await uploadVideo(client, videoPath);
    res.status(response.status).json(JSON.parse(response.body));
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
