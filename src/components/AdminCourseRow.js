import Table from "@/components/Table";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import AdminCourseActions from "./AdminCourseActions";
import InstructorCourseStatus from "./InstructorCourseStatus";

function AdminCourseRow({ course }) {
  const router = useRouter();
  const { image, title, amount, discount, status, id } = course;
  const name = course?.instructor?.user?.first_name;

  const handleRowClick = () => {
    router.push(`/courses/${id}`);
  };

  return (
    <Table.Row onClick={handleRowClick}>
      <div className="image-wrapper relative aspect-square h-10 w-10 overflow-hidden rounded-full group-hover:!cursor-default group-hover:!bg-red-500">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div className="title">{title}</div>
      <div>
        {name}
      </div>
      <div>{formatCurrency(Number(amount))}</div>
      <div>{formatCurrency(Number(discount))}</div>
      <InstructorCourseStatus status={status} />
      <AdminCourseActions course={course} className="ml-auto" />
    </Table.Row>
  );
}

export default AdminCourseRow;
