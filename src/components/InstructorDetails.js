import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInstructorDetails } from "../../redux/slices/createInstructorSlice";
import Button from "./Button";
import { IntroVideoContext } from "../../lib/IntroVideoContext";

const InstructorDetails = ({ onNext }) => {
  const { videoId } = useContext(IntroVideoContext);
  const profile = useSelector((state) => state.profile);
  const userId = profile?.id;
  const [showError, setShowError] = useState(false);
  const instructorDetails = useSelector(
    (state) => state.instructor.instructorDetails
  );
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.instructor || {});

  const initialFormData = {
    user_id: "",
    experience: [""],
    specialization: "",
    qualifications: [{ percentage: "", degree: "" }],
    skills: [{ percentage: "", title: "" }],
    video_url: "",
  };

  const [formData, setFormData] = useState({
    ...initialFormData,
    user_id: userId,
  });

  useEffect(() => {
    if (Object.keys(instructorDetails).length > 0) {
      setFormData({ ...instructorDetails, user_id: userId });
    }
  }, [instructorDetails, userId]);


  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  const handleNestedChange = (section, index, key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: prevFormData[section].map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  const handleExperienceChange = (index, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experience: prevFormData.experience.map((item, i) =>
        i === index ? value : item
      ),
    }));
  };

  const addField = (section, emptyField) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: [...prevFormData[section], emptyField],
    }));
  };

  const addExperienceField = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experience: [...prevFormData.experience, ""],
    }));
    console.log("URL IN EXPERICENCE: ", videoId)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateInstructorDetails(formData));
  };

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  return (
    <div className="w-full overflow-auto p-8">
      {showError && (
        <ErrorMessage
          showError={showError}
          setShowError={setShowError}
          errorMessage={error}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="mt-5 flex justify-between gap-28 max-lg:flex-col">
          <div className="flex flex-grow flex-col gap-y-5">
            <div>
              <h3 className="mb-3 text-lg font-medium">
                What is your educational background?
              </h3>
              {formData.qualifications.map((detail, i) => 
                <div className="mb-2 flex flex-col gap-3" key={i}>
                  <input
                    type="text"
                    placeholder="Percentage %"
                    title="Please enter a valid percentage between 0 and 100."
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    value={detail.percentage}
                    required
                    pattern="^(100|[1-9]?[0-9])$"
                    onChange={(e) =>
                      handleNestedChange(
                        "qualifications",
                        i,
                        "percentage",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Qualification"
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    value={detail.degree}
                    pattern="^[a-zA-Z ]+$"
                    title="Qualification should contain alphabets only."
                    required
                    onChange={(e) =>
                      handleNestedChange(
                        "qualifications",
                        i,
                        "degree",
                        e.target.value
                      )
                    }
                  />
                </div>
              )}
              <button
                className="font-medium text-blue"
                type="button"
                onClick={() =>
                  addField("qualifications", { percentage: "", degree: "" })
                }
              >
                + Add more Educational detail
              </button>
            </div>
            <div>
              <h3 className="text-lg font-medium">Add Your Skills</h3>
              {formData.skills.map((skill, i) => (
                <div className="mb-2 flex flex-col gap-3" key={i}>
                  <input
                    type="text"
                    placeholder="Percentage %"
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    pattern="^(100|[1-9]?[0-9])$"
                    title="Please enter a valid percentage between 0 and 100."
                    value={skill.percentage}
                    required
                    onChange={(e) =>
                      handleNestedChange(
                        "skills",
                        i,
                        "percentage",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Skill"
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    value={skill.title}
                    pattern="^[a-zA-Z.+]+$"
                    title="Please enter a valid skill."
                    required
                    onChange={(e) =>
                      handleNestedChange("skills", i, "title", e.target.value)
                    }
                  />
                </div>
              ))}
              <button
                className="font-medium text-blue"
                type="button"
                onClick={() => addField("skills", { percentage: "", title: "" })}
              >
                + Add more Skills
              </button>
            </div>
          </div>
          <div className="flex flex-grow flex-col gap-y-5">
            <div>
              <h3 className="mb-3 text-lg font-medium max-lg:mt-5">
                What are your experience domains?
              </h3>
              {formData.experience.map((domain, i) => (
                <div className="mb-2 flex flex-col gap-3" key={i}>
                  <input
                    type="text"
                    placeholder="Domain"
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    pattern="^[a-zA-Z \-]+$"
                    title="Domain should contain alphabets only."
                    value={domain}
                    required
                    onChange={(e) => handleExperienceChange(i, e.target.value)}
                  />
                </div>
              ))}
              <button
                className="font-medium text-blue"
                type="button"
                onClick={addExperienceField}
              >
                + Add more domains
              </button>
            </div>
            <div>
              <h3 className="text-lg font-medium">
                What is your primary area of specialization? Can you provide a
                specific field?
              </h3>
              <input
                type="text"
                placeholder="Specialization"
                className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                value={formData.specialization}
                pattern="^[a-zA-Z \-]+$"
                title="Specialization should contain alphabets only."
                required
                onChange={(e) => handleChange("specialization", e.target.value)}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        {loading && <p className="loading-message">Loading...</p>}
        {error && <p className="error-message">Error: {error}</p>}
        <div className="flex justify-end">
          <Button type="submit" className="!px-10">
            Continue
          </Button>
        </div>
      </form>
      <style jsx>{`
        .loading-message {
          color: blue;
          font-weight: bold;
        }
        .error-message {
          color: red;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default InstructorDetails;
