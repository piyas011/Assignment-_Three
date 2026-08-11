// function bonusScore(scores) {
//     // Write your code here
// }

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

console.log(bonusScore([10, NaN, 10]));
