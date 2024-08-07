import DropdownSelector from "@/components/DropdownSelector";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourseStatusModuleAndLectures } from "../../redux/slices/courseStatusSlice";

function SuspendCourseDeclineModuleAndLecture({ modules }) {
  const statusDescription = useSelector(
    (state) => state.courseStatus.statusData.status_desc,
  );
  const dispatch = useDispatch();
  const [modulesAndLectures, setModulesAndLectures] =
    useState(statusDescription);

  // Generate module options
  const moduleOptions = modules?.map((module) => ({
    value: module.id,
    label: module.title,
  }));

  // Generate lecture options for each module
  const lectureOptionsByModule = modules.reduce((acc, module) => {
    acc[module.id] = module.content.map((lecture) => ({
      value: lecture.id,
      label: lecture.title,
    }));
    return acc;
  }, {});

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
    dispatch(setCourseStatusModuleAndLectures(updatedModulesAndLectures));
  };

  return (
    <div className="scrollbar-custom max-h-[17rem] space-y-4 overflow-y-auto overflow-x-hidden">
      {modulesAndLectures.map((item, index) => {
        const lectureOptions = lectureOptionsByModule[item.module_id] || [];

        return (
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
        );
      })}

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

export default SuspendCourseDeclineModuleAndLecture;
