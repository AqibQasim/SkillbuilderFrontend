import CourseReview from "@/components/CourseReview";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Writereview from "@/components/Writereview";
import Reviews from "@/components/Reviews";

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
  //sanjay branch data

  const review_data = [
    { rating: 5 },
    { rating: 5 },
    { rating: 5 },
    { rating: 5 },
    { rating: 5 },
    { rating: 4 },
    { rating: 4 },
    { rating: 4 },
    { rating: 1 },
    { rating: 1 },
  ];

  let rating_counts = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };

  // total count of reviews
  const total_count = review_data.length;

  // sum of ratings
  let rating_sum = review_data.reduce((num, { rating }) => num + rating, 0);

  // total sum of 5 stars
  let total_sum = 5 * total_count;

  let result = (rating_sum / total_sum) * 5;
  result = Math.round((result + Number.EPSILON) * 100) / 100;

  // calculate percentages
  review_data.forEach((e) => {
    switch (e.rating) {
      case 5:
        rating_counts.five++;
        break;
      case 4:
        rating_counts.four++;
        break;
      case 3:
        rating_counts.three++;
        break;
      case 2:
        rating_counts.two++;
        break;
      case 1:
        rating_counts.one++;
        break;
    }
  });

  return (
    <main>
      {" "}
      <div className="w-full bg-bg_gray">
        <Navbar />
        <div>
          <Reviews rating={result} total={total_count} counts={rating_counts} />
        </div>
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
