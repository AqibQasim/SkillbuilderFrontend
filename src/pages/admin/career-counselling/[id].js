import React from "react";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

const liveCourseData = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [CounsellingStudent, setCounsellingStudent] = useState(null);


  async function getCounsellingStudent() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-career-counselling-payment?student_id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      console.log("students enrolled in course are ", data?.data);
      setCounsellingStudent(data?.data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    if (id) {
        getCounsellingStudent();
    }
  }, [id]);

  useEffect(() => {
    if (CounsellingStudent) {
      console.log("Counselling student: ", CounsellingStudent);
    }
  }, [CounsellingStudent]);

  return (
    <AdminDashboardLayout>
      <div>
        <ul>
          <li className="mt-2">
            <span className="font-bold">Student Name: </span>
            {CounsellingStudent?.student?.first_name}{" "}
            {CounsellingStudent?.student?.last_name}
          </li>
          <li className="mt-2">
            <span className="font-bold">Student Email: </span>
            {CounsellingStudent?.student?.email}{" "}
          </li>
          <li>
            <span className="font-bold">Joining date:</span>{" "}
            {CounsellingStudent?.created_at.split("T")[0]}
            {/* <span className="ms-2">
              {CounsellingStudent?.created_at.split("T")[1].split(".")[0]}
            </span> */}
          </li>

          <li>
            <span className="font-bold">Recruitinn Summary:</span>{" "}
            {CounsellingStudent?.recruitinn_summary}
          </li>
          <li>
            <span className="font-bold">Booking date:</span>{" "}
            {CounsellingStudent?.booking_date}
          </li>
          <li>
            <span className="font-bold">Booking Time:</span>{" "}
            {CounsellingStudent?.booking_time.split(".")[0]}
          </li>
        </ul>
      </div>
    </AdminDashboardLayout>
  );
};

export default liveCourseData;
