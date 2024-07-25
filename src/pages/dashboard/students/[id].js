import React from "react";
import StudentProfile from "@/components/StudentProfile";
import StrudentEnrollCourses from "@/components/StrudentEnrollCourses";
import DashboardLayout from "@/components/DashboardLayout";
import Courses from "@/components/Courses";

const StudentsDetail = () => {
  return (
    <DashboardLayout>
      <StudentProfile />
      {/* <StudentEducation /> */}
      <StrudentEnrollCourses paddingTop="pt-10" heading="Enrolled Courses" />
      {/* <Courses paddingTop="pt-10" heading="Enrolled Courses" /> */}
    </DashboardLayout>
  );
};

export default StudentsDetail;
