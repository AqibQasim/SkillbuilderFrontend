import Button from "@/components/Button";
import H2 from "@/components/H2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetState as courseStatusResetState,
  setCourseId as courseStatusSetCourseId,
} from "../../redux/slices/courseStatusSlice";
import { declineCourse } from "../../redux/thunks/courseStatusThunk";
import SuspendCourseDeclineModuleAndLecture from "./SuspendCourseDeclineModuleAndLecture";
import SuspendCourseDeclineReason from "./SuspendCourseDeclineReason";

function SuspendCourse({ onClose, courseId: course_id }) {
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();
  const { statusData, loading, error, successMessage } = useSelector(
    (state) => state.courseStatus,
  );
  const {
    reason,
    course_id: courseId,
    status_desc: statusDescription,
  } = statusData;

  useEffect(() => {
    if (courseId) return;
    dispatch(courseStatusSetCourseId(course_id));
  }, [course_id, courseId, dispatch]);

  const handleContinue = async (event) => {
    event.preventDefault();

    if (!reason) {
      setValidationError("Please select a reason for declining.");
      return;
    }

    if (statusDescription.length > 0) {
      const isValid = statusDescription.every(
        (item) =>
          item.module_id &&
          item.content_id &&
          item.description.trim().length >= 15,
      );

      if (!isValid) {
        setValidationError(
          "Please fill out module, lecture and description with at least 15 characters.",
        );
        return;
      }
    }

    console.log("status data to dispatch", statusData);

    // try {
    //   await dispatch(declineCourse(statusData)).unwrap();
    //   setValidationError("");
    //   console.log("Course declined successfully");
    //   // Handle successful submission if necessary
    // } catch (err) {
    //   console.error("Failed to decline course", err);
    //   // Handle error if necessary
    // }
  };

  const handleCancel = () => {
    dispatch(courseStatusResetState());
    onClose();
  };

  return (
    <form onSubmit={handleContinue} className="space-y-4">
      <H2>Declining course</H2>
      <p>
        You’re about to decline [UI UX Course]. Are you sure you want to do
        this?
      </p>

      {/* Decline Reason */}
      <SuspendCourseDeclineReason />

      {/* Decline Module and Lecture, Status description */}
      {reason && <SuspendCourseDeclineModuleAndLecture />}

      {validationError && <p className="text-red-500">{validationError}</p>}
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      <div className="buttons flex items-center justify-center gap-4">
        <Button
          type="button"
          className="w-full !rounded-xl py-3 !text-lg !font-medium !text-black-shade-1"
          variant="secondary"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="w-full !rounded-xl !border-blue-50 !bg-red-50 py-3 !text-lg !font-medium !text-red-500"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Decline"}
        </Button>
      </div>
    </form>
  );
}

export default SuspendCourse;
