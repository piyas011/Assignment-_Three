//Problem-01: Student Introduction Generator
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

//Problem-02: Active User Filter
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

//Problem-03: Trending Hashtag Counter
const countHashtags = (caption) => {
  //   console.log(caption);
  if (typeof caption !== "string") {
    return "Invalid";
  }
  let countHashtags = 0;
  let longestTag = "";

  // convert String to array formate;
  let words = caption.split(" ");

  const invalidHashtag = words.some((word) => {
    return word.startsWith("#") && word.length === 1;
  });
  if (invalidHashtag) {
    return "Invalid";
  }
  // hashtag count
  words.forEach((word) => {
    if (word.startsWith("#") && word.length > 1) {
      countHashtags++;
    }
  });

  // Find all the longest tags and store them in an array
  let longestTagWords = words.filter((tag) => {
    if (tag.startsWith("#") && tag[1] !== "#") {
      return tag;
    }
  });

  // Find the longest Hashtag in Word
  let lonHas = "";
  for (const word of longestTagWords) {
    if (lonHas.length < word.length) {
      lonHas = word;
    }
  }
  longestTag = lonHas.slice(1);
  return { hashtagCount: countHashtags, longestTag: longestTag };
};

//Problem-04: Bonus Score Calculator
const bonusScore = (scores) => {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  // Check the array inside the string
  const validCheck = scores.every((score) => {
    return Number.isFinite(score);
  });
  if (!validCheck) {
    return "Invalid";
  }

  //   Bonus Marks add
  const bonusMarkAdded = scores.map((score) => {
    return score + 10;
  });

  // Total sum of the array with bonus mark
  let totalMark = bonusMarkAdded.reduce((acc, mark) => {
    return acc + mark;
  }, 0);
  return totalMark;
};

//Problem-05: Debugging Challenge - AI Leaderboard Generator
const generateLeaderboard = (students) => {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  if (students.length === 0) {
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
      Number.isFinite(student.score)
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
