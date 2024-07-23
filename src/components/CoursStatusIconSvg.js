import {
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillClockCircle,
} from "react-icons/ai";
function CoursStatusIconSvg({ className, status = "approved" }) {
  if (status === "approved") return <AiFillCheckCircle className={className} />;
  if (status === "pending") return <AiFillClockCircle className={className} />;
  if (status === "declined") return <AiFillCloseCircle className={className} />;
  return null;
}

export default CoursStatusIconSvg;
