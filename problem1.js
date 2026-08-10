const students = "";
const studentIntroduction = (student) => {
  if (typeof student !== "object" || student === null) {
    return "Invalid";
  }

  if (!("name" in student) || !("age" in student) || !("course" in student)) {
    return "Invalid";
  } else {
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
  }
};

console.log(studentIntroduction(students));
