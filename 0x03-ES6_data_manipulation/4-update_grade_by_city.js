export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.filter((student) => student.location.city === city)
    .map((student) => {
      const newGrade = newGrades.filter((grade) => grade.studentId === student.id);
      const grade = newGrade.length === 0 ? { grade: 'N/A' } : newGrade[0];
      return { ...student, ...grade };
    });
}
