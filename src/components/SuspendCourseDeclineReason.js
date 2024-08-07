import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReason } from "../../redux/slices/courseStatusSlice";
import DropdownSelector from "./DropdownSelector";

function SuspendCourseDeclineReason() {
  const dispatch = useDispatch();
  const instructorDeclineReason = useSelector(
    (state) => state.courseStatus.statusData.reason,
  );
  const [declineReason, setDeclineReason] = useState(instructorDeclineReason);

  const options = [
    { value: "video-quality", label: "Video Quality" },
    { value: "inappropriate-language", label: "Inappropriate Language" },
    { value: "discriminations", label: "Discriminations" },
    { value: "course-curriculum", label: "Course Curriculum" },
  ];

  function handleDeclineReason(value) {
    setDeclineReason(value);
    dispatch(setReason(value));
  }

  return (
    <DropdownSelector
      className="w-full"
      label="Select your reason"
      options={options}
      onChange={handleDeclineReason}
    />
  );
}

export default SuspendCourseDeclineReason;
