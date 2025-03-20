import React, { useState, useRef, useMemo } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Image from "next/image";
import Button from "@/components/Button";
import { FiTrash2 } from "react-icons/fi";
import CourseCatagories from "@/components/CourseCatagories";
import Link from "next/link";
import LiveCoursePopup from "@/components/LiveCoursePopup";
import { instructor } from "@/data/getInstructorById";
import { useSelector } from "react-redux";
import { parse } from "path";

const LiveCourses = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    timeOptions: "",
    videoConf: "",
    level: "",
    price: 0,
    discount: 0,
    category: "Others",

    media: [],
  });

  const thumbnailInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  const calculatedEarnings = useMemo(() => {
    const effectiveAmount = formData.price - formData.discount;
    return effectiveAmount > 0 ? (effectiveAmount * 0.8).toFixed(2) : "0.00";
  }, [formData.price, formData.discount]);

  const [moduleVideoUploading, setModuleVideoUploading] = useState({
    loading: false,
    failed: false,
  });

  const [learningOutcomes, setLearningOutcomes] = useState([]);
  const [modules, setModules] = useState([]);

  const [learningOutcomeInput, setLearningOutcomeInput] = useState({
    outcome: "",
  });
  const [moduleInput, setModuleInput] = useState({
    title: "",
    description: "",
  });

  const uploadVideoHandler = async (selectedVideo) => {
    if (!selectedVideo) return;
    setModuleVideoUploading((prevState) => ({
      ...prevState,
      loading: true,
      failed: false,
    }));
    const formData = new FormData();
    formData.append("video", selectedVideo);
    try {
      const response = await fetch("/api/upload-video", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unable to post video");
      }
      const data = await response.json();
      if (data.uri) {
        const videoId = data.uri.split("/").pop();
        setModuleVideoUploading((prevState) => ({
          ...prevState,
          loading: false,
          failed: false,
        }));
        return videoId;
      } else {
        throw new Error("Failed to get video URI from response");
      }
    } catch (error) {
      setIsLoading(false);
      setModuleVideoUploading((prevState) => ({
        ...prevState,
        loading: false,
        failed: true,
      }));
      selectedVideo.failed = true;
      console.error("Failed to upload video", error.message);
      alert.error("Failed to upload video");
    }
  };

  const [videoId, setVideoId] = useState(null);

  const uploadVideo = async () => {
    const videoFile = formData.media.find(
      (file) => file.type === "video",
    )?.file;
    if (!videoFile) {
      alert("Please Select Introductory Video To Upload");
      return;
    }

    setVideoId(await uploadVideoHandler(videoFile));
    setCurrentStep(3);
  };

  const handleAddModule = () => {
    if (!moduleInput.title || !moduleInput.description) return;

    setModules((prevModules) => [...prevModules, moduleInput]);

    setModuleInput({ title: "", description: "" });
  };

  const handleAddOutcome = () => {
    if (!learningOutcomeInput.outcome) return;

    setLearningOutcomes((prevOutcomes) => [
      ...prevOutcomes,
      learningOutcomeInput,
    ]);

    setLearningOutcomeInput({ outcome: "" });
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

  const instructorId = useSelector(
    (state) => state.instructorByUserId.instructorByUserId.id,
  );

  async function createLiveCourse() {
    try {
      // if(videoId === null){
      //   alert("Please upload introductory video")
      //   return
      // }

      const instructor = localStorage.getItem("profile");
      // const instructor_id = JSON.parse(instructor).id;
      // console.log("Instructor ID: ", instructor_id);

      const outcomes = learningOutcomes.map((outcome) => outcome.outcome);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/create-live-session-course`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            instructor_id: instructorId,
            title: formData.title,
            description: formData.description,
            timeOptions: formData.timeOptions,
            videoConf: formData.videoConf,
            level: formData.level,
            amount: formData.price,
            discount: formData.discount,
            category: formData.category,
            modules: modules,
            learning_outcomes: outcomes,
            modulesCount: modules.length,
            video_url: videoId,
          }),
        },
      );
      const data = await response.json();
      // console.log("Data from create live course: ", data);
      return data;
    } catch (error) {
      console.log("Error occured: ", error);
    }
  }

  return (
    <DashboardLayout>
      <div>
        <div className={`p-6 ${showPopup ? "blur" : ""}`}>
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
                    value={moduleInput.title}
                    onChange={(e) =>
                      setModuleInput({ ...moduleInput, title: e.target.value })
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
                    value={moduleInput.description}
                    onChange={(e) =>
                      setModuleInput({
                        ...moduleInput,
                        description: e.target.value,
                      })
                    }
                    className="h-32 w-full rounded-md border bg-gray-200 p-2"
                    placeholder="Description."
                  />
                </div>
                <h1 className="mb-2 block text-sm font-medium text-gray-shade-1">
                  Modules Added: {modules.length}
                </h1>
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
                        {index + 1}. {mod.title}
                      </h4>
                      <FiTrash2
                        onClick={() =>
                          setModules((prev) =>
                            prev.filter((_, i) => i !== index),
                          )
                        }
                      />
                    </div>

                    <p className="mt-1 text-sm text-gray-600">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Learning Outcomes */}
              <div className="mb-6">
                <h2 className="pb-1 text-xl font-medium capitalize">
                  Learning Outcomes
                </h2>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Learning Outcome
                  </label>
                  <input
                    type="text"
                    name="outcome"
                    value={learningOutcomeInput.outcome}
                    onChange={(e) =>
                      setLearningOutcomeInput({
                        ...learningOutcomeInput,
                        outcome: e.target.value,
                      })
                    }
                    className="w-full rounded-md border bg-gray-200 p-2"
                    placeholder="Outcome"
                  />
                </div>

                <h1 className="mb-2 block text-sm font-medium text-gray-shade-1">
                  Outcomes Added: {learningOutcomes.length}
                </h1>
              </div>

              <div className="mr-auto">
                <button
                  onClick={handleAddOutcome}
                  className="rounded text-blue-600 hover:underline"
                >
                  Add Outcome +
                </button>
              </div>

              <div className="mb-6">
                {learningOutcomes.length > 0 && (
                  <h3 className="text-lg font-semibold">Outcomes Added:</h3>
                )}
                {learningOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="my-2 rounded-md border bg-gray-50 p-3"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-800">
                        {index + 1}. {outcome.outcome}
                      </h4>
                      <FiTrash2
                        onClick={() =>
                          setLearningOutcomes((prev) =>
                            prev.filter((_, i) => i !== index),
                          )
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="rounded px-4 py-2 text-gray-600 hover:bg-gray-50">
                  Cancel
                </button>
                <Button
                  className="ml-auto"
                  onClick={() => {
                    let price = parseInt(formData.price);

                    let discount = parseInt(formData.discount);

                    if (
                      !formData.title ||
                      !formData.description ||
                      !formData.timeOptions ||
                      !formData.videoConf ||
                      !formData.price ||
                      !formData.category ||
                      modules.length < 1 ||
                      learningOutcomes.length < 1
                    ) {
                      alert("Please fill all the fields");
                      return;
                    } else if (formData.price < 0) {
                      alert("Price cannot be negative");
                      return;
                    } else if (discount > price) {
                      alert(
                        `Discount cannot be greater than price ${price} ${discount}`,
                      );
                      return;
                    } else if (formData.discount < 0) {
                      alert("Discount cannot be negative");
                      return;
                    } else if (formData.timeOptions < 0) {
                      alert("Enter valid hours");
                      return;
                    } else {
                      setCurrentStep(2);
                    }
                  }}
                >
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
                  <Button
                    className={`${moduleVideoUploading.loading ? "bg-gray-400" : ""}`}
                    disabled={moduleVideoUploading.loading}
                    onClick={() => uploadVideo()}
                  >
                    Continue
                  </Button>
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
                <Button
                  onClick={() => {
                    createLiveCourse().then((data) => {
                      setShowPopup(true);
                    });
                  }}
                >
                  Submit
                </Button>
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
