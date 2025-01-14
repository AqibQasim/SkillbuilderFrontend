import Image from "next/image";

function ImageCssBg({ src, alt, className }) {
  return (
    <Image
      src={src}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      placehoder="blur"
      quality={80}
      className={`${className} object-cover`}
      alt={alt || "an image"}
    />
  );
}

export default ImageCssBg;
