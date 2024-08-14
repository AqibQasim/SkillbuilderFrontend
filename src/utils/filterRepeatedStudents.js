export function filterRepeatedStudents(students) {
  return students?.reduce((acc, student) => {
    if (!acc.some((s) => s?.studentId === student?.studentId)) {
      acc.push(student);
    }
    return acc;
  }, []);
}
