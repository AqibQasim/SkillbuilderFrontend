const tutors = [
  {
    lat: 38.299996,
    lng: 2.70257,
    pos: 2,
    tutor: true,
  },
  {
    // lat: 1.42,
    lat: -10.42,
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

// Gen random data
const N = 20;
export const randomArcsData = [...Array(N).keys()].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: "white",
}));

export const myArcsData = [
  {
    startLat: globeMarkersData[11].lat,
    startLng: globeMarkersData[11].lng,
    endLat: globeMarkersData[1].lat + 40,
    endLng: globeMarkersData[1].lng - 8,
    color: "#fff",
  },
  {
    startLat: globeMarkersData[6].lat,
    startLng: globeMarkersData[6].lng,
    endLat: globeMarkersData[6].lat - 2,
    endLng: globeMarkersData[6].lng - 100,
    color: "#fff",
  },
  {
    startLat: globeMarkersData[13].lat,
    startLng: globeMarkersData[13].lng,
    endLat: globeMarkersData[3].lat - 27,
    endLng: globeMarkersData[3].lng + 50,
    color: "#fff",
  },
];

// Combine the data correctly
// export const globeArcsData = [...myArcsData, ...randomArcsData];
