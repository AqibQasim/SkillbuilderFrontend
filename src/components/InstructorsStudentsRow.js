import { useRouter } from "next/router";
import Table from "./Table";
import ButtonCircle from "./ButtonCircle";
import ChevronRightIconSvg from "./ChevronRightIconSvg";
import formatDate from "@/utils/formatDate";
import Avatar from "./Avatar";

function InstructorsStudentsRow({ student }) {
  const router = useRouter();
  console.log("student in row", student);

  const {
    id,
    image,
    first_name,
    last_name,
    email,
    purchaseDate,
    courseProgress,
    enrolledCourses,
    created_at,
    joiningDate,
  } = student;
  const fullName = first_name
    ? first_name
    : "first name" + last_name
      ? last_name
      : "last name";

  // const handleRowClick = () => {
  //   router.push(`/dashboard/students/${id}`);
  // };
  const handleRowClick = () => {
    try {
      if (id) {
        router.push(`/dashboard/students/${id}`);
      } else {
        throw new Error("Student ID is not defined");
      }
    } catch (error) {
      console.error("Error navigating to student page:", error);
      // Optional: Display an alert or a message to the user
      alert("Unable to navigate to the student page. Please try again later.");
    }
  };

  console.log("course length", enrolledCourses?.length);

  return (
    <Table.Row onClick={handleRowClick}>
      <Avatar firstName={first_name} lastName={last_name} />
      <div className="name"> {fullName} </div>
      <div className="email">{email}</div>
      <div className="joining-date">{formatDate(created_at)}</div>
      <ButtonCircle role="link" clasName="ml-auto">
        <ChevronRightIconSvg
          className="relative -right-[1.5px] h-4 w-4 transition-transform duration-300 group-hover:-rotate-45"
          currentColor
        />
      </ButtonCircle>
    </Table.Row>
  );
}

export default InstructorsStudentsRow;
