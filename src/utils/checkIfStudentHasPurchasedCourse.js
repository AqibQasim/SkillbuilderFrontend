const checkIfStudentHasPurchasedCourse = async (course, student_id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/is-course-purchased?course_id=${course.id}&student_id=${student_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (response.ok) {
    return true;
  }

  return false;
};

export default checkIfStudentHasPurchasedCourse;
