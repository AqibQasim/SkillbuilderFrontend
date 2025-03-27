import React from "react";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import AdminLiveCoursesTable from "@/components/AdminLiveCoursesTable";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useState } from "react";
import AdminLiveCoursesStudents from "@/components/AdminLiveCoursesStudents";
import WithAdminAuth from "@/components/WithAdminAuth";

const index = () => {
  const [LiveCourses, setLiveCourses] = useState(null);
  const [LiveCoursesStudents, setLiveCoursesStudents] = useState(null);

  async function getLiveCourses() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-live-session-course`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();
      console.log('data11122', data)
      setLiveCourses(data?.data);
      return data?.data;
    } catch (error) {
      console.log("Error occured: ", error);
    }
  }

  async function getLiveCoursesStudents() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-purchased-live-courses`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();

      setLiveCoursesStudents(data?.data);
      console.log(data);
      return data?.data;
    } catch (error) {
      console.log("Error occured: ", error);
    }
  }

  useEffect(() => {
    console.log("Live courses are: ", getLiveCourses());
    console.log("Live Students are: ", getLiveCoursesStudents());
  }, []);

  return (
    <AdminDashboardLayout>
      <h1 className="text-xl">All Live Courses</h1>
      <AdminLiveCoursesTable courses={LiveCourses} />
      <h1 className="text-xl">All Students</h1>
      <AdminLiveCoursesStudents students={LiveCoursesStudents} />
    </AdminDashboardLayout>
  );
};

export default WithAdminAuth(index);
