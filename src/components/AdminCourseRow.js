import Table from "@/components/Table";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import AdminCourseActions from "./AdminCourseActions";
import InstructorCourseStatus from "./InstructorCourseStatus";

function AdminCourseRow({ course }) {
  const router = useRouter();
  const { image, title, amount, discount, status, id } = course;
  const name = course?.instructor?.user?.first_name;
  //   const { first_name, last_name } = useSelector((state) => state.profile);

  console.log("course in pending courses", course);

  const handleRowClick = () => {
    router.push(`instructor-courses/${id}`);
  };

  return (
    // <Table.Row onClick={handleRowClick}>
    <Table.Row>
      <div className="image-wrapper relative aspect-square h-10 w-10 overflow-hidden rounded-full group-hover:!cursor-default group-hover:!bg-red-500">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div className="title">{title}</div>
      <div>
        {/* {first_name} {last_name}  */}
        {name}
      </div>
      <div>{formatCurrency(Number(amount))}</div>
      <div>{formatCurrency(Number(discount))}</div>
      <InstructorCourseStatus status={status} />

      {/* menus for admin actions */}
      <AdminCourseActions course={course} className="ml-auto" />
    </Table.Row>
  );
}

export default AdminCourseRow;
