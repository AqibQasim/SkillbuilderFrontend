import Button from "@/components/Button";
import DashboardLayout from "../../components/DashboardLayout";
import Filter from "@/components/Filter";

const filterOptions = [
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "Declined", value: "declined" },
];

const dummyCourses = [
  {
    image: "courseImg.png",
    title: "UI/UX Designning",
    instructor: "John Doe",
    price: 4500,
    skill: "Figma +5",
    status: "Pending",
  },
  {
    image: "courseImg.png",
    title: "Web Development",
    instructor: "Jane Smith",
    price: 5000,
    skill: "HTML +5",
    status: "Approved",
  },
  {
    image: "courseImg.png",
    title: "Digital Marketing",
    instructor: "Michael Brown",
    price: 4000,
    skill: "SEO +5",
    status: "Declined",
  },
  {
    image: "courseImg.png",
    title: "Data Science",
    instructor: "Emily Johnson",
    price: 6000,
    skill: "Python +5",
    status: "Pending",
  },
  {
    image: "courseImg.png",
    title: "Machine Learning",
    instructor: "David Lee",
    price: 7000,
    skill: "TensorFlow +5",
    status: "Approved",
  },
  {
    image: "courseImg.png",
    title: "Cybersecurity",
    instructor: "Sarah Connor",
    price: 5500,
    skill: "Network Security +5",
    status: "Pending",
  },
];

function Courses() {
  return (
    <DashboardLayout>
      {!dummyCourses.length ? (
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
      ) : (
        <>
          <div className="component-header flex items-center justify-between">
            <h1 className="text-4xl font-semibold">All Courses</h1>
            <Filter filterField="status" options={filterOptions} />
          </div>
        </>
      )}
    </DashboardLayout>
  );
}

export default Courses;
