import formatDate from "@/utils/formatDate";
import { useRouter } from "next/router";
import Avatar from "./Avatar";
import ButtonCircle from "./ButtonCircle";
import ChevronRightIconSvg from "./ChevronRightIconSvg";
import Table from "./Table";

function AdminStudentsRow({ isSpecific, student }) {
  const router = useRouter();

  const {
    id,
    image,
    first_name,
    last_name,
    email,
    created_at,
    purchaseDate,
    courseProgress,
    enrolledCourses,
    joiningDate,
  } = student;

  const handleRowClick = () => {
    try {
      if (id) {
        router.push(`/admin/students/${id}`);
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
      <div className="image-wrapper relative aspect-square h-10 w-10 overflow-hidden rounded-full">
        {/* <img
          src={image}
          alt={`${first_name}'s profile photo`}
          className="h-full w-full rounded-full object-cover"
        /> */}
        <Avatar
          firstName={first_name}
          lastName={last_name}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div className="name">{`${first_name} ${last_name}`}</div>
      <div className="email">{email}</div>
      <div className="course-progress">
        {isSpecific ? `${courseProgress}%` : formatDate(created_at)}
      </div>
      <ButtonCircle role="link" clasName="ml-auto">
        <ChevronRightIconSvg
          className="relative -right-[1.5px] h-4 w-4 transition-transform duration-300 group-hover:-rotate-45"
          currentColor
        />
      </ButtonCircle>
    </Table.Row>
  );
}

export default AdminStudentsRow;
