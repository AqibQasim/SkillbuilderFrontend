"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import Form from "./Form";
import { useState } from "react";
import styles from "../styles/form.module.css";
import CurrentPath from "./CurrentPath";

const Profile = ({ profile_text }) => {
  const [state, setstate] = useState(true);
  const { image, name, email, course, location } = profile_text;
  return (
    <div className="w-full  bg-gray-100 ">
      <Navbar />

      <div className="flex flex-col justify-center mt-10 pt-10">
        <div className="ml-16 pl-8 mb-5 ">
          <CurrentPath />
        </div>
        <div className="w-[100%] h-[60%] bg-white flex items-center justify-center">
          <div className="flex items-center w-[70%] m-3 max-xsm:flex-col max-sm:flex-col max-md:flex-col lg:flex-row ">
            <div className="flex items-center w-[80%] m-3 p-3 max-xsm:flex-col max-sm:flex-col max-md:flex-col lg:flex-row ">
              <div className="m-2 p-2 w-[27%] relative">
                <Image
                  src={image}
                  width={160}
                  height={160}
                  alt=""
                  className="w-full h-auto"
                />

                {state && (
                  <Image
                    src="/profilechange.svg"
                    width={40}
                    height={40}
                    alt=""
                    className="absolute bottom-2 right-2 sm:bottom-1 sm:right-2 md:bottom-3 md:right-3 lg:bottom-5 lg:right-5 cursor-pointer"
                  />
                )}
              </div>

              <div className="mt-4 flex flex-col max-sm:items-center max-md:items-center lg:items-start">
                <h1 className="text-xl max-xsm:text-sm md:text-xl lg:text-xl font-bold mb-3 leading-5">
                  {name}
                </h1>
                <p className="font-normal max-sm:text-xs max-md:text-xs lg:text-sm text-wrap mb-2">
                  Email:{" "}
                  <span className="font-light text-bg_text_gray pl-1">
                    {email}
                  </span>
                </p>
                <p className="font-normal max-sm:text-xs max-md:text-xs lg:text-sm text-wrap mb-2">
                  Course:{" "}
                  <span className="font-light text-bg_text_gray pl-1">
                    {course}{" "}
                  </span>
                </p>
                <p className="font-normal max-sm:text-xs max-md:text-xs lg:text-sm text-wrap mb-2">
                  Location:{" "}
                  <span className="font-light text-bg_text_gray pl-1">
                    {location}
                  </span>
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col gap-20 max-md:gap-5 lg:gap-20 max-xsm:gap-5  max-xsm:items-center  max-md:items-center lg:items-end mx-4">
                <div>
                  <Image
                    src="/Icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    onClick={() => {
                      setstate(!state);
                    }}
                  />
                </div>
                <div className="flex sm:flex-row md:flex-row lg:flex-row gap-3 h-[100%] pt-5">
                  <a href="https://www.twitter.com" className="hover:bg-blue">
                    <Image src="/twitter.svg" alt="" width={20} height={20} />
                  </a>
                  <a href="https://www.linkedin.com" className="hover:bg-blue">
                    <Image src="/Linkedin.svg" alt="" width={20} height={20} />
                  </a>
                  <a href="https://www.facebook.com" className="hover:bg-blue">
                    <Image src="/facebook.svg" alt="" width={20} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {state && (
          <div className=" max-xsm:ml-10 max-xsm:pl-10 max-sm:ml-20 max-sm:pl-10 md:pl-10 md:ml-10 lg:ml-0 lg:pl-0">
            <Form />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default Profile;
