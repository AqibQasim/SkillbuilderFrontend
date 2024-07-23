import { useRouter } from "next/router";
import Button from "./Button";
import Filter from "./Filter";
import Table from "./Table";
import DashboardCourseRow from "./DashboardCourseRow";
const filterOptions = [
  { label: "All", value: "all" },
  { label: "Approved", value: "approved" },
  { label: "Pending", value: "pending" },
  { label: "Declined", value: "declined" },
];

export const dummyCourses = [
  {
    image: "/courseImg.png",
    title: "UI/UX Designning",
    instructor: "John Doe",
    price: 4500,
    skills: "Figma +5",
    status: "pending",
    id: 1,
  },
  {
    image: "/courseImg.png",
    title: "Web Development",
    instructor: "Jane Smith",
    price: 5000,
    skills: "HTML +5",
    status: "pending",
    id: 2,
  },
  {
    image: "/courseImg.png",
    title: "Digital Marketing",
    instructor: "Michael Brown",
    price: 4000,
    skills: "SEO +5",
    status: "pending",
    id: 3,
  },
  {
    image: "/courseImg.png",
    title: "Data Science",
    instructor: "Emily Johnson",
    price: 6000,
    skills: "Python +5",
    status: "approved",
    id: 4,
  },
  {
    image: "/courseImg.png",
    title: "Machine Learning",
    instructor: "David Lee",
    price: 7000,
    skills: "TensorFlow +5",
    status: "approved",
    id: 5,
  },
  {
    image: "/courseImg.png",
    title: "Cybersecurity",
    instructor: "Sarah Connor",
    price: 5500,
    skills: "Network Security +5",
    status: "approved",
    id: 6,
  },
  {
    image: "/courseImg.png",
    title: "Machine Learning",
    instructor: "David Lee",
    price: 7000,
    skills: "TensorFlow +5",
    status: "declined",
    id: 7,
  },
  {
    image: "/courseImg.png",
    title: "Cybersecurity",
    instructor: "Sarah Connor",
    price: 5500,
    skills: "Network Security +5",
    status: "declined",
    id: 8,
  },
  {
    image: "/courseImg.png",
    title: "Machine Learning",
    instructor: "David Lee",
    price: 7000,
    skills: "TensorFlow +5",
    status: "declined",
    id: 9,
  },
  {
    image: "/courseImg.png",
    title: "UI/UX Designning",
    instructor: "John Doe",
    price: 4500,
    skills: "Figma +5",
    status: "pending",
    id: 10,
  },
  {
    image: "/courseImg.png",
    title: "Web Development",
    instructor: "Jane Smith",
    price: 5000,
    skills: "HTML +5",
    status: "pending",
    id: 11,
  },
  {
    image: "/courseImg.png",
    title: "Digital Marketing",
    instructor: "Michael Brown",
    price: 4000,
    skills: "SEO +5",
    status: "pending",
    id: 12,
  },
  {
    image: "/courseImg.png",
    title: "Data Science",
    instructor: "Emily Johnson",
    price: 6000,
    skills: "Python +5",
    status: "approved",
    id: 13,
  },
  {
    image: "/courseImg.png",
    title: "Machine Learning",
    instructor: "David Lee",
    price: 7000,
    skills: "TensorFlow +5",
    status: "approved",
    id: 14,
  },
  {
    image: "/courseImg.png",
    title: "Cybersecurity",
    instructor: "Sarah Connor",
    price: 5500,
    skills: "Network Security +5",
    status: "approved",
    id: 15,
  },
  {
    image: "/courseImg.png",
    title: "Machine Learning",
    instructor: "David Lee",
    price: 7000,
    skills: "TensorFlow +5",
    status: "declined",
    id: 16,
  },
  {
    image: "/courseImg.png",
    title: "Cybersecurity",
    instructor: "Sarah Connor",
    price: 5500,
    skills: "Network Security +5",
    status: "declined",
    id: 17,
  },
  {
    image: "/courseImg.png",
    title: "Machine Learning",
    instructor: "David Lee",
    price: 7000,
    skills: "TensorFlow +5",
    status: "declined",
    id: 18,
  },
];

function DashboardCourseTable() {
  const router = useRouter();
  const status = router.query.status || "all";
  let isLoading = false;

  if (isLoading) return <p>Loading...</p>;
  if (!dummyCourses.length)
    return (
      <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-medium">No Courses posted yet... </h2>
        <p>
          you haven’t posted any course yet, please click the button to get
          started
        </p>
        <Button href="courseUpload" className="!px-14">
          Upload course +
        </Button>
      </div>
    );

  let filteredDummyCourses;
  if (status === "all") filteredDummyCourses = dummyCourses;
  if (status === "approved")
    filteredDummyCourses = dummyCourses.filter(
      (course) => course.status === "approved",
    );
  if (status === "pending")
    filteredDummyCourses = dummyCourses.filter(
      (course) => course.status === "pending",
    );
  if (status === "declined")
    filteredDummyCourses = dummyCourses.filter(
      (course) => course.status === "declined",
    );

  return (
    <>
      <div className="component-header flex items-center justify-between">
        <h1 className="text-4xl font-semibold">All Courses</h1>
        <Filter filterField="status" options={filterOptions} />
      </div>

      <Table
        // columns="2.rem_1.1fr_1.25fr_1fr_1fr_1fr_0.25fr"
        columns="grid-cols-[2.5rem_1.1fr_1.25fr_1fr_1fr_1fr_0.25fr]"
      >
        <Table.Header>
          <div></div>
          <div>Course</div>
          <div>Instructor</div>
          <div>Price</div>
          {/* <div>Discount</div> */}
          <div>Skills</div>
          <div>Status</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredDummyCourses}
          render={(course, i) => <DashboardCourseRow course={course} key={i} />}
        />
      </Table>
    </>
  );
}

export default DashboardCourseTable;
