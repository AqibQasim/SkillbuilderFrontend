import BootcampHero from "@/components/bootcampHero";
import Footer from "@/components/Footer";
import HomepageFooter from "@/components/HomepageFooter";
import HomePageNavbar from "@/components/HomePageNavbar";
import LayoutXPadding from "@/components/LayoutXPadding";
import LiveCoursesCard from "@/components/LiveCoursesCard";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLiveSessionCourses } from "../../../redux/thunks/liveSessionCoursesThunk";

const Bootcamp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const liveSessionCourses = useSelector(
    (state) => state.liveSessionCourses.liveSessionCourses,
  );

  const { user, isInstLoading } = useSelector(
    (state) => state.singleInstructor || { user: {}, isInstLoading: true },
  );

  const { reviewsData: reviews, isReviewsLoading } = useSelector(
    (state) => state.allReviews || { reviewsData: [], isReviewsLoading: true },
  );

  const courses = useSelector((state) => state.cart.items);
  const [isClient, setIsClient] = useState(false);
  const [sortOrder, setSortOrder] = useState("Most Popular");

  useEffect(() => {
    setIsClient(true);
  }, [router?.isReady, courses]);

  useEffect(() => {
    dispatch(getAllLiveSessionCourses());
  }, []);

  if (!isClient) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-bg_gray pt-4">
      {/* <Navbar cartItemsLength={courses?.length} /> */}
      {/* add this for now */}
      <LayoutXPadding>
        <div className="s">
          <HomePageNavbar className="!mb-4 !mt-0" />
        </div>
      </LayoutXPadding>

      <BootcampHero
        title={"Introduce SkillBuilder and the range of courses available."}
        subtitle={
          "Explore top-rated courses designed to help you master in-demand skills and achieve your goals."
        }
        tagline={"Courses"}
      />
      <div class="bg-gray-50 pt-10">
        <div className="mx-auto max-w-[92%] max-xsm:w-[80%] px-4">
          <h2 class="text-3xl font-bold text-gray-900">
            Live online UX/UI Design <br /> Bootcamps
          </h2>
          <p class="mt-3 text-gray-600">
            Explore courses from experienced, real-world experts.
          </p>
        </div>
        <div className="mx-auto mt-12 flex max-w-[92%] justify-end">
          <div className="flex gap-3">
            <button
           
              className="flex items-center rounded-full border border-gray-300 bg-pink px-4 py-2 text-sm text-gray-600 hover:bg-pink-300"
            >
              <Image
                src="/filter-tick.png"
                alt="dropdown-Image"
                width={20}
                height={20}
                className="ml-2 mr-3 inline-block"
              />
              Filter
            </button>
            <button
              onClick={() =>
                setSortOrder(
                  sortOrder === "Most Popular"
                    ? "New Arrivals"
                    : "Most Popular",
                )
              }
              className="flex items-center rounded-full border border-gray-300 bg-pink px-4 py-2 text-sm text-gray-600 hover:bg-pink-300"
            >
              Sort by <span className="ml-1 mr-4 font-bold"> {sortOrder}</span>
              <Image
                src="/dropdown.png"
                alt="dropdown-Image"
                width={20}
                height={20}
                className="ml-2 inline-block"
              />
            </button>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-screen-xl gap-3 xl:grid-cols-4 max-xlg:grid-cols-3">
          {liveSessionCourses?.map((course, i) => (
            <LiveCoursesCard course={course} />
          ))}
          {/* {Array(8)
            .fill(null)
            .map((_, index) => (
              <LiveCoursesCard course={course} key={index} />
            ))} */}
        </div>
        <div class="bg-gray-50 py-12">
          <div class="mx-auto max-w-[92%] max-xsm:w-[80%] px-4">
            <h2 class="text-3xl font-bold text-gray-900">
              Why 100+ designers train with Memorisely
            </h2>
            <p class="mt-3 text-gray-600">
              Explore courses from experienced, real-world experts.
            </p>
            <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* <!-- Card 1 --> */}
              <div class="rounded-lg bg-white p-6 shadow-md">
                <div class="mb-4">
                  <div class="mb-4 h-3 w-3 rounded-full bg-red-500"></div>
                  <h3 class="text-lg font-semibold text-gray-900">
                    Live Figma classes
                  </h3>
                </div>
                <p class="mb-12 text-sm text-gray-600">
                  Study practical UX/UI skills with live classes that are 100%
                  practical.
                </p>
                <div class="w-full overflow-hidden rounded-lg">
                  <Image
                    className="size-full"
                    src={"/live-session.png"}
                    width={500}
                    height={250}
                  />
                </div>
              </div>
              {/* <!-- Card 2 --> */}
              <div class="rounded-lg bg-white p-6 shadow-md">
                <div class="mb-4">
                  <div class="mb-4 h-3 w-3 rounded-full bg-red-500"></div>
                  <h3 class="text-lg font-semibold text-gray-900">
                    Career mentorship
                  </h3>
                </div>
                <p class="max-sm:mb-12 max-lsm:mb-9   lg:mb-10 md:mb-7 xl:mb-12 text-sm text-gray-600">
                  Gain career mentorship from real teams and community in 90+
                  countries.
                </p>
                <div class="max-xsm:h-[30%]  sm:h-[45.5%] md:h-[57%] lg:h-[50.5%] xl:[59.5%] w-full overflow-hidden rounded-lg">
                  <Image
                    className="size-full"
                    src={"/live-session2.png"}
                    width={500}
                    height={400}
                  />
                </div>
              </div>
              {/* <!-- Card 3 --> */}
              <div class="rounded-lg bg-white px-6 pb-6 pt-4 shadow-md">
                <div class="mb-1 rounded-full">
                  <Image
                    className=""
                    src={"/cape.png"}
                    width={50}
                    height={30}
                  />
                </div>

                <h3 class="mb-2 text-lg font-semibold text-gray-900">
                  Certification
                </h3>
                <p class="mb-10 text-sm text-gray-600">
                  Graduate with a UX/UI Design certification from Memorise.ly.
                </p>
                <div class="w-full overflow-hidden rounded-lg">
                  <Image
                    className="size-full"
                    src={"/live-session1.png"}
                    width={500}
                    height={250}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
      <HomepageFooter />
    </div>
  );
};

export default Bootcamp;
