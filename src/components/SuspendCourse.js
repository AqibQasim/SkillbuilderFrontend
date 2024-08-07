import Button from "@/components/Button";
import H2 from "@/components/H2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetState as courseStatusResetState } from "../../redux/slices/courseStatusSlice";
import { declineCourse } from "../../redux/thunks/courseStatusThunk";
import SuspendCourseDeclineModuleAndLecture from "./SuspendCourseDeclineModuleAndLecture";
import SuspendCourseDeclineReason from "./SuspendCourseDeclineReason";
import { statusConstants } from "../../redux/slices/courseStatusSlice";
import { fetchOneCourse } from "../../redux/thunks/coursesThunks";

function SuspendCourse({ onClose, courseId: course_id }) {
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();
  const { statusData, loading, error, successMessage } = useSelector(
    (state) => state.courseStatus,
  );
  const course = useSelector((state) => state.singleCourse.data);
  const courseModules = useSelector((state) => state.singleCourse.data.modules);
  console.log(course);
  // Selector to transform modules into desired structure
  const moduleOptions = useSelector((state) => {
    const modules = state.singleCourse.data.modules;

    return modules?.map((module) => ({
      value: module.id,
      label: module.title,
    }));
  });
  console.log(`modules Options`, moduleOptions);
  const {
    reason,
    course_id: courseId,
    status_desc: statusDescription,
  } = statusData;

  // will recieve the course as prop later
  // wont need this
  useEffect(function () {
    dispatch(fetchOneCourse(course_id));
  }, []);

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

    // prepare to dispatch
    const dataToDispatch = {
      ...statusData,
      course_id: course_id,
      status: statusConstants.DECLINED,
    };
    try {
      await dispatch(declineCourse(dataToDispatch)).unwrap();
      setValidationError("");
      console.log("Course declined successfully");
    } catch (err) {
      console.error("Failed to decline course", err);
    }
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
      {reason && (
        <SuspendCourseDeclineModuleAndLecture modules={courseModules} />
      )}
      {validationError && <p className="text-red-500">{validationError}</p>}
      courseModules
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
