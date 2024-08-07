import Button from "@/components/Button";
import DropdownSelector from "@/components/DropdownSelector";
import H2 from "@/components/H2";
import Modal from "@/components/Modal";
import { useState } from "react";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  resetState as courseStatusResetState,
  setReason,
} from "../../redux/slices/courseStatusSlice";

function tempPageForPopup() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Modal>
        <Modal.Open opens="actions-popup">
          <button className="popup">
            {" "}
            <HiEllipsisHorizontal className="size-6" />{" "}
          </button>
        </Modal.Open>
        <Modal.Window name="actions-popup">
          <SuspendInstructor />
        </Modal.Window>
      </Modal>
      {/* dev mode */}
      {/* <ModalContent /> */}
    </div>
  );
}

export default tempPageForPopup;

function SuspendInstructor({ onClose }) {
  const [declineReason, setDeclineReason] = useState("");
  const [addStatusDescription, setAddStatusDescription] = useState(0);
  const dispatch = useDispatch();
  const instructorDeclineReason = useSelector(
    (state) => state.courseStatus.statusData.reason,
  );
  const index = useSelector((state) => state.courseStatus.index);
  console.log("is really index", index);

  console.log("Reason to decline Redux", instructorDeclineReason);
  console.log("Reason to decline Component", declineReason);

  const options = [
    { value: "video-quality", label: "Video Quality" },
    { value: "inappropriate-language", label: "Inappropriate Language" },
    { value: "discriminations", label: "Discriminations" },
    { value: "course-curriculum", label: "Course Curriculum" },
  ];

  function handleContinue(event) {
    event.preventDefault();
    if (index === 0) {
      console.log("Suspend instructor Index: ", index);
      if (!declineReason) return;
      console.log("Reason selected:", declineReason);
      dispatch(setReason(declineReason));
    }
    if (index === 1) {
      console.log(`trigger happening on the index ${index}`);
    }
  }

  function handleDeclineReason(value) {
    console.log(`Value on decline Reason ${value}`);
    setDeclineReason(value);
    dispatch(setReason(value));
  }

  function handleModuleAndLecture() {}

  function handleCancel() {
    dispatch(courseStatusResetState());
    console.log("wooo");
    onClose();
  }

  return (
    <form onSubmit={handleContinue} className="space-y-4">
      <H2>Declining course</H2>
      <p>
        You’re about to decline [UI UX Course]. Are you sure you want to do
        this?
      </p>

      {/* Decline Reason */}
      <DropdownSelector
        className="w-full"
        label="Select your reason"
        options={options}
        onChange={handleDeclineReason}
      />

      {/* Decline Module and Lecture, Status description */}
      {declineReason ? <CourseDeclineModuleAndLecture /> : null}

      <div className="buttons flex items-center justify-center gap-4">
        <Button
          type="button"
          className="w-full !rounded-xl py-4 !text-lg !font-medium !text-black-shade-1"
          variant="secondary"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="w-full !rounded-xl !border-blue-50 !bg-red-50 py-4 !text-lg !font-medium !text-red-500"
        >
          Decline
        </Button>
      </div>
    </form>
  );
}

function CourseDeclineModuleAndLecture() {
  const [modulesAndLectures, setModulesAndLectures] = useState([]);
  const dispatch = useDispatch();

  const moduleOptions = [
    { value: "module-1", label: "module 1" },
    { value: "module-2", label: "module 2" },
    { value: "module-3", label: "module 3" },
    { value: "module-4", label: "module 4" },
    { value: "module-5", label: "module 5" },
    { value: "module-6", label: "module 6" },
    { value: "module-7", label: "module 7" },
    { value: "module-8", label: "module 8" },
    { value: "module-9", label: "module 9" },
    { value: "module-10", label: "module 10" },
    { value: "module-11", label: "module 11" },
    { value: "module-12", label: "module 12" },
    { value: "module-13", label: "module 13" },
    { value: "module-14", label: "module 14" },
    { value: "module-15", label: "module 15" },
    { value: "module-16", label: "module 16" },
    { value: "module-17", label: "module 17" },
  ];

  const lectureOptions = [
    { value: "lecture-1", label: "lecture 1" },
    { value: "lecture-2", label: "lecture 2" },
  ];

  const handleAddModuleAndLecture = () => {
    setModulesAndLectures((prev) => [
      ...prev,
      { module_id: null, content_id: null, description: "" },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updatedModulesAndLectures = modulesAndLectures.map((item, i) =>
      i === index ? { ...item, [field]: value } : item,
    );
    setModulesAndLectures(updatedModulesAndLectures);
  };

  const handleContinue = () => {
    // Validate all entries before dispatching
    const isValid = modulesAndLectures.every(
      (item) => item.module_id && item.content_id && item.description.trim(),
    );

    if (!isValid) {
      console.log("Please fill out all fields.");
      return;
    }
    console.log("Module and lectures", modulesAndLectures);

    dispatch(setModuleAndLectur(modulesAndLectures));
  };

  return (
    <div className="scrollbar-custom max-h-[17rem] space-y-4 overflow-y-auto overflow-x-hidden">
      {modulesAndLectures.map((item, index) => (
        <div key={index} className="space-y-3">
          <div className="flex items-center justify-center gap-4">
            <DropdownSelector
              className="w-full min-w-max flex-1"
              defaultLabel="Select a module"
              options={moduleOptions}
              onChange={(value) => handleChange(index, "module_id", value)}
            />
            <DropdownSelector
              className="w-full min-w-max flex-1"
              defaultLabel="Select a lecture"
              options={lectureOptions}
              onChange={(value) => handleChange(index, "content_id", value)}
            />
          </div>
          <div className="add-status-description">
            <label
              htmlFor={`add-course-status-description-${index}`}
              className="sr-only"
            >
              Course Status Description
            </label>
            <textarea
              id={`add-course-status-description-${index}`}
              className="w-full resize-none rounded-md border border-dashboard-border p-3 text-status-text focus:border-dashboard-border focus:outline-none focus:ring-0 active:border-dashboard-border active:outline-none active:ring-0"
              maxLength="280"
              rows="5"
              aria-label="Course Status Description"
              value={item.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            ></textarea>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="text-sm text-blue"
        onClick={handleAddModuleAndLecture}
      >
        Add {modulesAndLectures.length > 0 ? "another" : "specific"}{" "}
        module/lecture +
      </button>
    </div>
  );
}
