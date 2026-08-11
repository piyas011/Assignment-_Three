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
  let countHashtag = words.forEach((word) => {
    if (word.startsWith("#")) {
      countHashtags++;
    }
  });

  // Find all the longest tags and store them in an array
  let longestTagWords = words.filter((tag) => {
    if (tag.startsWith("#")) {
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

console.log(countHashtags("#"));
