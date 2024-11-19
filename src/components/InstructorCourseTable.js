import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import Filter from "./Filter";
import InstructorCourseRow from "./InstructorCourseRow";
import Loader from "./Loader";
import Table from "./Table";
import { useState } from "react";
import { useEffect } from "react";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Approved", value: "approved" },
  { label: "Pending", value: "pending" },
  { label: "Declined", value: "declined" },
];

function InstructorCourseTable({ courses = [], courseStatus }) {
  const router = useRouter();
  const isLoading = useSelector((state) => state.instructorCourses.isLoading);
  const status = courseStatus || router.query.status || "all";
  const heading = useMemo(() => (status !== "all" ? status : "All"), [status]);
  const statusCourses = useMemo(() => {
    if (status === "all") return courses;
    return courses?.filter((course) => course.status === status);
  }, [status, courses]);

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




  if (isLoading) return <Loader />;
  if (!statusCourses?.length) {
    return (
      <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-medium">No Courses Posted Yet...</h2>
        <p>
          You haven’t posted any courses yet. Please click the button to get
          started.
        </p>
        <Button onClick={handleUploadCourseClick} className="!px-14">
          Upload Course +
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="component-header flex items-center justify-between">
        <h1 className="text-4xl font-semibold capitalize">{heading} Courses</h1>
        {!courseStatus && (
          <Filter filterField="status" options={filterOptions} />
        )}
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
          data={statusCourses}
          render={(course, i) => (
            <InstructorCourseRow course={course} key={i} />
          )}
        />
      </Table>
    </>
  );
}

export default InstructorCourseTable;

// import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
// import Button from "./Button";
// import InstructorCourseRow from "./InstructorCourseRow";
// import Filter from "./Filter";
// import Loader from "./Loader";
// import Table from "./Table";

// const filterOptions = [
//   { label: "All", value: "all" },
//   { label: "Approved", value: "approved" },
//   { label: "Pending", value: "pending" },
//   { label: "Declined", value: "declined" },
// ];

// function InstructorCourseTable({ courseStatus }) {
//   const heading = courseStatus !== "all" ? courseStatus : null;

//   const {
//     courses: instructorCourses,
//     isLoading,
//     error,
//   } = useSelector((state) => state.instructorCourses);
//   const router = useRouter();
//   const status = router.query.status || "all";

//   if (isLoading) return <Loader />;
//   if (!instructorCourses.length)
//     return (
//       <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
//         <h2 className="text-2xl font-medium">No Courses posted yet... </h2>
//         <p>
//           you haven’t posted any course yet, please click the button to get
//           started
//         </p>
//         <Button href="courseUpload" className="!px-14">
//           Upload course +
//         </Button>
//       </div>
//     );

//   function filterInstructorCourses(courseStatus) {
//     let filteredCourses;
//     if (courseStatus) {
//       filteredCourses = instructorCourses.filter(
//         (course) => course.status === courseStatus,
//       );
//       return filteredCourses;
//     }

//     if (status === "all") filteredCourses = instructorCourses;
//     if (status === "approved")
//       filteredCourses = instructorCourses.filter(
//         (course) => course.status === "approved",
//       );
//     if (status === "pending")
//       filteredCourses = instructorCourses.filter(
//         (course) => course.status === "pending",
//       );
//     if (status === "declined")
//       filteredCourses = instructorCourses.filter(
//         (course) => course.status === "declined",
//       );

//     return filteredCourses;
//   }

//   const statusCourses = courseStatus
//     ? filterInstructorCourses(courseStatus)
//     : filterInstructorCourses();

//   return (
//     <>
//       <div className="component-header mt-4 flex items-center justify-between">
//         <h1 className="text-4xl font-semibold capitalize">
//           {heading} courses{" "}
//         </h1>
//         {!courseStatus ? (
//           <Filter filterField="status" options={filterOptions} />
//         ) : null}
//       </div>

//       <Table columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_1fr_1fr_0.25fr]">
//         <Table.Header>
//           <div></div>
//           <div>Course</div>
//           <div>Instructor</div>
//           <div>Price</div>
//           <div>Discount</div>
//           <div>Status</div>
//           <div></div>
//         </Table.Header>
//         <Table.Body
//           data={statusCourses}
//           render={(course, i) => (
//             <InstructorCourseRow course={course} key={i} />
//           )}
//         />
//       </Table>
//     </>
//   );
// }

// export default InstructorCourseTable;
