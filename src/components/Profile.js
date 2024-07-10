"use client";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import EditProfileForm from "./EditProfileForm";
import Footer from "./Footer";
import LayoutWidth from "./LayoutWidth";

const Profile = ({ profile_text }) => {
  const [state, setstate] = useState(false);
  const { first_name, last_name, email, location } = useSelector(
    (state) => state.profile,
  );
  const {
    image,
    name,
    email: dummyEmail,
    course,
    location: dummyLocation,
  } = profile_text;
  let dummyFName;
  let dummyLName;
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col justify-center">
        <div className="flex h-[60%] w-[100%] items-center justify-center bg-white">
          <LayoutWidth>
            <div className="m-3 flex w-[70%] items-center lg:flex-row max-xsm:flex-col max-sm:flex-col max-md:flex-col">
              <div className="m-3 flex w-[80%] items-center p-3 lg:flex-row max-xsm:flex-col max-sm:flex-col max-md:flex-col">
                <div className="max-w[18.375rem] relative m-2 max-h-[18.375rem] w-[27%] min-w-28 p-2">
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
                    {first_name ? `${first_name} ` : "Set name "}
                    {last_name ? `${last_name}` : "Please"}
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
                      {location || "Set location"}
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
                    <a
                      href="https://www.linkedin.com"
                      className="hover:bg-blue"
                    >
                      <Image
                        src="/Linkedin.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      className="hover:bg-blue"
                    >
                      <Image
                        src="/facebook.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </LayoutWidth>
        </div>

        {state && (
          <LayoutWidth>
            <div className="md:pl-10 lg:pl-0 max-xsm:pl-10 max-sm:pl-10">
              <EditProfileForm />
            </div>
          </LayoutWidth>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default Profile;
