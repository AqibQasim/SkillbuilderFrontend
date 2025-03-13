import React, { useState, useRef, useMemo } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Image from "next/image";
import Button from "@/components/Button";
import { FiTrash2 } from "react-icons/fi";
import CourseCatagories from "@/components/CourseCatagories";
import Link from "next/link";
import LiveCoursePopup from "@/components/LiveCoursePopup";

const LiveCourses = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 Data
    title: "",
    description: "",
    timeOptions: "",
    videoConf: "",
    level: "Intermediate",
    price: "",
    discount: "",
    category: "Others",

    //step 2 Data
    media: [],
  });

  const thumbnailInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  const calculatedEarnings = useMemo(() => {
    const effectiveAmount = formData.price - formData.discount;
    return effectiveAmount > 0 ? (effectiveAmount * 0.8).toFixed(2) : "0.00";
  }, [formData.price, formData.discount]);

  const [learningOutcomes, setLearningOutcomes] = useState([""]);
  const categories = [
    "Development",
    "Testing",
    "Business",
    "Marketing",
    "Design",
    "Others",
  ];
  const [modules, setModules] = useState([]);

  const [moduleInput, setModuleInput] = useState({
    modTitle: "",
    modDescription: "",
  });

  const addOutcomeField = () => {

    const outcome = learningOutcomes[learningOutcomes.length - 1];
    if (!outcome ) {
      return
    }

    setLearningOutcomes([...learningOutcomes, ""]);
  };

  const handleOutcomeChange = (index, value) => {
    const updatedOutcomes = [...learningOutcomes];
    updatedOutcomes[index] = value;
    setLearningOutcomes(updatedOutcomes);
  };

  const handleAddModule = () => {
    if (!moduleInput.modTitle || !moduleInput.modDescription) return;

    // Append the new module from moduleInput to the modules array
    setModules((prevModules) => [...prevModules, moduleInput]);

    // Reset the module input fields
    setModuleInput({ modTitle: "", modDescription: "" });
  };

  const handleFileUpload = (type, file) => {
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) {
      alert("File size cannot exceed 20MB");
      return;
    }
    const newMedia = {
      file,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)}mb`,
      status: "uploading",
      type,
    };

    setFormData((prev) => {
      const filteredMedia = prev.media.filter((m) => m.type !== type);

      filteredMedia.push(newMedia);

      return {
        ...prev,
        media: filteredMedia,
      };
    });

    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        media: prev.media.map((item) =>
          item.name === file.name ? { ...item, status: "uploaded" } : item,
        ),
      }));
    }, 2000);
  };

  const removeOutcomeField = (index) => {
    setLearningOutcomes(learningOutcomes.filter((_, i) => i !== index));
  };
  const handleRemoveFile = (fileName) => {
    setFormData((prev) => ({
      ...prev,
      media: prev.media.filter((item) => item.name !== fileName),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <DashboardLayout>
      <div>
      <div className={`p-6  ${showPopup ? "blur" : ""}`}>
        <h2 className="pb-1 text-2xl font-medium capitalize">
          Live New Course
        </h2>

        {/* Steps Navigation */}
        <div className="mb-8 flex items-center gap-2">
          {[1, 2, 3].map((step, index) => (
            <React.Fragment key={step}>
              <div className="flex items-center gap-2">
                <div
                  className={`h-5 w-5 rounded-full ${
                    currentStep >= step ? "bg-blue-400" : "bg-gray-400"
                  } flex items-center justify-center text-xs text-white`}
                >
                  {step}
                </div>
                <span
                  className={`text-sm ${
                    currentStep >= step ? "text-primary" : "text-gray-400"
                  }`}
                >
                  {step === 1 && "Intended Learner"}
                  {step === 2 && "Promotional Media"}
                  {step === 3 && "Submit Document"}
                </span>
              </div>
              {index < 2 && (
                <span className="text-sm text-gray-400">{">"}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step 1 Content */}
        {currentStep === 1 && (
          <div className="w-[80%]">
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-shade-1">
                Title name
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full rounded-md border bg-gray-200 p-2"
                placeholder="Master in Product Design"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-shade-1">
                Course Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="h-32 w-full rounded-md border bg-gray-200 p-2"
                placeholder="Introduce about Product Design..."
              />
            </div>

            <div className="flex w-full gap-4">
              <div className="mb-6 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-shade-1">
                  Time Duration (in hours)
                </label>
                <input
                  type="number"
                  name="timeOptions"
                  value={formData.timeOptions}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-gray-200 p-2"
                  placeholder="Set Time Duration"
                />
              </div>
              <div className="mb-8 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-shade-1">
                  All Level
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-gray-200 p-2"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>

            <div className="flex w-full gap-4">
              <div className="mb-6 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-shade-1">
                  Video Conferencing
                </label>
                <input
                  type="text"
                  name="videoConf"
                  value={formData.videoConf}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-gray-200 p-2"
                  placeholder="Zoom Meeting"
                />
              </div>
              <div className="mb-6 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-shade-1">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-gray-200 p-2"
                >
                  <option>Development</option>
                  <option>Testing</option>
                  <option>Business</option>
                  <option>Marketing</option>
                  <option>Design</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <div></div>

            <div className="flex w-full gap-4">
              <div className="mb-6 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-shade-1">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-gray-200 p-2"
                  placeholder="$100"
                />
                <label className="mb-2 block text-sm font-medium text-gray-shade-1">
                  You'll get 80% for each purchase which is:$
                  {calculatedEarnings}
                </label>
              </div>
              <div className="mb-6 w-full">
                <label className="mb-2 block text-sm font-medium text-gray-shade-1">
                  Discount (Optional)
                </label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-gray-200 p-2"
                  placeholder="$10"
                />
              </div>
            </div>
            <div></div>
            {/* Add Modules Section */}
            <div className="mb-6">
              <h2 className="pb-1 text-xl font-medium capitalize">
                Add Modules
              </h2>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="modTitle"
                  value={moduleInput.modTitle}
                  onChange={(e) =>
                    setModuleInput({ ...moduleInput, modTitle: e.target.value })
                  }
                  className="w-full rounded-md border bg-gray-200 p-2"
                  placeholder="Introduction to Product Design"
                />
              </div>

              <div className="mb-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Module Description
                </label>
                <textarea
                  name="modDescription"
                  value={moduleInput.modDescription}
                  onChange={(e) =>
                    setModuleInput({
                      ...moduleInput,
                      modDescription: e.target.value,
                    })
                  }
                  className="h-32 w-full rounded-md border bg-gray-200 p-2"
                  placeholder="Description."
                />
              </div>
            </div>

            <div className="mr-auto">
              <button
                onClick={handleAddModule}
                className="rounded text-blue-600 hover:underline"
              >
                Add Module +
              </button>
            </div>

            <div className="mb-6">
              {modules.length > 0 && (
                <h3 className="text-lg font-semibold">Modules Added:</h3>
              )}
              {modules.map((mod, index) => (
                <div
                  key={index}
                  className="my-2 rounded-md border bg-gray-50 p-3"
                >
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-800">
                      {index + 1}. {mod.modTitle}
                    </h4>
                    <FiTrash2
                      onClick={() =>
                        setModules((prev) => prev.filter((_, i) => i !== index))
                      }
                    />
                  </div>

                  <p className="mt-1 text-sm text-gray-600">
                    {mod.modDescription}
                  </p>
                </div>
              ))}
            </div>
            <div className="mr-auto">
              <label
                htmlFor="learning"
                className="text-md mb-4 block font-semibold text-gray-700"
              >
                Course Outcomes
              </label>
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="mb-2 flex space-x-2">
                  <input
                    type="text"
                    value={outcome}
                    onChange={(e) => handleOutcomeChange(index, e.target.value)}
                    className="w-full rounded-md border bg-gray-200 p-2"
                    placeholder={`Outcome ${index + 1}`}
                    required
                    minLength={30}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeOutcomeField(index)}
                      className="rounded-md bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}

              <button
                onClick={addOutcomeField}
                className="rounded text-blue-600 hover:underline"
              >
                Add Outcomes +
              </button>
            </div>

            <div className="flex gap-4">
              <button className="rounded px-4 py-2 text-gray-600 hover:bg-gray-50">
                Cancel
              </button>
              <Button className="ml-auto" onClick={() => setCurrentStep(2)}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2 Content */}
        {currentStep === 2 && (
          <div className="w-full">
            <div className="mb-8 flex gap-4">
              <div className="mb-4 w-full">
                <label className="mb-4 block text-sm font-medium">
                  Thumbnail image
                </label>
                <div
                  className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-blue-400"
                  onClick={() =>
                    thumbnailInputRef.current &&
                    thumbnailInputRef.current.click()
                  }
                >
                  <Image
                    src={"/img.svg"}
                    alt="img"
                    height={60}
                    width={60}
                    className="m-auto"
                  />
                  <p className="mb-2 text-gray-600">
                    Drag and drop an image, or Browse
                  </p>
                  <p className="text-xs text-gray-500">
                    Maximum 1400px × 1600px
                  </p>
                  <input
                    ref={thumbnailInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFileUpload("thumbnail", e.target.files[0])
                    }
                    className="hidden"
                  />
                </div>
              </div>

              <div className="mb-4 w-full">
                <label className="mb-4 block text-sm font-medium">
                  Promotional video
                </label>
                <div
                  className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-blue-400"
                  onClick={() =>
                    videoInputRef.current && videoInputRef.current.click()
                  }
                >
                  <Image
                    src={"/video.svg"}
                    alt="vid"
                    height={60}
                    width={60}
                    className="m-auto"
                  />
                  <p className="mb-2 text-gray-600">
                    Drag and drop a video, or Browse
                  </p>
                  <p className="text-xs text-gray-500">
                    Videos (mp4, 4:3, 60 secs)
                  </p>
                  <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/mp4"
                    onChange={(e) =>
                      handleFileUpload("video", e.target.files[0])
                    }
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex items-center justify-between">
                <label className="mb-4 block text-sm font-medium text-gray-400">
                  Only .mp4, png, jpeg files.
                </label>
                <label className="mb-4 block text-sm font-medium text-gray-400">
                  Max 20mb File Size
                </label>
              </div>
              {formData.media.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-4">
                    {item.type === "thumbnail" ? (
                      <Image
                        src={"/img.svg"}
                        alt="img icon"
                        width={30}
                        height={30}
                      />
                    ) : (
                      <Image
                        src={"/video.svg"}
                        alt="video icon"
                        width={30}
                        height={30}
                      />
                    )}

                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.size}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.status === "uploading" ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          Uploading...
                        </span>
                        <div className="relative h-1 w-20 rounded bg-gray-200">
                          <div
                            className="absolute left-0 top-0 h-1 animate-pulse bg-blue-500"
                            style={{ width: "50%" }}
                          />
                        </div>
                      </div>
                    ) : (
                      <span className="text-xs text-green-500">Uploaded</span>
                    )}

                    <button
                      onClick={() => handleRemoveFile(item.name)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentStep(1)}
                className="rounded px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                Back
              </button>
              <div className="ml-auto flex gap-4">
                <Button onClick={() => setCurrentStep(3)}>Continue</Button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="w-full">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Review & Submit
            </h3>
            <p className="mb-2 text-gray-700">
              <strong>Title:</strong> {formData.title}
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Session date & time:</strong> April 10, 2025 at 5:00PM
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Time:</strong> {formData.timeOptions} Hours
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Video Conferencing:</strong> {formData.videoConf}
            </p>
            <p className="mb-6 text-gray-700">
              <strong>Level:</strong> {formData.level}
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="rounded px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                Back
              </button>
              <Button onClick={() => setShowPopup(true)}>Submit</Button>
            </div>
          </div>
        )}



      </div>
      {showPopup && (
          <LiveCoursePopup
            title={formData.title}
            price={formData.price}
            timeOptions={formData.timeOptions}
            videoConf={formData.videoConf}
            onClose={() => setShowPopup(false)}
          />
        )}

      </div>
    </DashboardLayout>
  );
};

export default LiveCourses;
