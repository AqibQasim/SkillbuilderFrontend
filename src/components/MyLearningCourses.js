import LayoutWidth from "./LayoutWidth";

const enrolledDummyCourses = [
  {
    id: Date.now(),
    image:
      "https://www.tatvasoft.com/outsourcing/wp-content/uploads/2023/06/Types-of-Web-Development-for-your-Project-768x389.jpg",
    title: "Introduction to Web Development",
    instructor: "Jane Smith",
    progress: 25,
  },
  {
    id: Date.now() + 1,
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YclJ1hp8CgncNJiFmZCCmg.jpeg",
    title: "Advanced JavaScript Techniques",
    instructor: "John Doe",
    progress: 50,
  },
  {
    id: Date.now() + 2,
    image:
      "https://media.licdn.com/dms/image/D4D12AQHLOphoHIjmoA/article-cover_image-shrink_720_1280/0/1680313616595?e=2147483647&v=beta&t=MDjk4m7S2o2GJeVZGRSsA8WkmumgdYuQiTZfQ2bRkBk",
    title: "React for Beginners",
    instructor: "Mary Johnson",
    progress: 75,
  },
  {
    id: Date.now() + 3,
    image: "/abouthero.png",
    title: "Mastering Node.js",
    instructor: "James Williams",
    progress: 90,
  },
  {
    id: Date.now() + 4,
    image: "/contact-us.png",
    title: "CSS Grid and Flexbox",
    instructor: "Patricia Brown",
    progress: 10,
  },
  {
    id: Date.now() + 5,
    image: "/my-learning.png",
    title: "Full-Stack Development",
    instructor: "Michael Davis",
    progress: 35,
  },
  {
    id: Date.now() + 6,
    image: "/courseImg.png",
    title: "Intro to Python Programming",
    instructor: "Linda Miller",
    progress: 60,
  },
  {
    id: Date.now() + 7,
    image: "/goal4.png",
    title: "Database Design and SQL",
    instructor: "Robert Wilson",
    progress: 80,
  },
];

console.log(enrolledDummyCourses);

enrolledDummyCourses.map((course) => console.log(course.progress));

function MyLearningCourses() {
  return (
    <LayoutWidth>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] justify-items-center gap-4">
        {enrolledDummyCourses.map((course) => (
          <MyLearningCourseCard course={course} />
        ))}
      </div>
    </LayoutWidth>
  );
}

export default MyLearningCourses;

function MyLearningCourseCard({ course }) {
  const { id, image, title, instructor, progress } = course;

  return (
    <div className="course-card img-container border- mb-4 flex h-auto w-full max-w-sm transform cursor-pointer flex-col items-start rounded-2xl border border-gray-shade-2 bg-white px-3 py-4 transition duration-300 hover:border-[rgb(152,159,233)] hover:shadow-lg">
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
        <p className="float-right ml-auto text-xl">{progress}%</p>
        <progress
          className="h-1 w-full rounded-full bg-gray-shade-1 text-blue"
          id="enrolled-course-progress"
          value={progress}
          max="100"
        >
          {" "}
          {progress}{" "}
        </progress>
      </div>
    </div>
  );
}
