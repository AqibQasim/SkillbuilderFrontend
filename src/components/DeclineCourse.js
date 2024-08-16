import Button from "@/components/Button";
import H2 from "@/components/H2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetState as courseStatusResetState,
  resetState,
  statusConstants,
} from "../../redux/slices/courseStatusSlice";
import { declineCourse } from "../../redux/thunks/courseStatusThunk";
import DeclineCourseModuleAndLecture from "./DeclineCourseModuleAndLecture";
import DeclineCourseReason from "./DeclineCourseReason";
import { fetchOneCourse } from "../../redux/thunks/coursesThunks";

function DeclineCourse({ onClose, courseToDecline = {} }) {
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.singleCourse.data.modules);
  const singleCourseLoading = useSelector(
    (state) => state.singleCourse.isLoading,
  );
  const singleCourseError = useSelector((state) => state.singleCourse.error);
  const { statusData, loading, error, successMessage } = useSelector(
    (state) => state.courseStatus,
  );

  // useEffect(() => {
  //   console.log("running?");
  //   dispatch(resetState());
  // }, []);

  const { title, id } = courseToDecline;

  useEffect(
    function () {
      if (!id) return;
      console.log("fetch one course");
      dispatch(fetchOneCourse(id));
    },
    [id],
  );

  const validateDescription = () => {
    return statusData.status_desc.every(
      (item) =>
        item.module_id &&
        item.content_id &&
        item.description.trim().length >= 15,
    );
  };

  const handleContinue = async (event) => {
    event.preventDefault();
    if (!statusData.reason) {
      setValidationError("Please select a reason for declining.");
      return;
    }

    if (statusData.status_desc.length > 0 && !validateDescription()) {
      setValidationError(
        "Please fill out module, lecture and description with at least 15 characters.",
      );
      return;
    }

    const dataToDispatch = {
      ...statusData,
      course_id: id,
      status: statusConstants.DECLINED,
    };

    try {
      await dispatch(declineCourse(dataToDispatch)).unwrap();
      setValidationError("");
    } catch (err) {
      console.error("Failed to decline course", err);
    }
  };

  const handleCancel = () => {
    dispatch(courseStatusResetState());
    onClose();
  };

  console.log("Reason", statusData.reason);

  return (
    <form onSubmit={handleContinue} className="space-y-4">
      <H2>Declining course</H2>
      <p>
        You’re about to decline <span className="font-medium">{title}</span>.
        Are you sure you want to do this?
      </p>
      <DeclineCourseReason />
      {statusData.reason
        ? singleCourseError && (
            <p>
              Unable to load modules at the moment. You can try again later or
              proceed with declining the course without selecting a module or
              lecture.
            </p>
          )
        : null}

      {statusData.reason ? (
        modules?.length > 0 ? (
          <DeclineCourseModuleAndLecture modules={modules} />
        ) : (
          <p>
            The course <span className="font-medium">{title}</span> currently
            has no modules. You can still proceed with declining the course
            without selecting a module or lecture.
          </p>
        )
      ) : null}

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

export default DeclineCourse;
