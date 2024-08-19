import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneUser } from "../../redux/thunks/userInfoThunk";

const Writereview = ({openModal}) => {
  const dispatch = useDispatch();
  /**
   *
   */ 
  const fetcheduserdata = useSelector((state) => state.singleUser);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchOneUser(user));
  }, []);
  useEffect(() => {
    console.log("Fetched User Data", fetcheduserdata.userData);
  }, [fetcheduserdata]);
  
  return (
    <div className="flex justify-center p-10">
      <div className="w-[75%] max-md:w-[100%] h-[6rem] rounded-md bg-white flex justify-between">
        <div className="m-5 pr-3 pl-5 flex items-center">
          <Image
            className="rounded-full"
            src= {fetcheduserdata?.userData?.profile || "/Avatardisplay.png"}
            alt="profile-picture"
            width={60}
            height={60}
          />
          <div class="font-medium dark:text-bg_text_gray text-sm">
            <p className="text-black ml-4">{fetcheduserdata?.userData?.first_name} {fetcheduserdata?.userData?.last_name}</p>
          </div>
        </div>
        <div className="flex max-md:w-[50%] max-md:text-xs items-center m-5 pr-5 ">
          <button onClick={openModal} className="py-2 px-3  max-md:py-2 max-md:px-2 lg:flex justify-between items-center w-full lg:w-auto bg-blue text-white rounded-lg text-sm">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Writereview;
