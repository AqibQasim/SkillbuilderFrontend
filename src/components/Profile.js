"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditProfileForm from "./EditProfileForm";
import Footer from "./Footer";
import LayoutWidth from "./LayoutWidth";
import { setSuccess } from "../../redux/slices/authSlice";
import { fetchOneUser } from "../../redux/thunks/userInfoThunk";
import ErrorMessage from "./ErrorMessage";

const Profile = () => {
  const dispatch = useDispatch();
  const fetcheduserdata = useSelector((state) => state.singleUser);
  const user = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState(null);
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file); // Set the file for UI purposes
      setImageUrl(URL.createObjectURL(file)); // Display the image in the UI

      const reader = new FileReader();
      reader.onload = function () {
        const base64String = reader.result.split(",")[1]; // Extract only the Base64 portion
        //console.log("Base64 String:", base64String); // For debugging
        setSelectedProfileImage({
          image: base64String,
          extension: file.type.split("/")[1],
        }); // Store the Base64 string
      };
      reader.readAsDataURL(file); // Start reading the file as a data URL
    } else {
      alert("Invalid file type. Please select an image file.");
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    dispatch(fetchOneUser(user));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/user/${user}`,
        );
        const data = await res.json();
        setUserData(data?.message);
        console.log("The user data iss", data);
      } catch (error) {
        console.log("Failed to fetch user: ", error);
      }
    };
    fetchData();
  }, [user]);

  const [state, setstate] = useState(false);

  // const { first_name, last_name, email, location } = useSelector(
  //   (state) => state.profile,
  // );

  console.log("STATE PROFILE ", state.profile);
  console.log(userData?.profile)

  const getProfileImage = //useCallback(
    () => {
      if (userData?.profile && imageUrl === null) {
        return `${process.env.NEXT_PUBLIC_BASE_API}/media/profile/${userData?.profile}`;
      }
      if (imageUrl) {
        return imageUrl;
      }
      return "/Avatardisplay.png";
    }; //,[fetcheduserdata?.userData?.profile,imageUrl])

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col justify-center">
        <div className="flex h-[60%] w-[100%] items-center justify-center bg-white">
          <LayoutWidth>
            <div className="m-3 flex w-[70%] items-center lg:flex-row max-xsm:flex-col max-sm:flex-col max-md:flex-col">
              <div className="m-3 flex w-[80%] items-center p-3 lg:flex-row max-xsm:flex-col max-sm:flex-col max-md:flex-col">
                <div className="max-w[18.375rem] relative m-2 max-h-[18.375rem] w-[27%] min-w-28 p-2">
                  <Image
                    src={getProfileImage()}
                    width={160}
                    height={160}
                    alt=""
                    className="h-auto w-full rounded-full"
                  />

                  {state && (
                    <div onClick={handleClick}>
                      <Image
                        src={"/profilechange.svg"}
                        width={40}
                        height={40}
                        alt=""
                        className={`absolute bottom-2 right-2 cursor-pointer sm:bottom-1 sm:right-2 md:bottom-3 md:right-3 lg:bottom-5 lg:right-5`}
                      />

                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-col lg:items-start max-sm:items-center max-md:items-center">
                  <h1 className="mb-3 text-xl font-bold leading-5 md:text-xl lg:text-xl max-xsm:text-sm">
                    {userData?.first_name
                      ? `${userData?.first_name} `
                      : "loading "}
                    {userData?.last_name ? `${userData?.last_name}` : "Please"}
                  </h1>
                  <p className="mb-2 text-wrap font-normal lg:text-sm max-sm:text-xs max-md:text-xs">
                    Email:{" "}
                    <span className="pl-1 font-light text-bg_text_gray">
                      {userData?.email || "No email"}
                    </span>
                  </p>
                  <p className="mb-2 text-wrap font-normal lg:text-sm max-sm:text-xs max-md:text-xs">
                    Course:{" "}
                    <span className="pl-1 font-light text-bg_text_gray">
                      {`${
                        userData?.enrolled_courses_by_student?.length < 1
                          ? "No Course"
                          : userData?.enrolled_courses_by_student?.[0].title
                      } ${
                        userData?.enrolled_courses_by_student?.length > 1
                          ? "+" +
                            (userData?.enrolled_courses_by_student?.length - 1)
                          : ""
                      }`}
                    </span>
                  </p>
                  <p className="mb-2 text-wrap font-normal lg:text-sm max-sm:text-xs max-md:text-xs">
                    Location:{" "}
                    <span className="pl-1 font-light text-bg_text_gray">
                      {userData?.location || "No Location set"}
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
              <EditProfileForm
                userProfilePic={selectedProfileImage}
                setCloseForm={setstate}
              />
            </div>
          </LayoutWidth>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Profile;
