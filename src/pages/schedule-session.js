"use client"
import { Router } from 'next/router';
import React, { useEffect, useState } from 'react'
import { InlineWidget,  useCalendlyEventListener} from "react-calendly";
import { useRouter } from 'next/router';

const ScheduleSession = () => {

    const [profile, setProfile] = useState(null)
    const router = useRouter();

    const updateBookingData = async(startDate, startTime) => {

        try{
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API}/set-booking`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  booking_date: startDate,
                  booking_time: startTime,
                  instructor_id: 4,
                  student_id: profile.id,
                }),
              },
            );

            const data = await response.json()


        }catch(error){
            console.log(error);
        }

    }

     const getEventDetails = async (eventUri) => {
       try {
         const response = await fetch(eventUri, {
           headers: {
             Authorization: `Bearer ${process.env.NEXT_PUBLIC_CALENDLY_ACCESS_TOKEN}`, // Replace with your actual API key
           },
         });
         const data = await response.json();
         console.log("Event Details:", data);


        //  console.log("Start time: ", data.resource.start_time);
        

         const startTimeFull = data.resource.start_time;
         const startDate = startTimeFull.split("T")[0];
         const startTime = startTimeFull.split("T")[1];

         console.log("Start date is ", startDate);
         console.log("Start time is ", startTime);


        await updateBookingData(startDate, startTime)
        
        router.push("/")

        
         // Access the date and time from the response, e.g., data.start_time
       } catch (error) {
         console.error("Error fetching event details:", error);
       }
     };

      useCalendlyEventListener({
        onEventScheduled: (e) => {
          console.log("Fetching event details from:", e.data.payload.event.uri);
          getEventDetails(e.data.payload.event.uri);
        },
      });

    useEffect(() => {
        if (typeof window !== "undefined") {
          setProfile(JSON.parse(window.localStorage.getItem("profile")));
          console.log("profile iss", profile);
        }
    }, [])


  return (
    <div className="overflow-hidden">
      {profile && (
        <InlineWidget
          url={`https://calendly.com/syedzubair/meet-with-zubair-co-ventech?email=${profile.email}&name=${profile.first_name + " " + profile.last_name}`}
        />
      )}
    </div>
  );
}

export default ScheduleSession;