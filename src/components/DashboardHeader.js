import Link from "next/link";
import Button from "./Button";
import User from "./User";
import Image from "next/image";
import MagnifierSvg from "./MagnifierSvg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DashboardHeader() {
  const router = useRouter();
  const isAdminRoute = router.pathname.includes("/admin");
  const userId = useSelector((state) => state.auth.user);
  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );
  const [paymentMethodAvailable, setPaymentMethodAvailable] = useState(false);

  const fetchPaymentDetails = async () => {
    try {
      console.log(instructorId);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/check-payment-rec?id=${instructorId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to fetch payment details",
        );
      }

      const data = await response.json();
      console.log("API Response Data:", data); // Log entire response data for debugging
      const { message } = data;

      // Validate that `message` is an array and check its length
      if (Array.isArray(message)) {
        console.log("Message len is ", message.length);
        if (message.length > 0) {
          setPaymentMethodAvailable(true);
        } else {
          alert("Please Add payment method first.");
          router.push('/dashboard/payments');
        }
      } else {
        throw new Error(
          "Unexpected response format: `message` is not an array",
        );
      }
    } catch (err) {
      console.error("Error in fetchPaymentDetails:", err);
    }
  };

  const handleUploadCourseClick = async () => {
    await fetchPaymentDetails();
  };

  useEffect(() => {
    if (paymentMethodAvailable) {
      router.push('/course-upload');
    } 
  }, [paymentMethodAvailable]);

  // useEffect(() => {
  //   if (instructorId) {
  //     console.log("INSTRUCTOR ID IN PAYMENTS", instructorId);
  //     console.log("payment method avl is ", paymentMethodAvailable);
  //   }
  // }, [instructorId, userId, paymentMethodAvailable]);

  return (
    <header className="flex h-[75px] w-full items-center justify-end gap-6 border-b border-dashboard-border px-5">
      <Search />
      {!isAdminRoute && (
        <>
          <Button
            fill="unfill"
            onClick={() => {
              router.push(`/`);
            }}
          >
            Student
          </Button>
          <Button
            onClick={handleUploadCourseClick}
            className="hidden md:block"
          >
            Upload course +
          </Button>
        </>
      )}
      <User />
    </header>
  );
}

export default DashboardHeader;

function Search() {
  return (
    <div className="group mr-auto hidden w-full rounded-lg border-[1px] border-bg_text_gray pl-4 focus-within:border-blue md:flex md:items-center md:justify-between md:gap-2 lg:flex lg:w-[25%]">
      <label
        htmlFor="search"
        className="group-focus-within:text-black flex cursor-pointer items-center text-bg_text_gray"
      >
        <MagnifierSvg />
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        className="w-full rounded-r-lg bg-transparent py-2 outline-none"
      />
    </div>
  );
}
