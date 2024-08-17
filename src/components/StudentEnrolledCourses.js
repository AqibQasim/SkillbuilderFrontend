import { useRouter } from "next/router";
import H2 from "./H2";
import StarRating from "./StarRating";
import { formatCurrency } from "@/utils/formatCurrency";

// Single student enrolled courses api
const enrolledCourses = [
  {
    id: 1,
    title: "UI / UX Designing",
    rating: 4.9,
    learning_outcomes: "Equipping you with essential skills",
    amount: 250,
    image: "/courseImg.png",
  },
  {
    id: 2,
    title: "Web Development",
    rating: 4.9,
    learning_outcomes: "Equipping you with essential skills",
    amount: 250,
    image: "/courseImg.png",
  },
];

function StudentEnrolledCourses({ href }) {
  return (
    <div>
      <H2 className="mb-3">Enrolled courses</H2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-start gap-4">
        {enrolledCourses.map((course) => (
          <StudentEnrolledCoursesCard
            course={course}
            href={href ? href : ""}
            key={course.id}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentEnrolledCourses;

function StudentEnrolledCoursesCard({ course, href = "" }) {
  const { id, title, rating, learning_outcomes, amount, image } = course;

  const router = useRouter();

  function handleClick() {
    if (href) return router.push(`${href}/${id}`);
    console.log(`use href prop: href="/url-to-push"`);
  }

  return (
    <div
      onClick={handleClick}
      className={`${href ? "cursor-pointer" : ""} course-card img-container flex h-auto w-full max-w-sm transform flex-col items-start space-y-2 rounded-bl-2xl rounded-tr-2xl border border-gray-shade-2 bg-white px-3 py-4 transition duration-300 hover:border-[rgb(152,159,233)] hover:shadow-lg`}
    >
      <div className="image-wrapper relative max-h-36 w-full">
        <img
          className="!m-0 block size-full rounded-tr-2xl object-cover"
          src={image}
          alt={`Image for ${title} course`}
        />
      </div>
      <div className="rating inline-flex items-center justify-center gap-2">
        <span>{rating}</span> <StarRating rating={rating} />
      </div>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p>{learning_outcomes}</p>
      <p className="ml-auto text-blue"> {formatCurrency(amount)} </p>
    </div>
  );
}
