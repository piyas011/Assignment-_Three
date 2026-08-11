// function filterActiveUsers(users) {
//     // Write your code here
// }

const userArray = [
  { name: "A", isActive: true },
  { name: "B", isActive: false },
  { name: "C", isActive: true },
  { name: "D", isActive: true },
  { name: "E", isActive: false },
  { name: "F", isActive: true },
  { name: "G", isActive: false },
  { name: "H", isActive: true },
];

const filterActiveUsers = (users) => {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  const checkProperty = users.every((user) => {
    // console.log(user);
    return (
      user !== null &&
      typeof user === "object" &&
      "isActive" in user &&
      "name" in user &&
      typeof user.isActive === "boolean"
    );
  });

  if (!checkProperty) {
    return "Invalid";
  }

  const activeUser = users.filter((user) => {
    if (user.isActive) {
      // console.log(user);
      return user;
    }
  });
  return activeUser;
};

console.log(filterActiveUsers([]));
