import { useDispatch, useSelector } from "react-redux";
import { setReason } from "../../redux/slices/courseStatusSlice";
import DropdownSelector from "./DropdownSelector";

const options = [
  { value: "video-quality", label: "Video Quality" },
  { value: "inappropriate-language", label: "Inappropriate Language" },
  { value: "discriminations", label: "Discriminations" },
  { value: "course-curriculum", label: "Course Curriculum" },
];

function DeclineCourseReason() {
  const dispatch = useDispatch();
  const declineReason = useSelector(
    (state) => state.courseStatus.statusData.reason,
  );

  const handleDeclineReason = (value) => {
    dispatch(setReason(value));
  };

  return (
    <DropdownSelector
      className="w-full"
      label="Select your reason"
      options={options}
      onChange={handleDeclineReason}
      value={declineReason}
    />
  );
}

export default DeclineCourseReason;
