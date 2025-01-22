import ImageCssBg from "./ImageCssBg";
const reviews = [
  {
    name: "Zubair Alam",
    role: "Mentor",
    experience: [
      "10+ Years of average mentor experience.",
      "Access to live Q&A, workshops, and 1-on-1 sessions.",
    ],
  },
  {
    name: "John Doe",
    role: "Mentor",
    experience: [
      "10+ Years of average mentor experience.",
      "Access to live Q&A, workshops, and 1-on-1 sessions.",
    ],
  },
];

export const markups = reviews.map((review, i) => {
  const experienceList = review.experience
    .map((exp) => `<li>${exp}</li>`)
    .join("");
  return `<div style={{backgroundColor: "red"}} className="test-card bg-[rgba(255, 255, 255, 0.5)] w-max max-w-[400px] space-y-4 rounded-[1.25rem] p-4 shadow-[inset_0_0_0_2px_#F6EBEB] backdrop-blur-[7px]">
      <div className="person flex items-center justify-start gap-2">
        <div className="icon-wrapper relative size-12 rounded-full bg-[#F5F5F5]">
          <ImageCssBg src="/review_avatar.svg" alt="review avatar image" />
        </div>
        <div className="person-info">
          <h3 className="font-medium text-[#170D23]"> ${review.name} </h3>
          <p className="text-[#4A525D]">${review.role} </p>
        </div>
      </div>
      <ul className="text-xs font-medium text-[#000F27]">
      ${experienceList}
      </ul>
    </div>`;
});

export const globeInstructorCardMarkup = `<div style={{backgroundColor: "red"}} className="test-card bg-[rgba(255, 255, 255, 0.5)] w-max max-w-[400px] space-y-4 rounded-[1.25rem] p-4 shadow-[inset_0_0_0_2px_#F6EBEB] backdrop-blur-[7px]">
      <div className="person flex items-center justify-start gap-2">
        <div className="icon-wrapper relative size-12 rounded-full bg-[#F5F5F5]">
          <ImageCssBg src="/review_avatar.svg" alt="review avatar image" />
        </div>
        <div className="person-info">
          <h3 className="font-medium text-[#170D23]">Zubair Alam</h3>
          <p className="text-[#4A525D]">Mentor</p>
        </div>
      </div>
      <ul className="text-xs font-medium text-[#000F27]">
        <li>10+ Years of average mentor experience.</li>
        <li>Access to live Q&A, workshops, and 1-on-1 sessions.</li>
      </ul>
    </div>`;

// Above code is for 3d object html marker prop
function GlobeInstructorCard() {
  return (
    <div className="test-card bg-[rgba(255, 255, 255, 0.5)] w-max max-w-[400px] space-y-4 rounded-[1.25rem] p-4 shadow-[inset_0_0_0_2px_#F6EBEB] backdrop-blur-[7px]">
      <div className="person flex items-center justify-start gap-2">
        <div className="icon-wrapper relative size-12 rounded-full bg-[#F5F5F5]">
          <ImageCssBg src="/review_avatar.svg" alt="review avatar image" />
        </div>
        <div className="person-info">
          <h3 className="font-medium text-[#170D23]">Zubair Alam</h3>
          <p className="text-[#4A525D]">Mentor</p>
        </div>
      </div>
      <ul className="text-xs font-medium text-[#000F27]">
        <li>10+ Years of average mentor experience.</li>
        <li>Access to live Q&A, workshops, and 1-on-1 sessions.</li>
      </ul>
    </div>
  );
}

export default GlobeInstructorCard;
