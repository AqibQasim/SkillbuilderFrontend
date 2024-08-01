import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInstructorDetails } from "../../redux/slices/createInstructorSlice";
import Button from "./Button";

const InstructorDetails = ({ onNext }) => {
  const profile = useSelector((state) => state.profile);
  const instructorDetails = useSelector(
    (state) => state.instructor.instructorDetails,
  );
  console.log("I  D;", instructorDetails);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.instructor || {});

  const initialFormData = {
    user_id: profile.id,
    experience: [""],
    specialization: "",
    qualifications: [{ percentage: "", degree: "" }],
    skills: [{ percentage: "", title: "" }],
    video_url: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (Object.keys(instructorDetails).length > 0) {
      setFormData(instructorDetails);
    }
  }, [instructorDetails]);

  const handleChange = (field, value) => {
    const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);
  };

  const handleNestedChange = (section, index, key, value) => {
    const updatedSection = formData[section].map((item, i) =>
      i === index ? { ...item, [key]: value } : item,
    );
    handleChange(section, updatedSection);
  };

  const handleExperienceChange = (index, value) => {
    const updatedExperience = formData.experience.map((item, i) =>
      i === index ? value : item,
    );
    handleChange("experience", updatedExperience);
  };

  const addField = (section, emptyField) => {
    handleChange(section, [...formData[section], emptyField]);
  };

  const addExperienceField = () => {
    handleChange("experience", [...formData.experience, ""]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateInstructorDetails(formData));
    // onNext();
  };

  return (
    <div className="w-full overflow-auto p-8">
      <form onSubmit={submitHandler}>
        <div className="mt-5 flex flex-row justify-between max-plg:flex-col">
          <div className="flex flex-col gap-y-5">
            <div>
              <h3 className="mb-3 me-40 text-lg font-medium">
                What is your educational background?
              </h3>
              {formData.qualifications.map((detail, i) => (
                <div className="mb-2" key={i}>
                  <input
                    type="text"
                    placeholder="Percentage %"
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    value={detail.percentage}
                    required
                    onChange={(e) =>
                      handleNestedChange(
                        "qualifications",
                        i,
                        "percentage",
                        e.target.value,
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Qualification"
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    value={detail.degree}
                    required
                    onChange={(e) =>
                      handleNestedChange(
                        "qualifications",
                        i,
                        "degree",
                        e.target.value,
                      )
                    }
                  />
                </div>
              ))}
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
                <div className="mb-2" key={i}>
                  <input
                    type="text"
                    placeholder="Percentage %"
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    value={skill.percentage}
                    required
                    onChange={(e) =>
                      handleNestedChange(
                        "skills",
                        i,
                        "percentage",
                        e.target.value,
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Skill"
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    value={skill.title}
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
                onClick={() =>
                  addField("skills", { percentage: "", title: "" })
                }
              >
                + Add more Skills
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <h3 className="mb-3 text-lg font-medium max-plg:mt-5">
                What are your experience domains?
              </h3>
              {formData.experience.map((domain, i) => (
                <div className="mb-2" key={i}>
                  <input
                    type="text"
                    placeholder="Domain"
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
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
              <h3 className="me-5 text-lg font-medium">
                What is your primary area of specialization? Can you provide
                Specific field
              </h3>
              <input
                type="text"
                placeholder="Specialization"
                className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                value={formData.specialization}
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

// const InstructorDetails = ({ onNext }) => {
//   const profile = useSelector((state) => state.profile);
//   const [formData, setFormData] = useState({
//     user_id: profile.id,
//     experience: ["Web-Development", "Beginner-level Devops"],
//     specialization: "Web-Development",
//     qualifications: [{ percentage: 90.0, degree: "BSSE" }],
//     skills: [
//       { percentage: "90%", title: "Next JS" },
//       // { title: "Express JS", percentage: "90%" },
//     ],
//     video_url: "temporary video url",
//   });
//   const dispatch = useDispatch();
//   const { loading, error, instructorDetails } = useSelector(
//     (state) => state.instructor || {},
//   );
//   console.log("I D :", instructorDetails);
//   const [educationDetails, setEducationDetails] = useState([
//     { id: 1, value: "", placeholder: "Percentage %" },
//     { id: 2, value: "", placeholder: "Qualification" },
//   ]);
//   const [skills, setSkills] = useState([
//     { id: 1, value: "", placeholder: "Percentage %" },
//     { id: 2, value: "", placeholder: "Skills" },
//   ]);
//   const [experienceDomains, setExperienceDomains] = useState([
//     { id: 1, value: "" },
//   ]);
//   const [specialization, setSpecialization] = useState("");

//   const addEducationDetail = () => {
//     setEducationDetails((prevDetails) => [
//       ...prevDetails,
//       { id: prevDetails.length + 1, value: "", placeholder: "Percentage %" },
//       { id: prevDetails.length + 2, value: "", placeholder: "Qualification" },
//     ]);
//   };

//   const addSkill = () => {
//     setSkills((prevSkills) => [
//       ...prevSkills,
//       { id: prevSkills.length + 1, value: "", placeholder: "Percentage %" },
//       { id: prevSkills.length + 2, value: "", placeholder: "Skill" },
//     ]);
//   };

//   const addExperienceDomain = () => {
//     setExperienceDomains((prevDomains) => [
//       ...prevDomains,
//       { id: prevDomains.length + 1, value: "" },
//     ]);
//   };

//   const handleEducationChange = (id, value) => {
//     const updatedEducationDetails = educationDetails.map((detail) =>
//       detail.id === id ? { ...detail, value } : detail,
//     );
//     setEducationDetails(updatedEducationDetails);
//   };

//   const handleSkillChange = (id, value) => {
//     const updatedSkills = skills.map((skill) =>
//       skill.id === id ? { ...skill, value } : skill,
//     );
//     setSkills(updatedSkills);
//   };

//   const handleExperienceChange = (id, value) => {
//     const updatedExperienceDomains = experienceDomains.map((domain) =>
//       domain.id === id ? { ...domain, value } : domain,
//     );
//     setExperienceDomains(updatedExperienceDomains);
//   };

//   const handleSpecializationChange = (value) => {
//     setSpecialization(value);
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     console.log("Form is submitting ... ");

//     // Update formData with dynamic fields before dispatching
//     const updatedFormData = {
//       ...formData,
//       experience: experienceDomains.map((domain) => domain.value),
//       specialization: specialization,
//       qualifications: educationDetails
//         .map((detail, index) => {
//           if (index % 2 === 1) return null; // Skip the placeholder fields
//           return {
//             degree: educationDetails[index + 1].value,
//             percentage: parseFloat(detail.value),
//           };
//         })
//         .filter(Boolean), // Remove null values
//       skills: skills
//         .map((detail, index) => {
//           if (index % 2 === 1) return null; // Skip the placeholder fields
//           return {
//             title: skills[index + 1].value,
//             percentage: detail.value,
//           };
//         })
//         .filter(Boolean), // Remove null values
//     };

//     // const resultAction = await dispatch(createInstructor(updatedFormData));
//     // if (createInstructor.fulfilled.match(resultAction)) {
//     //   onNext();
//     // } else {
//     //   console.error("Failed to create instructor:", resultAction.payload);
//     // }
//     // onNext();
//     // Update slice
//     dispatch(updateInstructorDetails(updatedFormData));
//   };

//   return (
//     <div className="w-full overflow-auto p-8">
//       <form onSubmit={submitHandler}>
//         <div className="mt-5 flex flex-row justify-between max-plg:flex-col">
//           <div className="flex flex-col gap-y-5">
//             <div>
//               <h3 className="mb-3 me-40 text-lg font-medium">
//                 What is your educational background?
//               </h3>
//               {educationDetails.map((detail, i) => (
//                 <div className="mb-2" key={detail.id}>
//                   <input
//                     type="text"
//                     placeholder={detail.placeholder}
//                     className="h-12 w-full rounded border-2 bg-bg_gray p-3"
//                     value={detail.value}
//                     // defaultValue={instructorDetails?.qualifications?.at(i)}
//                     required
//                     onChange={(e) =>
//                       handleEducationChange(detail.id, e.target.value)
//                     }
//                   />
//                 </div>
//               ))}
//               <button
//                 className="font-medium text-blue"
//                 type="button"
//                 onClick={addEducationDetail}
//               >
//                 + Add more Educational detail
//               </button>
//             </div>
//             <div>
//               <h3 className="text-lg font-medium">Add Your Skills</h3>
//               {skills.map((skill) => (
//                 <div className="mb-2" key={skill.id}>
//                   <input
//                     type="text"
//                     placeholder={skill.placeholder}
//                     className="h-12 w-full rounded border-2 bg-bg_gray p-3"
//                     value={skill.value}
//                     required
//                     onChange={(e) =>
//                       handleSkillChange(skill.id, e.target.value)
//                     }
//                   />
//                 </div>
//               ))}
//               <button
//                 className="font-medium text-blue"
//                 type="button"
//                 onClick={addSkill}
//               >
//                 + Add more Skills
//               </button>
//             </div>
//           </div>
//           <div className="flex flex-col gap-y-5">
//             <div>
//               <h3 className="mb-3 text-lg font-medium max-plg:mt-5">
//                 What are your experience domains?
//               </h3>
//               {experienceDomains.map((domain) => (
//                 <div className="mb-2" key={domain.id}>
//                   <input
//                     type="text"
//                     placeholder="domains"
//                     className="h-12 w-full rounded border-2 bg-bg_gray p-3"
//                     value={domain.value}
//                     required
//                     onChange={(e) =>
//                       handleExperienceChange(domain.id, e.target.value)
//                     }
//                   />
//                 </div>
//               ))}
//               <button
//                 className="font-medium text-blue"
//                 type="button"
//                 onClick={addExperienceDomain}
//               >
//                 + Add more domains
//               </button>
//             </div>
//             <div>
//               <h3 className="me-5 text-lg font-medium">
//                 What is your primary area of specialization? Can you provide
//                 Specific field
//               </h3>
//               <input
//                 type="text"
//                 placeholder="Specialization"
//                 className="h-12 w-full rounded border-2 bg-bg_gray p-3"
//                 value={specialization}
//                 required
//                 onChange={(e) => handleSpecializationChange(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//         <br />
//         <br />
//         {loading && <p className="loading-message">Loading...</p>}
//         {error && <p className="error-message">Error: {error}</p>}
//         <div className="flex justify-end">
//           <Button type="submit" className="!px-10">
//             Continue
//           </Button>
//         </div>
//       </form>
//       <style jsx>{`
//         .loading-message {
//           color: blue;
//           font-weight: bold;
//         }
//         .error-message {
//           color: red;
//           font-weight: bold;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InstructorDetails;
