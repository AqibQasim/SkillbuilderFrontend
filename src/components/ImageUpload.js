import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function ImageUpload({ setSelectedImage, selectedImage }) {
  const [imageFile, setImageFile] = useState(null);
  const [showImage, setshowImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file); // Set the file for UI purposes
      setImageUrl(URL.createObjectURL(file)); // Display the image in the UI
  
      const reader = new FileReader();
      reader.onload = function () {
        const base64String = reader.result.split(",")[1]; // Extract only the Base64 portion
        console.log("Base64 String:", base64String); // For debugging
        setSelectedImage({
          image: base64String,
          extension: file.type.split('/')[1]
        }); // Store the Base64 string
      };
      reader.readAsDataURL(file); // Start reading the file as a data URL
    } else {
      alert("Invalid file type. Please select an image file.");
    }
  };

  useEffect(() => {
    try {
      console.log("[SELECTED IMAGE]:", selectedImage);
    } catch (err) {
      console.log("[ERROR]:", err);
    }
  }, [selectedImage]);

  const handlePlayImage = () => {
    setshowImage(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
    else return (bytes / 1073741824).toFixed(2) + " GB";
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setSelectedImage(null);
    setshowImage(false);
    setImageUrl("");
    fileInputRef.current.value = null;
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-4 py-10 text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        <img src="/cloud.png" className="aspect-auto" />
        {/* {imageFile ? (
              <image className="w-full" controls>
                <source src={imageUrl} type={imageFile.type} />
                Your browser does not support the image tag.
              </image> */}
        {/* ) : ( */}
        <p>
          <span className="text-blue">Drag</span> or{" "}
          <span className="text-blue">Browse</span> your File
        </p>
        {/* //   <p><span>Drag</span> and drop a image here or click to browse</p> */}
        {/* )} */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
      {imageFile && (
        <div className="mt-4 flex h-fit w-full justify-between rounded-md border-2 border-[#BBBBBB] bg-bg_gray p-4">
          <div className="flex h-full w-fit gap-3">
            <div className="flex justify-center">
              <button className="rounded text-white" onClick={handlePlayImage}>
                <Image alt="Play" height={40} width={40} src="/Play.png" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <p className="font-semibold">{imageFile.name}</p>
              </div>
              <div>
                <p className="text-sm text-[#7C7C7C]">
                  {formatFileSize(imageFile.size)}
                </p>
              </div>
            </div>
          </div>
          <div className="cancelUploadedImage flex items-center">
            <button className="text-red-500" onClick={handleRemoveImage}>
              <Image height={30} width={30} alt="cross" src="/Cross.png" />
            </button>
          </div>
        </div>
      )}

      {showImage && imageFile && (
        <img className="h-2/6 w-6/12" src={imageUrl} />
        //     <source src={imageUrl} type={imageFile.type} />
        //     Your browser does not support the image tag.
        //   </img>
      )}
    </div>
  );
}

export default ImageUpload;
