import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../redux/thunks/userInfoThunk";

const Writereview = ({openModal}) => {
  const dispatch = useDispatch();
  /**
   *
   */ 
  // const fetcheduserdata = useSelector((state) => state.singleUser);
  const user = useSelector((state) => state.auth.user);

  const [userData, setUserData] = useState(null);

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
  // useEffect(() => {
  //   console.log("Fetched User Data", fetcheduserdata.userData);
  // }, [fetcheduserdata]);
  
  return (
    <div className="flex justify-center p-10">
      <div className="flex h-[6rem] w-[75%] justify-between rounded-md bg-white max-md:w-[100%]">
        <div className="m-5 flex items-center pl-5 pr-3">
          <Image
            className="rounded-full"
            src="/Avatardisplay.png"
            alt="profile-picture"
            width={60}
            height={60}
          />
          <div class="text-sm font-medium dark:text-bg_text_gray">
            <p className="text-black ml-4">
              {userData?.first_name}{" "}
              {userData?.last_name}
            </p>
          </div>
        </div>
        <div className="m-5 flex items-center pr-5 max-md:w-[50%] max-md:text-xs">
          <button
            onClick={openModal}
            className="w-full items-center justify-between rounded-lg bg-blue px-3 py-2 text-sm text-white lg:flex lg:w-auto max-md:px-2 max-md:py-2"
          >
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Writereview;
