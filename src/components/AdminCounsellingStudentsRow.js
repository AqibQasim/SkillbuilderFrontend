import Table from "@/components/Table";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import AdminCourseActions from "./AdminCourseActions";
import InstructorCourseStatus from "./InstructorCourseStatus";

function AdminCounsellingStudentsRow({ student }) {
  const router = useRouter();
//   const { image, title, amount, discount, level, id } = course;
  const name =
    student?.student?.first_name +
    " " +
    student?.student?.last_name;

  const bookinDate = student?.booking_date || "Pending" ;

  const handleRowClick = () => {
    router.push(`/admin/career-counselling/${student?.student?.id}`);
  };

  return (
    <Table.Row onClick={handleRowClick}>
      <div className="image-wrapper relative aspect-square h-10 w-10 overflow-hidden rounded-full group-hover:!cursor-default group-hover:!bg-red-500">
        {/* <img
          src={`${process.env.NEXT_PUBLIC_BASE_API}/media/course/${image}`}
          alt={title}
          className="h-full w-full rounded-full object-cover"
        /> */}
      </div>
      {/* <div className="title">{title}</div> */}
      <div>{name}</div>
      <div>{student?.student?.email}</div>
      <div>{bookinDate}</div>
      <div>{student?.booking_time?.split(".")[0] || "Pending"}</div>
    </Table.Row>
  );
}

export default AdminCounsellingStudentsRow;
