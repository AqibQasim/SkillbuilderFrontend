import Table from "@/components/Table";
import { formatCurrency } from "@/utils/formatCurrency";
import { useRouter } from "next/router";
import AdminCourseActions from "./AdminCourseActions";
import InstructorCourseStatus from "./InstructorCourseStatus";

function AdminLiveCourseStudentRow({ studentData }) {
  const router = useRouter();

  const { course, student, id, created_at } = studentData;
  const name = student?.first_name + " " + student?.last_name;

  const instrutor_name =
    course?.instructor?.user?.first_name +
    "" +
    course?.instructor?.user?.last_name;

  return (
    <Table.Row>
      <div className="title">{name}</div>
      <div>{student.email}</div>
      <div>{course.title}</div>
      <div>{instrutor_name}</div>
      <div>{created_at.split("T")[0]}</div>
      <div>{created_at.split("T")[1]}</div>
    </Table.Row>
  );
}

export default AdminLiveCourseStudentRow;
