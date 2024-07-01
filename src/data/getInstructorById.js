export const instructor = {
  id: new Date(),
  name: "Zubair Alam",
  email: "zubairalam@gmail.com",
  image: "external url",
  location: "New York, USA",
  skills: ["QA Automation", "UI UX Design", "DevOps", "Data science"],
  introductionVideo:
    "can be a external link to the video or can be recieved within the responce as video source",
  topCourses: [
    // Recieve the minimun info on courses on initial responsecan or fetch the courses via id's
    {
      id: "course1id",
      title: "t",
      duration: "6 Months",
      reviews: { rate: 4, count: 878 },
    },
    {
      id: "course2id",
      title: "t",
      duration: "6 Months",
      reviews: { rate: 4, count: 468 },
    },
    {
      id: "course3id",
      title: "t",
      duration: "6 Months",
      reviews: { rate: 4, count: 138 },
    },
    {
      id: "course4id",
      title: "t",
      duration: "6 Months",
      reviews: { rate: 4, count: 78 },
    },
    // Or id's
    // { course1Id: 1 },
    // { course12d: 2 },
    // { course13d: 3 },
    // { course4Id: 4 },
  ],
};
