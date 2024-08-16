"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/dropdown.module.css";
const LikeDislike = () => {
  const [like, setlikes] = useState(0);
  const [dislike, setdisklike] = useState(0);
  return (
    <>
      <div className="flex items-center">
        <Image
          src="/Like.svg"
          width={30}
          height={30}
          alt=""
          className="cursor-pointer mr-2"
          onClick={() => {
            setlikes(like + 1);
          }}
        />
        <span className="font-normal text-xs">{like}</span>
      </div>
      <div className="flex items-center">
        <Image
          src="/Dislike.svg"
          width={30}
          height={30}
          alt=""
          className="cursor-pointer ml-2"
          onClick={() => {
            setdisklike(dislike + 1);
          }}
        />{" "}
        <span className="font-normal text-xs">{dislike}</span>
      </div>
    </>
  );
};
export default LikeDislike;
