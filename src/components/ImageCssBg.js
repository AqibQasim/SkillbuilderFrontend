import Image from "next/image";

function ImageCssBg({ src, alt, className, quality = 80, noSize = false }) {
  return (
    <Image
      src={src}
      fill
      sizes={
        !noSize
          ? ""
          : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      }
      placehoder="blur"
      quality={quality}
      className={`${className} object-cover`}
      alt={alt || "an image"}
    />
  );
}

export default ImageCssBg;
