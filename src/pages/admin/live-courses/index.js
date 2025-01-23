import React from 'react'
import AdminDashboardLayout from '@/components/AdminDashboardLayout'
import AdminLiveCoursesTable from '@/components/AdminLiveCoursesTable';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCourses } from '../../../../redux/thunks/allCoursesThunk';
import { useState } from 'react';

const index = () => {

    const [LiveCourses, setLiveCourses] = useState(null);
    
    async function getLiveCourses(){
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

            setLiveCourses(data?.data);
            return data?.data;

        } catch (error) {
          console.log("Error occured: ", error);
        }
    }

   useEffect(() => {
        console.log("Live courses are: ", getLiveCourses());
   }, [])

   
   return (
     <AdminDashboardLayout>
       <h1 className="text-xl">All Live Courses</h1>
       <AdminLiveCoursesTable courses={LiveCourses} />
     </AdminDashboardLayout>
   );
}

export default index