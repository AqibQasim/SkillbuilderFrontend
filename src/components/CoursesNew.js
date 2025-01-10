import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import StarRating from "./StarRating";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/addToCart";

const CoursesNew = ({ heading, paddingTop }) => {
  const [loading, setLoading] = useState(true);
  const [starReady, setStarReady] = useState(false);
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const dispatch = useDispatch();

  // Static courses list
  const courses = [
    {
      id: 1,
      title: "Introduction to Programming",
      category: "Programming",
      amount: 100.00,
      discount: 20.00,
      learning_outcomes:
        "Learn the basics of programming and algorithms. loreanm afsf asf asf asf asf asf asf asfas ",
      image: "person_laptop.png",
      instructor: "Zubair Alam",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      category: "Programming",
      amount: 150.00,
      discount: 30.00,
      learning_outcomes:
        "Deep dive into advanced JavaScript concepts.loreanm afsf asf asf asf asf asf asf asfas ",
      image: "person_laptop.png",
      instructor: "Zubair Alam",
    },
    {
      id: 3,
      title: "Data Science with Python",
      category: "Data Science",
      amount: 200.00,
      discount: 50.00,
      learning_outcomes:
        "Master data analysis and visualization techniques.loreanm afsf asf asf asf asf asf asf asfas ",
      image: "person_laptop.png",
      instructor: "Zubair Alam",
    },
    {
      id: 5,
      title: "Mastering Python for Data Science",
      image: "person_laptop.png",
      amount: 129.00,
      discount: 29.00,
      category: "Programming",
      learning_outcomes:
        "Understand Python essentials, analyze data, and build predictive models. loreanm afsf asf asf asf asf asf asf asfas ",
      instructor: "Zubair Alam",
    },
    // Add more static courses here
  ];

  let filteredCourses = courses;

  if (selectedFilter || selectedCategory) {
    filteredCourses = courses.filter((c) =>
      selectedCategory ? c.category === selectedCategory : true,
    );

    if (selectedFilter?.toLowerCase() === "low to high") {
      filteredCourses = filteredCourses.sort(
        (a, b) => a.amount - a.discount - (b.amount - b.discount),
      );
    } else if (selectedFilter?.toLowerCase() === "high to low") {
      filteredCourses = filteredCourses.sort(
        (a, b) => b.amount - b.discount - (a.amount - a.discount),
      );
    }
  }

  useEffect(() => {
    // Simulate loading and check if StarRating styles are applied
    const timer = setTimeout(() => {
      setStarReady(true);
      setLoading(false);
    }, 300); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [router.asPath]);

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (course) => {
    if (!cartItems.some((item) => item.id === course.id)) {
      dispatch(addItem(course));
    }
  };

  const isCourseAddedToCart = (course) => {
    return cartItems.some((item) => item.id === course.id);
  };

  if (loading) {
    return (
      <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-bg_gray">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  const max_words = 10;

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="wrapper">
      <div className="flex w-full flex-col items-center">
        <div className="grid h-auto w-[100%] grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="img-container mb-4 flex h-full w-full max-w-sm transform cursor-pointer flex-col items-start rounded-2xl border border-[#F0F0F0] bg-white p-2 transition-shadow duration-300 hover:border-[rgb(152,159,233)] hover:shadow-lg"
                style={{ minHeight: "25rem", maxHeight: "25rem" }}
                onClick={() =>
                  course.id && router.push(`/courses/${course.id}`)
                }
              >
                <Image
                  className="h-[40%] w-[100%]"
                  src={course.image ? `/${course.image}` : "/dummyImg.svg"}
                  alt={course.title}
                  width={280}
                  height={260}
                />
                <div className="flex w-[100%] flex-grow flex-col justify-between p-2">
                  <div>
                    <div className="mt-2 flex w-full items-center justify-between">
                      {/* <div className="flex gap-2">
                        {course.rating ? (
                          <>
                            <span className="text-sm">{course.rating}</span>
                            <StarRating rating={course.rating} />
                          </>
                        ) : (
                          <span>Not Rated Yet</span>
                        )}
                      </div> */}
                      {/* {isCourseAddedToCart(course) && (
                        <span className="font-semibold text-blue">
                          Added To Cart
                        </span>
                      )} */}
                    </div>
                    <h3 className="text-md m-0 font-semibold text-[#2C2C2C] ">
                      {course.title}
                    </h3>
                    <p className="mb-2 text-[0.6rem] text-[#5C5C5C]">
                      {truncateText(course.learning_outcomes || "", max_words)}
                    </p>
                  </div>
                  <div className="text-xs">
                    By{" "}
                    <span className="font-semibold text-[#2C2C2C]">
                      {course.instructor}
                    </span>{" "}
                  </div>
                  <div className="mt-2 flex justify-start text-xs">
                    <div className="w-3">
                      <Image src={"/course_level.png"} width={1} height={1} />
                    </div>
                    <span className="mb-1 ms-1 self-start text-[#2C2C2C]">
                      <span className="text-[#929292]">Level: </span> Beginner
                    </span>
                  </div>
                  <div className="flex w-[100%] justify-between pb-2">
                    <div className="flex items-center justify-start gap-2 text-sm">
                      {course.discount > 0 && (
                        <span className="text-black">
                          <span className="stroke-bg_text_black line-through">
                            {course.amount}.00
                          </span>{" "}
                          -
                        </span>
                      )}
                      <span className="text-sm font-semibold text-blue">
                        $
                        {course.discount > 0
                          ? course.amount - course.discount
                          : course.amount}
                        .00
                      </span>
                    </div>

                    {/* <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(course);
                      }}
                      className="rounded-lg bg-blue px-2 py-2 text-xs text-white"
                    >
                      Add To Cart
                    </button> */}
                  </div>
                  <div className="w-[40%]">
                    <Image
                      src={"/course_people.png"}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No courses found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesNew;
