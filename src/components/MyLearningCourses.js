import { useRouter } from "next/router";
import LayoutWidth from "./LayoutWidth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchpurchasecourses } from "../../redux/thunks/purchasecoursesThunk";
import { fetchOneInstructor } from "../../redux/thunks/instructorThunk";

export const enrolledDummyCourses = [
  {
    // id: 0,
    // image:
    //   "https://www.tatvasoft.com/outsourcing/wp-content/uploads/2023/06/Types-of-Web-Development-for-your-Project-768x389.jpg",
    // title: "Introduction to Web Development",
    // instructor: "Jane Smith",
    // progress: 25,
    // purchaseDate: new Date(2023, 0, 15), // January 15, 2023
    // description:
    //   "Learn the basics of web development, including HTML, CSS, and JavaScript. This course will guide you through the foundational concepts, best practices, and practical skills needed to start building modern websites.",
    // skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    // id: 1,
    // image:
    //   "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YclJ1hp8CgncNJiFmZCCmg.jpeg",
    // title: "Advanced JavaScript Techniques",
    // instructor: "John Doe",
    // progress: 50,
    // purchaseDate: new Date(2023, 1, 20), // February 20, 2023
    // description:
    //   "Deep dive into advanced JavaScript concepts and techniques. This course covers asynchronous programming, closures, prototypes, and other advanced topics to help you write more efficient and maintainable code.",
    // skills: ["ES6+", "Asynchronous Programming", "Closures", "Prototypes"],
  },
  {
    // id: 2,
    // image:
    //   "https://media.licdn.com/dms/image/D4D12AQHLOphoHIjmoA/article-cover_image-shrink_720_1280/0/1680313616595?e=2147483647&v=beta&t=MDjk4m7S2o2GJeVZGRSsA8WkmumgdYuQiTZfQ2bRkBk",
    // title: "React for Beginners",
    // instructor: "Mary Johnson",
    // progress: 75,
    // purchaseDate: new Date(2023, 2, 10), // March 10, 2023
    // description:
    //   "Learn the fundamentals of React and how to build interactive UIs. This course will introduce you to components, state management, lifecycle methods, and hooks, enabling you to create dynamic web applications.",
    // skills: [
    //   "React Basics",
    //   "Component Lifecycle",
    //   "State Management",
    //   "Hooks",
    // ],
  },
  {
    // id: 3,
    // image: "/abouthero.png",
    // title: "Mastering Node.js",
    // instructor: "James Williams",
    // progress: 90,
    // purchaseDate: new Date(2023, 3, 5), // April 5, 2023
    // description:
    //   "Become proficient in Node.js and build scalable server-side applications. This comprehensive course covers everything from setting up your environment to creating RESTful APIs, working with databases, and deploying your applications.",
    // skills: ["Node.js", "Express.js", "REST APIs", "Middleware"],
  },
  {
    // id: 4,
    // image: "/contact-us.png",
    // title: "CSS Grid and Flexbox",
    // instructor: "Patricia Brown",
    // progress: 10,
    // purchaseDate: new Date(2023, 4, 15), // May 15, 2023
    // description:
    //   "Master CSS Grid and Flexbox to create complex and responsive layouts.",
    // skills: ["CSS Grid", "Flexbox", "Responsive Design", "Layout Techniques"],
  },
  {
    // id: 5,
    // image: "/my-learning.png",
    // title: "Full-Stack Development",
    // instructor: "Michael Davis",
    // progress: 35,
    // purchaseDate: new Date(2023, 5, 25), // June 25, 2023
    // description:
    //   "Learn to build full-stack applications with modern web technologies.",
    // skills: [
    //   "Frontend Development",
    //   "Backend Development",
    //   "Databases",
    //   "APIs",
    // ],
  },
  {
    // id: 6,
    // image: "/courseImg.png",
    // title: "Intro to Python Programming",
    // instructor: "Linda Miller",
    // progress: 60,
    // purchaseDate: new Date(2023, 6, 5), // July 5, 2023
    // description: "Get started with Python programming and learn the basics.",
    // skills: ["Python Basics", "Data Types", "Control Structures", "Functions"],
  },
  {
    // id: 7,
    // image: "/goal4.png",
    // title: "Database Design and SQL",
    // instructor: "Robert Wilson",
    // progress: 80,
    // purchaseDate: new Date(2023, 7, 15), // August 15, 2023
    // description: "Learn to design databases and write efficient SQL queries.",
    // skills: ["Database Design", "SQL Basics", "Joins", "Normalization"],
  },
];

function MyLearningCourses() {
  const [purchasedcourses, setpurchasedcourses] = useState([]);
  const fetchdata = async () => {
    await dispatch(fetchpurchasecourses(loggedInid));
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.purchasecourse);
  const loggedInid = useSelector((state) => state.auth.user);

  useEffect(() => {
    fetchdata();
  }, [loggedInid]);
  useEffect(() => {
    if (data.length > 0) {
      setpurchasedcourses(data);

      data.forEach((item, index) => {
        const { id, course } = item;
        const { title, description, created_at, instructor_id } = course;
        console.log(
          `Course ${index + 1}: ${title} - ${description}, Created At: ${created_at}, Instructor ID: ${instructor_id}`,
        );
      });
    }
  }, [data]);

  console.log("Purchased Courses outside useEffect:", purchasedcourses);

  return (
    <LayoutWidth>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] justify-items-center gap-4">
        {purchasedcourses.map((item) => {
          const instructorName = `${item.course.instructor.user.first_name} ${item.course.instructor.user.last_name}`;

          return (
            <MyLearningCourseCard
              key={item.course.id}
              id={item.course.id}
              title={item.course.title}
              image={item.course.image}
              instructor={instructorName}
            />
          );
        })}
      </div>
    </LayoutWidth>
  );
}

export default MyLearningCourses;

function MyLearningCourseCard({ id, title, image, instructor }) {
  const router = useRouter();

  function handleClick() {
    router.push(`/my-learning/${id}`);
  }

  return (
    <div
      onClick={handleClick}
      className="course-card img-container border- mb-4 flex h-auto w-full max-w-sm transform cursor-pointer flex-col items-start rounded-2xl border border-gray-shade-2 bg-white px-3 py-4 transition duration-300 hover:border-[rgb(152,159,233)] hover:shadow-lg"
    >
      <div className="image-wrapper relative max-h-36 w-full">
        <img
          className="!m-0 block size-full rounded-2xl object-cover"
          src={image}
          alt={`Image for ${title} course`}
        />
      </div>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p>Instructor: {instructor}</p>
      <div className="progress mt-auto w-full">
        <p className="float-right ml-auto text-xl">80%</p>
        <progress
          className="h-1 w-full rounded-full bg-gray-shade-1 text-blue"
          id="enrolled-course-progress"
          value="80"
          max="100"
        >
          {" "}
          80
        </progress>
      </div>
    </div>
  );
}
