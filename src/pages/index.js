"use client";
import React, { useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { setCurrentTab } from "../utils/currentTabMethods";
import SkillsList from "@/components/SkillsList";
import PromotionalList from "@/components/PromotionalList";
import Courses from "../components/Courses";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import urlBase64ToUint8Array from "@/utils/urlBase64ToUint8Array";
import HomepageFooter from "@/components/HomepageFooter";
import HomePageReviews from "@/components/HomePageReviews";
import CoursesSection from "@/components/CoursesSection";
import ExploreCoursesAndBootcamps from "@/components/ExploreCoursesAndBootcamps";
import CareerCounselling from "@/components/CareerCounselling";
import CoursePlatforms from "@/components/CoursePlatforms";
import Showcase from "@/components/Showcase";
import Banner from "@/components/Banner";

const index = () => {
  // Set current tab on mount
  useEffect(() => {
    setCurrentTab("home");
    requestNotificationPermission();
  }, []);

  // Request Notification Permission
  const requestNotificationPermission = async () => {
    if ("Notification" in window) {
      const isAcceptedNotification = await Notification.requestPermission();
      if (isAcceptedNotification === "granted") {
        sendNotification();
      } else {
        console.warn("notification permission denied");
      }
    } else {
      console.error("This browser does not support notifications.");
    }
  };
  // Send a Notification
  const sendNotification = () => {
    // if ("Notification" in window) {
    //   console.log("Sending notification...");
    //   new Notification("Hello!", {
    //     body: "This is your notification.",
    //     //icon: "/icon.png", // Optional: Add an icon
    //   });
    // } else {
    //   console.error("Notifications are not supported in this browser.");
    // }
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker
        .register("/sw.js", {
          scope: "/",
        })
        .then(async (swRegistration) => {
          const existingSubscription =
            await swRegistration.pushManager.getSubscription();
          if (existingSubscription) {
            // Unsubscribe if the applicationServerKey is different
            console.log("Unsubscribing existing subscription...");
            await existingSubscription.unsubscribe();
          }
          const subscription = await swRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(
              process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
            ),
          });
          console.log("Push subscription:", subscription);
          // Send the subscription object to your backend
          fetch(`${process.env.NEXT_PUBLIC_BASE_API}/subscribe`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(subscription),
          }).then(async (res) => {
            console.log(await res.json());
          });
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  };

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);
  const courses = useSelector((state) => state.cart.items);
  console.log("length in root file:", courses?.length);

  // Ensure that we only set isClient to true when the router is ready and courses are available
  useEffect(() => {
    if (router?.isReady) {
      setIsClient(true);
      setLoading(false);
    }
  }, [router?.isReady, courses]);

  if (loading) {
    return (
      <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-bg_gray">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (!isClient) {
    return null;
  }

  // return (
  //   <>
  //     <div className="flex h-[100%] w-[100%] flex-col items-center bg-bg_gray">
  //       <Navbar cartItemsLength={courses?.length} />
  //       <HeroSection />
  //       <SkillsList />
  //       <Courses heading="Find the courses that fit you" />
  //       <PromotionalList />
  //       <Footer />
  //     </div>
  //   </>
  // );
  return (
    <div className="home-container home-container mx-auto max-w-[120em] space-y-12 font-satoshi">
      {/* <Banner /> */}
      <Showcase />
      <CoursePlatforms />
      <CareerCounselling />
      <ExploreCoursesAndBootcamps />
      <CoursesSection />

      {/* Globe section remaining */}
      {/* <LearningSection /> */}
      <HomePageReviews />
      <HomepageFooter />
    </div>
  );
};

export default index;
