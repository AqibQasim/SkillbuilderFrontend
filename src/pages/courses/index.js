import Banner from "@/components/Banner";
import ExploreCourses from "@/components/ExploreCourses";
import Footer from "@/components/Footer";
import HomePageNavbar from "@/components/HomePageNavbar";
import LayoutXPadding from "@/components/LayoutXPadding";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import BootcampHero from "@/components/bootcampHero";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CourseDetails = () => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const [isClient, setIsClient] = useState(false);

  const [popularTopics, setPopularTopics] = useState([
    {
      topic: "Data Science",
      checked: false,
    },
    {
      topic: "Python",
      checked: false,
    },
    {
      topic: "JavaScript",
      checked: false,
    },
  ]);

  // const togglePopularTopicsClickedByUser = (e) => {
  //   const valueSelected = e.target?.textContent;

  //   if (popularTopicsTicked?.length > 0) {
  //     for (let i = 0; i < popularTopicsTicked?.length; i++) {
  //       if (popularTopicsTicked[i] !== valueSelected) {
  //         setPopularTopicsTicked((c) => [...c, valueSelected]);
  //       } else {
  //         const copyPopularTopicsClicked = popularTopicsTicked;
  //         copyPopularTopicsClicked?.slice(i, 1);
  //         setPopularTopicsTicked(copyPopularTopicsClicked);
  //       }
  //     }
  //   }
  // };

  useEffect(() => {
    setIsClient(true);
  }, [router?.isReady, cartItems]);

  if (!isClient) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {/* <Banner /> */}
      <div className="h-full w-full bg-bg_gray pt-4">
        <LayoutXPadding>
          <div className="t">
            <HomePageNavbar className="!mt-0 mb-4" />
          </div>
        </LayoutXPadding>

        <BootcampHero
          title={"Introduce SkillBuilder and the range of courses available."}
          subtitle={
            "Explore top-rated courses designed to help you master in-demand skills and achieve your goals."
          }
          tagline={"Courses"}
        />
        <div class="bg-gray-50 py-10">
          <div className="mx-auto max-w-screen-xl px-4">
            <h2 class="text-2xl font-bold text-gray-900">Popular topics</h2>
            <p class="mt-2 text-gray-600">
              Explore courses from experienced, real-world experts.
            </p>
          </div>
          <div class="mx-auto max-w-screen-lg px-4">
            {/* Title Section  */}

            {/* Topics Section  */}
            <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {/* <!-- Topic Buttons --> */}
              {popularTopics?.map((popularTopic, index) => (
                <div
                  onClick={(e) => {
                    setPopularTopics((v) => {
                      const updatedTopics = [...v]; // Create a shallow copy of the array
                      if (updatedTopics[index]) {
                        updatedTopics[index].checked =
                          !updatedTopics[index].checked; // Toggle the `checked` property
                      }
                      return updatedTopics; // Return the new array
                    });
                  }}
                  class={`cursor-pointer rounded-full border border-gray-300 ${popularTopic?.checked ? "bg-blue-400" : "bg-pink"} px-4 py-2 text-center text-gray-800 hover:bg-gray-100`}
                >
                  {popularTopic?.topic}
                </div>
              ))}
              {/* <span
              onClick={togglePopularTopicsClickedByUser}
              class="cursor-pointer rounded-full border border-gray-300 bg-pink px-4 py-2 text-center text-gray-800 hover:bg-gray-100"
            >
              Python
            </span>
            <span
              onClick={togglePopularTopicsClickedByUser}
              class="cursor-pointer rounded-full border border-gray-300 bg-pink px-4 py-2 text-center text-gray-800 hover:bg-gray-100"
            >
              Machine Learning
            </span>
            <span
              onClick={togglePopularTopicsClickedByUser}
              class="cursor-pointer rounded-full border border-gray-300 bg-pink px-4 py-2 text-center text-gray-800 hover:bg-gray-100"
            >
              Generate AI
            </span>
            <span
              onClick={togglePopularTopicsClickedByUser}
              class="cursor-pointer rounded-full border border-gray-300 bg-pink px-4 py-2 text-center text-gray-800 hover:bg-gray-100"
            >
              Data Analysis
            </span>
            <span
              onClick={togglePopularTopicsClickedByUser}
              class="cursor-pointer rounded-full border border-gray-300 bg-pink px-4 py-2 text-center text-gray-800 hover:bg-gray-100"
            >
              JavaScript
            </span>
            <span
              onClick={togglePopularTopicsClickedByUser}
              class="cursor-pointer rounded-full border border-gray-300 bg-pink px-4 py-2 text-center text-gray-800 hover:bg-gray-100"
            >
              Data Science
            </span>
            <span
              onClick={togglePopularTopicsClickedByUser}
              class="cursor-pointer rounded-full border border-gray-300 bg-pink px-4 py-2 text-center text-gray-800 hover:bg-gray-100"
            >
              Python
            </span>
            <span
              onClick={togglePopularTopicsClickedByUser}
              class="cursor-pointer rounded-full border border-gray-300 bg-pink px-4 py-2 text-center text-gray-800 hover:bg-gray-100"
            >
              Machine Learning
            </span>
            <span
              onClick={togglePopularTopicsClickedByUser}
              class="cursor-pointer rounded-full border border-gray-300 bg-pink px-4 py-2 text-center text-gray-800 hover:bg-gray-100"
            >
              Data Science
            </span> */}
            </div>
          </div>
        </div>

        <ExploreCourses popularTopics={popularTopics} />
        <Footer />
      </div>
    </>
  );
};

export default CourseDetails;
