import Table from "@/components/Table";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import ButtonCircle from "./ButtonCircle";
import ChevronRightIconSvg from "./ChevronRightIconSvg";
import InstructorCourseStatus from "./InstructorCourseStatus";

function AdminCourseRow({ course }) {
  const router = useRouter();
  const { image, title, amount, discount, status, id } = course;
  //   const { first_name, last_name } = useSelector((state) => state.profile);

  console.log("course in pending courses", course);

  const handleRowClick = () => {
    // router.push(`/courses/${id}`);
    // router.push(`/dashboard/courses/${id}`);
    router.push(`instructor-courses/${id}`);
  };

  return (
    <Table.Row onClick={handleRowClick}>
      <div className="image-wrapper relative aspect-square h-10 w-10 overflow-hidden rounded-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div className="title">{title}</div>
      <div>
        {/* {first_name} {last_name}  */}
        [instructor Name]
      </div>
      <div>{formatCurrency(Number(amount))}</div>
      <div>{formatCurrency(Number(discount))}</div>
      <InstructorCourseStatus status={status} />
      <ButtonCircle role="link">
        <ChevronRightIconSvg
          className="relative -right-[1.5px] h-4 w-4 transition-transform duration-300 group-hover:-rotate-45"
          currentColor
        />
      </ButtonCircle>
    </Table.Row>
  );
}

export default AdminCourseRow;