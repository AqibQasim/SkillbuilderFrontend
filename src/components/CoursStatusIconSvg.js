import {
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillClockCircle,
} from "react-icons/ai";
import { HiMiniNoSymbol } from "react-icons/hi2";
function CoursStatusIconSvg({ className, status = "approved" }) {
  if (status === "approved") return <AiFillCheckCircle className={className} />;
  if (status === "pending") return <AiFillClockCircle className={className} />;
  if (status === "declined") return <AiFillCloseCircle className={className} />;
  if (status === "suspended") return <HiMiniNoSymbol className={className} />;
  return null;
}

export default CoursStatusIconSvg;
