import Table from "@/components/Table";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import AdminCourseActions from "./AdminCourseActions";
import InstructorCourseStatus from "./InstructorCourseStatus";
import InstructorLiveCourseStatus from "./InstructorLiveCourseStatus";

function AdminLiveCourseRow({ course }) {
  const router = useRouter();
  const { image, title, amount, discount, level, id } = course;
  const name =
    course?.instructor?.user?.first_name +
    " " +
    course?.instructor?.user?.last_name;

  const handleRowClick = () => {
    router.push(`/admin/live-courses/${id}`);
  };

  return (
    <Table.Row onClick={handleRowClick}>
      <div className="image-wrapper relative aspect-square h-10 w-10 overflow-hidden rounded-full group-hover:!cursor-default group-hover:!bg-red-500">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_API}/media/course/${image}`}
          alt={title}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div className="title">{title}</div>
      <div>{name}</div>
      <div>{formatCurrency(Number(amount))}</div>
      <div>{level}</div>
      {/* TODO: fetch real status */}
      <InstructorLiveCourseStatus status='approved' />
      <AdminCourseActions course={course} className="ml-auto" />
    </Table.Row>
  );
}

export default AdminLiveCourseRow;
