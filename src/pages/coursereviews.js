import CourseReview from "@/components/CourseReview";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Writereview from "@/components/Writereview";
const coursereviews = () => {
  let arrayofobjects = [
    {
      name: "Taha",
      rating: "3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus alias fugiat eum accusantium dolores, incidunt repellendus velit nihil vero! Aut velit molestiae repudiandae animi. Illo, facere hic sit enim adipisci neque, quam harum nihil velit ducimus accusamus perferendis perspiciatis odio, nulla voluptas laborum. Pariatur.",
    },
    {
      name: "Zubair Alam",
      rating: "4",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores incidunt sapiente vel nobis enim voluptate officiis iusto perspiciatis quam. Officiis veritatis maxime similique nesciunt officia distinctio magnam saepe unde dolorum voluptatum autem consequatur ullam quas magni, odit sequi nihil quo placeat laboriosam quia repellat? Ducimus.",
    },
    {
      name: "Rayyan Sajid",
      rating: "5",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores incidunt sapiente vel nobis enim voluptate officiis iusto perspiciatis quam. Officiis veritatis maxime similique nesciunt officia distinctio magnam saepe unde dolorum voluptatum autem consequatur ullam quas magni, odit sequi nihil quo placeat laboriosam quia repellat? Ducimus.",
    },
    {
      name: "Ahmad zaman",
      rating: "2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores incidunt sapiente vel nobis enim voluptate officiis iusto perspiciatis quam. Officiis veritatis maxime similique nesciunt officia distinctio magnam saepe unde dolorum voluptatum autem consequatur ullam quas magni, odit sequi nihil quo placeat laboriosam quia repellat? Ducimus.",
    },
    {
      name: "Sanjay ",
      rating: "0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores incidunt sapiente vel nobis enim voluptate officiis iusto perspiciatis quam. Officiis veritatis maxime similique nesciunt officia distinctio magnam saepe unde dolorum voluptatum autem consequatur ullam quas magni, odit sequi nihil quo placeat laboriosam quia repellat? Ducimus.",
    },
  ];

  return (
    <main>
      {" "}
      <div className="w-full bg-bg_gray">
        <Navbar />
        <Writereview />
        {arrayofobjects.map((i) => (
          <CourseReview key={i.name} {...i} />
        ))}
        <Footer />
      </div>
    </main>
  );
};

export default coursereviews;
