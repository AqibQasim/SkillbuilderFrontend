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
    name: "Michael Lee",
    role: "Instructor",
    experience: [
      "7+ Years of experience in web development.",
      "Expert in front-end technologies like React and Angular.",
    ],
  },
  {
    name: "Mark Johnson",
    role: "Instructor",
    experience: [
      "5+ Years of data science experience.",
      "Specializes in machine learning and AI projects.",
    ],
  },

  {
    name: "Carlos Mendez",
    role: "Software Engineer",
    experience: [
      "6+ Years in software development.",
      "Focus on backend systems and cloud infrastructure.",
    ],
  },
  {
    name: "Aisha Khan",
    role: "Data Analyst",
    experience: [
      "8+ Years in data analysis and visualization.",
      "Proficient in Python and R for data manipulation.",
    ],
  },
  {
    name: "Yuki Tanaka",
    role: "UX Designer",
    experience: [
      "9+ Years in user experience design.",
      "Expert in creating intuitive and user-friendly interfaces.",
    ],
  },
];

export const markups = reviews.map((review, i) => {
  const experienceList = review.experience
    .map((exp) => `<li>${exp}</li>`)
    .join("");
  return `<div className="globe-instructor-details">
      <div>
        <div>
          <ImageCssBg src="/review_avatar.svg" alt="review avatar image" />
        </div>
        <div>
          <h3>${review.name}</h3>
          <p>${review.role}</p>
        </div>
      </div>
      <ul>
      ${experienceList}
      </ul>
    </div>`;
});

export const globeInstructorCardMarkup = `<div className="globe-instructor-details">
      <div>
        <div>
          <ImageCssBg src="/review_avatar.svg" alt="review avatar image" />
        </div>
        <div>
          <h3>Zubair Alam</h3>
          <p>Mentor</p>
        </div>
      </div>
      <ul>
        <li>10+ Years of average mentor experience.</li>
        <li>Access to live Q&A, workshops, and 1-on-1 sessions.</li>
      </ul>
    </div>`;

// Above code is for 3d object html marker prop
function GlobeInstructorCard() {
  return (
    <div className="globe-instructor-details">
      <div>
        <div>
          <ImageCssBg src="/review_avatar.svg" alt="review avatar image" />
        </div>
        <div>
          <h3>Zubair Alam</h3>
          <p>Mentor</p>
        </div>
      </div>
      <ul>
        <li>10+ Years of average mentor experience.</li>
        <li>Access to live Q&A, workshops, and 1-on-1 sessions.</li>
      </ul>
    </div>
  );
}

export default GlobeInstructorCard;
