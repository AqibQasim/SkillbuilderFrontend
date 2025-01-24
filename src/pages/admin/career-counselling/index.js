import React, { useEffect } from "react";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import AdminCounsellingTable from "@/components/AdminCounsellingTable";
import { useState } from "react";

const index = () => {

   const [CounsellingStudents, setCounsellingStudents] = useState(null);
      
      async function getCounsellingStudents(){
          try {
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_API}/get-career-counselling-payments`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                },
              );
              const data = await response.json();
  
              setCounsellingStudents(data?.data);
              return data?.data;
  
          } catch (error) {
            console.log("Error occured: ", error);
          }
      }

  useEffect(() => {
    getCounsellingStudents();
  }, [])

  
  useEffect(() => {
    console.log("Students for counselling are: ", CounsellingStudents);

  }, [CounsellingStudents]);

  return (
    <AdminDashboardLayout>
      <div>All Enrolled Students for Career Counselling</div>
      <AdminCounsellingTable students={CounsellingStudents} />
    </AdminDashboardLayout>
  );
};

export default index;
