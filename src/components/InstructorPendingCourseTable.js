import InstructorCourseRow from "./InstructorCourseRow";
import Table from "./Table";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function InstructorPendingCourseTable({
  courses,
  courseStatus,
  emptyStateClasses = "",
}) {
  const heading = courseStatus !== "all" ? courseStatus : null;
  console.log(heading);
  console.log(`Courses`, courses);

  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );
  const [paymentMethodAvailable, setPaymentMethodAvailable] = useState(false);
  const router = useRouter();

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
  if (!courses?.length)
    return (
      <div
        className={`${emptyStateClasses} text-center flex size-full flex-col items-center justify-center gap-4 `}
      >
        <h2 className="text-2xl font-medium capitalize pb-1">
          No Courses Posted Yet...
        </h2>
        <p className="pb-1">
          You Have'nt Posted Any Courses Yet, Please Click The Button To Get Started
        </p>
        <Button
            onClick={handleUploadCourseClick}
            fill="fill"
            className=""
          >
            Upload Course +
          </Button>
      </div>
    );
  return (
    <>
      <div className="component-header flex items-center justify-between">
        <h2 className="text-4xl font-semibold capitalize">{heading} courses</h2>
      </div>
      <Table columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_1fr_1fr_0.25fr]">
        <Table.Header>
          <div></div>
          <div>Course</div>
          <div>Instructor</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Status</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={courses}
          render={(course, i) => (
            <InstructorCourseRow course={course} key={i} />
          )}
        />
      </Table>
      <div className="h-10"></div>
    </>
  );
}

export default InstructorPendingCourseTable;
