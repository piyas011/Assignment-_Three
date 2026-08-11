// function countHashtags(caption) {
// Write your code here…
// }
const captions = "Loving this weather today #sunny #vibes #weekend";

const countHashtags = (caption) => {
  //   console.log(caption);
  if (typeof caption !== "string") {
    return "Invalid";
  }
  let countHashtags = 0;
  let longestTag = "";

  // convert String to array formate;
  let words = caption.split(" ");
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

console.log(countHashtags(captions));
