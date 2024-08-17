import { useDispatch, useSelector } from "react-redux";
import { setReason } from "../../redux/slices/courseStatusSlice";
import DropdownSelector from "./DropdownSelector";

const options = [
  { value: "Video Quality", label: "Video Quality" },
  { value: "Inappropriate Language", label: "Inappropriate Language" },
  { value: "Discriminations", label: "Discriminations" },
  { value: "Course Curriculum", label: "Course Curriculum" },
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
