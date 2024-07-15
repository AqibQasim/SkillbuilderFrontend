import React, { useState } from "react";
import SkillBuilderSvg from "@/components/SkillBuilderSvg";
import InstructorTab from "@/components/InstructorTab2";

const InstructorDetails = () => {
  const [educationDetails, setEducationDetails] = useState([{ id: 1, value: "", placeholder:"Percentage %" }, {id:2, value: "", placeholder:""}]);
  const [skills, setSkills] = useState([{ id: 1, value: "", placeholder:"Percentage %" }, {id:2, value: "", placeholder:""}]);

  const addEducationDetail = () => {
    setEducationDetails(prevDetails => [
      ...prevDetails, 
      { id: prevDetails.length + 1, value: "", placeholder: "Percentage %" },
      { id: prevDetails.length + 2, value: "", placeholder: "" }
    ]);
  };

  const addSkill = () => {
    setSkills(prevSkills => [
      ...prevSkills, 
      { id: prevSkills.length + 1, value: "", placeholder: "Percentage %" },
      { id: prevSkills.length + 2, value: "", placeholder: "" }
    ]);
  };

  const handleEducationChange = (id, value) => {
    const updatedEducationDetails = educationDetails.map((detail) =>
      detail.id === id ? { ...detail, value } : detail
    );
    setEducationDetails(updatedEducationDetails);
  };

  const handleSkillChange = (id, value) => {
    const updatedSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, value } : skill
    );
    setSkills(updatedSkills);
  };

  return (
    <div className="h-screen w-full p-8 bg-bg_gray overflow-auto">
      <div className="mb-5 ">
        <SkillBuilderSvg />
      </div>
      <InstructorTab Tab1={"Basic Info"} Tab2={"Videos"}  />
      <div className="flex justify-between flex-row max-plg:flex-col bg-bg_gray mt-5">
        <div className="flex flex-col gap-y-5">
          <div>
            <h3 className="text-lg font-medium mb-3 me-40">
              What is your educational background?
            </h3>
            {educationDetails.map((detail) => (
              <div className="mb-2" key={detail.id}>
                <input
                  type="text"
                  placeholder={detail.placeholder}
                  className="bg-bg_gray h-12 p-3 border-2 rounded w-full"
                  value={detail.value}
                  onChange={(e) => handleEducationChange(detail.id, e.target.value)}
                />
              </div>
            ))}
            <button className="text-blue font-medium" type="button" onClick={addEducationDetail}>
              + Add more Educational detail
            </button>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Add Your Skills</h3>
            {skills.map((skill) => (
              <div className="mb-2" key={skill.id}>
                <input
                  type="text"
                  placeholder={skill.placeholder}
                  className="bg-bg_gray h-12 p-3 border-2 rounded w-full"
                  value={skill.value}
                  onChange={(e) => handleSkillChange(skill.id, e.target.value)}
                />
              </div>
            ))}
            <button className="text-blue font-medium" type="button" onClick={addSkill}>
              + Add more Skills
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div>
            <h3 className="text-lg font-medium mb-3 max-plg:mt-5">
              Any professional teaching experience
            </h3>
            <input
              type="text"
              placeholder="Percentage %"
              className="bg-bg_gray h-12 p-3 border-2 rounded w-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 me-5">
              Who is your intended target audience for this course?
            </h3>
            <input
              type="text"
              placeholder="Percentage %"
              className="bg-bg_gray h-12 p-3 border-2 rounded w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <button
          type="submit"
          className=" justify-end bg-blue-700 text-white p-2 rounded px-5 max-sm:w-full mt-5"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default InstructorDetails;
