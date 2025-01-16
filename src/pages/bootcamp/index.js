import BootcampHero from "@/components/bootcampHero";
import Footer from "@/components/Footer";
import HomePageNavbar from "@/components/HomePageNavbar";
import LayoutXPadding from "@/components/LayoutXPadding";
import LiveCoursesCard from "@/components/LiveCoursesCard";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Bootcamp = () => {
  const router = useRouter();

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
      <div class="bg-gray-50 py-10">
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 class="text-3xl font-bold text-gray-900">
            Live online UX/UI Design <br /> Bootcamps
          </h2>
          <p class="mt-3 text-gray-600">
            Explore courses from experienced, real-world experts.
          </p>
        </div>
        <div className="mx-auto mt-12 flex max-w-screen-xl justify-end">
          <div className="flex gap-3">
            <button
              onClick={() =>
                setSortOrder(
                  filter === "Most Popular" ? "New Arrivals" : "Most Popular",
                )
              }
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
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <LiveCoursesCard key={index} />
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bootcamp;
