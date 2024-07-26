import { useRouter } from "next/router";
import Table from "./Table";
import ButtonCircle from "./ButtonCircle";
import ChevronRightIconSvg from "./ChevronRightIconSvg";

function InstructorsStudentsRow({ student }) {
  const router = useRouter();
  const { id, image, name, email, purchaseDate, courseProgress } = student;

  console.log(student);

  const handleRowClick = () => {
    router.push(`/dashboard/students/${id}`);
  };
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
      <div className="purchase-date text-center">{purchaseDate}</div>
      <div className="course-progress text-center">{courseProgress}%</div>
      <ButtonCircle>
        <ChevronRightIconSvg
          className="relative -right-[1.5px] h-4 w-4 transition-transform duration-300 group-hover:-rotate-45"
          currentColor
        />
      </ButtonCircle>
    </Table.Row>
  );
}

export default InstructorsStudentsRow;
