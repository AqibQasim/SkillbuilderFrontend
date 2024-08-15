import { useRouter } from "next/router";
import Table from "./Table";
import ButtonCircle from "./ButtonCircle";
import ChevronRightIconSvg from "./ChevronRightIconSvg";
import formatDate from "@/utils/formatDate";

function InstructorsStudentsRow({ isSpecific, student }) {
  const router = useRouter();

  const {
    id,
    image,
    name,
    email,
    purchaseDate,
    courseProgress,
    enrolledCourses,
    joiningDate,
  } = student;

  const handleRowClick = () => {
    router.push(`/dashboard/students/${id}`);
  };
  console.log("course length", enrolledCourses?.length);

  return (
    <Table.Row onClick={handleRowClick}>
      <div className="image-wrapper relative aspect-square h-10 w-10 overflow-hidden rounded-full">
        <img
          src={image}
          alt={`${name}'s profile photo`}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div className="name">{name}</div>
      <div className="email">{email}</div>
      <div className="purchase-date">
        {isSpecific
          ? purchaseDate
          : `${enrolledCourses?.at(0)}+${enrolledCourses?.length > 1 ? enrolledCourses?.length - 1 : ""}`}
      </div>
      <div className="course-progress">
        {isSpecific ? `${courseProgress}%` : joiningDate}
      </div>
      <ButtonCircle role="link">
        <ChevronRightIconSvg
          className="relative -right-[1.5px] h-4 w-4 transition-transform duration-300 group-hover:-rotate-45"
          currentColor
        />
      </ButtonCircle>
    </Table.Row>
  );
}

export default InstructorsStudentsRow;
