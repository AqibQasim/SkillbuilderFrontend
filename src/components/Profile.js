"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import EditProfileForm from "./EditProfileForm";
import { useState } from "react";
import styles from "../styles/form.module.css";
import CurrentPath from "./CurrentPath";

const Profile = ({ profile_text }) => {
  const [state, setstate] = useState(true);
  const { image, name, email, course, location } = profile_text;
  return (
    <div className="w-full bg-gray-100">
      <Navbar />

      <div className="mt-10 flex flex-col justify-center pt-10">
        <div className="mb-5 ml-16 pb-5 pl-8">
          <CurrentPath />
        </div>
        <div className="flex h-[60%] w-[100%] items-center justify-center bg-white">
          <div className="m-3 flex w-[70%] items-center lg:flex-row max-xsm:flex-col max-sm:flex-col max-md:flex-col">
            <div className="m-3 flex w-[80%] items-center p-3 lg:flex-row max-xsm:flex-col max-sm:flex-col max-md:flex-col">
              <div className="relative m-2 w-[27%] p-2">
                <Image
                  src={image}
                  width={160}
                  height={160}
                  alt=""
                  className="h-auto w-full"
                />

                {state && (
                  <Image
                    src="/profilechange.svg"
                    width={40}
                    height={40}
                    alt=""
                    className={`absolute bottom-2 right-2 cursor-pointer sm:bottom-1 sm:right-2 md:bottom-3 md:right-3 lg:bottom-5 lg:right-5`}
                  />
                )}
              </div>

              <div className="mt-4 flex flex-col lg:items-start max-sm:items-center max-md:items-center">
                <h1 className="mb-3 text-xl font-bold leading-5 md:text-xl lg:text-xl max-xsm:text-sm">
                  {name}
                </h1>
                <p className="mb-2 text-wrap font-normal lg:text-sm max-sm:text-xs max-md:text-xs">
                  Email:{" "}
                  <span className="pl-1 font-light text-bg_text_gray">
                    {email}
                  </span>
                </p>
                <p className="mb-2 text-wrap font-normal lg:text-sm max-sm:text-xs max-md:text-xs">
                  Course:{" "}
                  <span className="pl-1 font-light text-bg_text_gray">
                    {course}{" "}
                  </span>
                </p>
                <p className="mb-2 text-wrap font-normal lg:text-sm max-sm:text-xs max-md:text-xs">
                  Location:{" "}
                  <span className="pl-1 font-light text-bg_text_gray">
                    {location}
                  </span>
                </p>
              </div>
            </div>
            <div className="">
              <div className="mx-4 flex flex-col gap-20 lg:items-end lg:gap-20 max-xsm:items-center max-xsm:gap-5 max-md:items-center max-md:gap-5">
                <div>
                  <Image
                    src="/Icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    onClick={() => {
                      setstate(!state);
                    }}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex h-[100%] gap-3 pt-5 sm:flex-row md:flex-row lg:flex-row">
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
          <div className="md:ml-10 md:pl-10 lg:ml-0 lg:pl-0 max-xsm:ml-10 max-xsm:pl-10 max-sm:ml-20 max-sm:pl-10">
            <EditProfileForm />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default Profile;
