// export function filterRepeatedStudents(students) {
//   return students?.reduce((acc, student) => {
//     if (!acc.some((s) => s?.studentId === student?.studentId)) {
//       acc.push(student);
//     }
//     return acc;
//   }, []);
// }

export function filterRepeatedStudents(students) {
  if (!Array.isArray(students)) {
    console.error("Expected an array but received:", typeof students);
    return [];
  }

  return students.reduce((acc, student) => {
    if (!acc.some((s) => s?.studentId === student?.studentId)) {
      acc.push(student);
    }
    return acc;
  }, []);
}

export function getUniqueStudents(students = []) {
  const seen = new Set();
  return students.filter((student) => {
    if (!student || typeof student.id === "undefined") return false;
    const id = student.id.toString();
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}
