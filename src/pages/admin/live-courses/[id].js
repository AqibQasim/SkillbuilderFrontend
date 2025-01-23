import React from "react";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

const liveCourseData = () => {
  const router = useRouter();
  const { id } = router.query;
  const [liveCourse, setLiveCourse] = useState(null);
  const [liveStudents, setLiveStudents] = useState(null);

  async function getLiveCourse() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-live-session-course/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      console.log("Live course is ", data?.data);
      setLiveCourse(data?.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async function getEnrolledStudents() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/get-live-session-course-enrolled-students?course_id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      console.log("students enrolled in course are ", data?.data);
      setLiveStudents(data?.data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    if (id) {
      getLiveCourse();
      getEnrolledStudents();
    }
  }, [id]);

  useEffect(() => {
    if (liveCourse) {
      console.log("Updated liveCourse2222: ", liveCourse);
      console.log("Live courses Length", liveCourse.length);
    }
  }, [liveCourse]);

  useEffect(() => {
    if (liveStudents) {
      console.log("live students: ", liveStudents);
    }
  }, [liveStudents]);

  return (
    <AdminDashboardLayout>
      <div>
        <ul>
          <li>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_API}/media/course/${liveCourse?.image}`}
              alt={liveCourse?.title}
              className="h-40 w-40 rounded-2xl object-cover"
            />
          </li>
          <li className="mt-2">
            <span className="font-bold">Course title: </span>
            {liveCourse?.title}
          </li>
          <li>
            <span className="font-bold">Course description:</span>{" "}
            {liveCourse?.description}
          </li>
          <li>
            <span className="font-bold">Mentor: </span>
            {liveCourse?.instructor?.user?.first_name}{" "}
            {liveCourse?.instructor?.user?.last_name}
          </li>
          <li>
            <span className="font-bold">Course Outcome:</span>{" "}
            {liveCourse?.learning_outcomes}
          </li>
          <li>
            <span className="font-bold">Course Price:</span>{" "}
            {liveCourse?.amount}$
          </li>

          <li className="mt-4">
            <span className="font-bold">Course Modules:</span>
            {liveCourse?.modules.map((module, index) => (
              <div key={index}>
                <span className="font-bold">
                  <div>
                    {index + 1}. {module?.title}
                  </div>
                </span>
                <div className="ms-3">{module?.description}</div>
              </div>
            ))}
          </li>

          {liveStudents && liveStudents.length > 0 ? (
            <li>
              <div className="mt-2">
                <span className="font-bold"> Enrolled Students:</span>
                <div className="grid grid-cols-3">
                  <span className="font-bold">Name</span>
                  <span className="font-bold">Email</span>
                  <span className="font-bold">Joining Date</span>
                </div>
                {liveStudents?.map((student, index) => (
                  <div key={index} className="mt-2 grid grid-cols-3">
                    <div>
                      {index + 1}. {student?.student?.first_name}{" "}
                      {student?.student?.last_name}
                    </div>
                    <div>{student?.student?.email}</div>
                    <div>{student?.created_at.split("T")[0]}</div>
                  </div>
                ))}
              </div>
            </li>
          ) : (
            <li>
              <div className="mt-2 font-bold">
                No students found for this course
              </div>
            </li>
          )}
        </ul>
      </div>
    </AdminDashboardLayout>
  );
};

export default liveCourseData;
