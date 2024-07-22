import React, { useState } from "react";
import SkillBuilderSvg from "@/components/SkillBuilderSvg";
import InstructorTab from "@/components/InstructorTab2";
import Button from "./Button";

const InstructorDetails = ({ onNext }) => {
  const [educationDetails, setEducationDetails] = useState([
    { id: 1, value: "", placeholder: "Percentage %" },
    { id: 2, value: "", placeholder: "" },
  ]);
  const [skills, setSkills] = useState([
    { id: 1, value: "", placeholder: "Percentage %" },
    { id: 2, value: "", placeholder: "" },
  ]);

  const addEducationDetail = () => {
    setEducationDetails((prevDetails) => [
      ...prevDetails,
      { id: prevDetails.length + 1, value: "", placeholder: "Percentage %" },
      { id: prevDetails.length + 2, value: "", placeholder: "" },
    ]);
  };

  const addSkill = () => {
    setSkills((prevSkills) => [
      ...prevSkills,
      { id: prevSkills.length + 1, value: "", placeholder: "Percentage %" },
      { id: prevSkills.length + 2, value: "", placeholder: "" },
    ]);
  };

  const handleEducationChange = (id, value) => {
    const updatedEducationDetails = educationDetails.map((detail) =>
      detail.id === id ? { ...detail, value } : detail,
    );
    setEducationDetails(updatedEducationDetails);
  };

  const handleSkillChange = (id, value) => {
    const updatedSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, value } : skill,
    );
    setSkills(updatedSkills);
  };

  return (
    <div className="w-full overflow-auto p-8">
      <form>
        <div className="mt-5 flex flex-row justify-between max-plg:flex-col">
          <div className="flex flex-col gap-y-5">
            <div>
              <h3 className="mb-3 me-40 text-lg font-medium">
                What is your educational background?
              </h3>
              {educationDetails.map((detail) => (
                <div className="mb-2" key={detail.id}>
                  <input
                    type="text"
                    placeholder={detail.placeholder}
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    value={detail.value}
                    onChange={(e) =>
                      handleEducationChange(detail.id, e.target.value)
                    }
                  />
                </div>
              ))}
              <button
                className="font-medium text-blue"
                type="button"
                onClick={addEducationDetail}
              >
                + Add more Educational detail
              </button>
            </div>
            <div>
              <h3 className="text-lg font-medium">Add Your Skills</h3>
              {skills.map((skill) => (
                <div className="mb-2" key={skill.id}>
                  <input
                    type="text"
                    placeholder={skill.placeholder}
                    className="h-12 w-full rounded border-2 bg-bg_gray p-3"
                    value={skill.value}
                    onChange={(e) =>
                      handleSkillChange(skill.id, e.target.value)
                    }
                  />
                </div>
              ))}
              <button
                className="font-medium text-blue"
                type="button"
                onClick={addSkill}
              >
                + Add more Skills
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <h3 className="mb-3 text-lg font-medium max-plg:mt-5">
                Any professional teaching experience
              </h3>
              <input
                type="text"
                placeholder="Percentage %"
                className="h-12 w-full rounded border-2 bg-bg_gray p-3"
              />
            </div>
            <div>
              <h3 className="me-5 text-lg font-medium">
                Who is your intended target audience for this course?
              </h3>
              <input
                type="text"
                placeholder="Percentage %"
                className="h-12 w-full rounded border-2 bg-bg_gray p-3"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="flex justify-end">
          <Button type="button" className="!px-10" onClick={onNext}>
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InstructorDetails;

// import React, { useState } from "react";
// import SkillBuilderSvg from "@/components/SkillBuilderSvg";
// import InstructorTab from "@/components/InstructorTab2";
// import Button from "./Button";

// const InstructorDetails = ({ onNext }) => {
//   const [educationDetails, setEducationDetails] = useState([
//     { id: 1, value: "", placeholder: "Percentage %" },
//     { id: 2, value: "", placeholder: "" },
//   ]);
//   const [skills, setSkills] = useState([
//     { id: 1, value: "", placeholder: "Percentage %" },
//     { id: 2, value: "", placeholder: "" },
//   ]);

//   const addEducationDetail = () => {
//     setEducationDetails((prevDetails) => [
//       ...prevDetails,
//       { id: prevDetails.length + 1, value: "", placeholder: "Percentage %" },
//       { id: prevDetails.length + 2, value: "", placeholder: "" },
//     ]);
//   };

//   const addSkill = () => {
//     setSkills((prevSkills) => [
//       ...prevSkills,
//       { id: prevSkills.length + 1, value: "", placeholder: "Percentage %" },
//       { id: prevSkills.length + 2, value: "", placeholder: "" },
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

//   return (
//     <>
//       <div className="w-full overflow-auto p-8">
//         {/* <div className="mb-5 ">
//         <SkillBuilderSvg />
//       </div> */}
//         {/* <InstructorTab Tab1={"Basic Info"} Tab2={"Videos"}  /> */}
//         <div className="mt-5 flex flex-row justify-between max-plg:flex-col">
//           <div className="flex flex-col gap-y-5">
//             <div>
//               <h3 className="mb-3 me-40 text-lg font-medium">
//                 What is your educational background?
//               </h3>
//               {educationDetails.map((detail) => (
//                 <div className="mb-2" key={detail.id}>
//                   <input
//                     type="text"
//                     placeholder={detail.placeholder}
//                     className="h-12 w-full rounded border-2 bg-bg_gray p-3"
//                     value={detail.value}
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
//                 Any professional teaching experience
//               </h3>
//               <input
//                 type="text"
//                 placeholder="Percentage %"
//                 className="h-12 w-full rounded border-2 bg-bg_gray p-3"
//               />
//             </div>
//             <div>
//               <h3 className="me-5 text-lg font-medium">
//                 Who is your intended target audience for this course?
//               </h3>
//               <input
//                 type="text"
//                 placeholder="Percentage %"
//                 className="h-12 w-full rounded border-2 bg-bg_gray p-3"
//               />
//             </div>
//           </div>
//         </div>
//         <br /> <br />
//         <div className="flex justify-end">
//           {/* <button
//           type="submit"
//           className=" justify-end bg-blue-700 text-white p-2 rounded px-5 max-sm:w-full mt-5"
//         >
//           Continue
//         </button> */}
//           <Button className="!px-10" onClick={onNext}>
//             Continue
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InstructorDetails;
