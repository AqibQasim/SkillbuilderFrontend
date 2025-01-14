import Image from "next/image";

// Temp
const max_words = 10;
const truncateText = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

const courses = [
  {
    id: 1,
    title: "Introduction to Programming",
    category: "Programming",
    amount: 100.0,
    discount: 20.0,
    learning_outcomes:
      "Learn the basics of programming and algorithms. loreanm afsf asf asf asf asf asf asf asfas ",
    image: "person_laptop.png",
    instructor: "Zubair Alam",
  },
];
function HomepageCarousel() {
  return (
    <div className="text-left">
      {courses.map((course) => (
        <NCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default HomepageCarousel;

function NCard({ course }) {
  return (
    <div
      className="img-container flex h-full w-full max-w-sm transform cursor-pointer flex-col items-start rounded-2xl border border-[#F0F0F0] bg-white p-2 transition-shadow duration-300 hover:border-[rgb(152,159,233)] hover:shadow-lg"
      onClick={() => course.id && router.push(`/courses/${course.id}`)}
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
          <div className="mt-2 flex w-full items-center justify-between"></div>
          <h3 className="text-md m-0 font-semibold text-[#2C2C2C]">
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
        </div>
        <div className="w-[40%]">
          <Image src={"/course_people.png"} width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
