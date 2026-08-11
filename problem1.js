const students = "";
const studentIntroduction = (student) => {
  if (
    typeof student !== "object" ||
    student === null ||
    Array.isArray(student)
  ) {
    return "Invalid";
  }

  if (
    !("name" in student) ||
    !("age" in student) ||
    !("course" in student) ||
    typeof student.name !== "string" ||
    typeof student.age !== "number" ||
    student.age <= 0 ||
    typeof student.course !== "string"
  ) {
    return "Invalid";
  } else {
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
  }
};

console.log(studentIntroduction(students));
