const students = [
  { name: "Rafi", score: 90 },
  { name: "Sadia", score: 65 },
  { name: "Karim", score: 85 },
  { name: "Nafis", score: 75 },
  { name: "Safij", score: 75 },
  { name: "Romi", score: 99 },
  { name: "Ratul", score: 75 },
  { name: "Nisat", score: 100 },
];

const generateLeaderboard = (students) => {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  if (students.length == 0) {
    return "Invalid";
  }

  // object valid check
  const validStudents = students.every((student) => {
    return (
      student !== null &&
      typeof student === "object" &&
      "name" in student &&
      "score" in student &&
      typeof student.name === "string" &&
      typeof student.score === "number"
    );
  });
  if (!validStudents) {
    return "Invalid";
  }

  const qualified = students.filter((student) => {
    return student.score >= 70;
  });

  const names = qualified.map(({ name }) => {
    return name.toUpperCase();
  });

  return names.slice(0, 3);
};

console.log(
  generateLeaderboard([
    { name: "Piyas", score: 0 },
    { name: "Rafi", score: 80 },
    { name: "Karim", score: 90 },
  ]),
);
