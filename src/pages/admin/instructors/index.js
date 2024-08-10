import withAuth from "@/components/WithAuth";
import DashboardLayout from "@/components/DashboardLayout";
import InstructorsStudentsTable from "@/components/InstructorsStudentsTable";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import { instructor } from "@/data/getInstructorById";

const imageUrl1 =
  "https://img.freepik.com/premium-photo/cute-middle-school-teacher-3d-isolated-flat-color-background_1022901-80438.jpg?w=740";
const imageUrl2 =
  "https://img.freepik.com/premium-photo/3d-cartoon-style-illustration-young-vietnamese-female-character-finance-educational-game_1283595-3459.jpg?w=740";

export const dummyStudents = [
  {
    id: 1,
    name: "Adriana Charlotte",
    image: imageUrl2,
    email: "adriana.charlotte@example.com",
    purchaseDate: "2023-06-15",
    courseProgress: 85,
  },
  {
    id: 2,
    name: "Bella Catherine",
    image: imageUrl1,
    email: "bella.catherine@example.com",
    purchaseDate: "2023-07-20",
    courseProgress: 70,
  },
  {
    id: 3,
    name: "Adriana Charlotte",
    image: imageUrl2,
    email: "adriana.charlotte2@example.com",
    purchaseDate: "2023-05-10",
    courseProgress: 90,
  },
  {
    id: 4,
    name: "Bella Catherine",
    image: imageUrl1,
    email: "bella.catherine2@example.com",
    purchaseDate: "2023-04-22",
    courseProgress: 60,
  },
  {
    id: 5,
    name: "Adriana Charlotte",
    image: imageUrl2,
    email: "adriana.charlotte3@example.com",
    purchaseDate: "2023-03-18",
    courseProgress: 95,
  },
  {
    id: 6,
    name: "Bella Catherine",
    image: imageUrl1,
    email: "bella.catherine3@example.com",
    purchaseDate: "2023-02-25",
    courseProgress: 50,
  },
  {
    id: 7,
    name: "Adriana Charlotte",
    image: imageUrl2,
    email: "adriana.charlotte4@example.com",
    purchaseDate: "2023-01-30",
    courseProgress: 80,
  },
  {
    id: 8,
    name: "Bella Catherine",
    image: imageUrl1,
    email: "bella.catherine4@example.com",
    purchaseDate: "2022-12-19",
    courseProgress: 85,
  },
  {
    id: 9,
    name: "Adriana Charlotte",
    image: imageUrl2,
    email: "adriana.charlotte5@example.com",
    purchaseDate: "2022-11-11",
    courseProgress: 75,
  },
  {
    id: 10,
    name: "Bella Catherine",
    image: imageUrl1,
    email: "bella.catherine5@example.com",
    purchaseDate: "2022-10-05",
    courseProgress: 65,
  },
  {
    id: 11,
    name: "Adriana Charlotte",
    image: imageUrl2,
    email: "adriana.charlotte6@example.com",
    purchaseDate: "2022-09-23",
    courseProgress: 88,
  },
  {
    id: 12,
    name: "Bella Catherine",
    image: imageUrl1,
    email: "bella.catherine6@example.com",
    purchaseDate: "2022-08-30",
    courseProgress: 72,
  },
];

const enrolledCourses = ["UI/UX Designing", "Java Programming", "Data Science"];

export const courseStudentsdummyData = dummyStudents.map((student) => ({
  id: student.id,
  image: student.image,
  name: student.name,
  enrolledCourses: [...enrolledCourses],
  email: student.email,
  joiningDate: student.purchaseDate,
}));

export const specificCourseStudentsDummydata = dummyStudents.map((student) => ({
  id: student.id,
  image: student.image,
  name: student.name,
  email: student.email,
  purchaseDate: student.purchaseDate,
  courseProgress: student.courseProgress,
}));

function Students() {
  return (
    <AdminDashboardLayout>
      <InstructorsStudentsTable students={[]} />
    </AdminDashboardLayout>
  );
}

export default withAuth(Students);
