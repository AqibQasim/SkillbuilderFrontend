import formatDate from "@/utils/formatDate";
import { useRouter } from "next/router";
import Avatar from "./Avatar";
import ButtonCircle from "./ButtonCircle";
import ChevronRightIconSvg from "./ChevronRightIconSvg";
import Table from "./Table";

function AdminInstructorsRow({ isSpecific, instructor }) {
  const router = useRouter();
  console.log("---------------------------", instructor);

  const { user_id, first_name, last_name, email, created_at, courseProgress } =
    instructor.user;

  const handleRowClick = () => {
    try {
      if (instructor?.id) {
        router.push(`/admin/instructors/${instructor.id}`);
      } else {
        throw new Error("Instructor ID is not defined");
      }
    } catch (error) {
      console.error("Error navigating to instructor page:", error);
      // Optional: You can display an alert or a message to the user
      alert(
        "Unable to navigate to the instructor page. Please try again later.",
      );
    }
  };

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
      <ButtonCircle clasName="justify-self-end" role="link">
        <ChevronRightIconSvg
          className="relative -right-[1.5px] h-4 w-4 transition-transform duration-300 group-hover:-rotate-45"
          currentColor
        />
      </ButtonCircle>
    </Table.Row>
  );
}

export default AdminInstructorsRow;