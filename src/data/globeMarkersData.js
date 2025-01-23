const tutors = [
  {
    lat: 38.299996,
    lng: 2.70257,
    pos: 1,
    tutor: true,
  },
  {
    lat: 1.42,
    lng: -20.636377,
    pos: 1,
    tutor: true,
  },
  {
    lat: 25.206418231550687,
    lng: -50.04680121804626,
    pos: 0,
    tutor: true,
  },
];

const radius = 3.5;

// Function to generate students around a tutor
const generateStudents = (tutor, count = 4) => {
  const students = [];
  for (let i = 0; i < count; i++) {
    students.push({
      lat: tutor.lat + radius * Math.cos((i * Math.PI) / 2),
      lng: tutor.lng + radius * Math.sin((i * Math.PI) / 2),
      tutor: false,
      //   bgColor: ["yellow", "aqua", "green", "red"][i % 4],
      bgColor: "#f5f5f5",
    });
  }
  return students;
};

// Combine tutors and generated students into one markers array
export const globeMarkersData = tutors.reduce((acc, tutor) => {
  const students = generateStudents(tutor);
  return [...acc, tutor, ...students];
}, []);

// console.log(globeMarkersData);
