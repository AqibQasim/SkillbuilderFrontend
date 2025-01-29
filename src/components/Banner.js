import Image from "next/image";
import { useState, useEffect } from "react";

const dismissBanner = () => {
  const now = new Date();
  const item = {
    dismissed: true,
    expiry: now.getTime() + 24 * 60 * 60 * 1000,
  };
  localStorage.setItem("discountBanner", JSON.stringify(item));
};

const shouldShowBanner = () => {
  const itemStr = localStorage.getItem("discountBanner");
  if (!itemStr) return true;

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem("discountBanner");
    return true;
  }

  return !item.dismissed;
};

function Banner({ className = "" }) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(shouldShowBanner());
  }, []);

  const handleClose = () => {
    dismissBanner();
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`${className} banner relative mb-3 bg-[#3759FF] p-2 text-center text-white xl:mb-5 xlg:p-5`}
    >
      <p className="text-[0.625rem] font-medium md:text-sm lg:text-[1rem]">
        Start the year strong with unlimited learning at your fingertips. Save
        big with &nbsp;
        <span className="font-bold">50% off Skillbuilder</span>
        &nbsp; and unlock your potential all year long!
      </p>
      <button
        className="close-banner-btn absolute right-2 top-1/2 size-4 -translate-y-1/2 xlg:right-3"
        onClick={handleClose}
      >
        <Image src="/Cross.png" height={16} width={16} alt="Close" />
      </button>
    </div>
  );
}

export default Banner;
