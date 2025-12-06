import ans from "./fetchData.js";
console.log(ans);

// Using .find(), retrieve the post whose id is 25.
let one = ans.find((id) => id.id === 25);
console.log(one);

// Use .filter() to get all posts authored by userId 10.
let two = ans.filter((obj) => obj.userId === 10);
console.log(two);

// Use .filter() to find all posts that have the tag "crime" in their tags array.
let three = ans.filter((obj) => obj.tags.includes("crime"));
console.log(three);

// Use .filter() to find all posts that have more than 5000 views.
let four = ans.filter((obj) => obj.views > 5000);
console.log(four);

// Use .findIndex() to determine the index of the first post whose title starts with "The market".
let five = ans.findIndex((obj) => obj.title?.startsWith("The market"));
console.log(five);

// Use .find() to find a post whose reactions.likes value is exactly 127 (if any).
let six = ans.find((obj) => obj.reactions.likes === 127);
console.log(six);

// Use .filter() to get posts where the length of body (string length) is under 100 characters.
let seven = ans.filter((obj) => obj.body.length < 100);
console.log(seven);

// Use .filter() to get posts whose tags array contains both "history" and "american".
let eight = ans.filter(
  (obj) => obj.tags.includes("american") && obj.tags.includes("history")
);
console.log(eight);

// Use .filter() to get posts that have more dislikes than likes (in reactions).
let nine = ans.filter((obj) => obj.reactions.dislikes > obj.reactions.likes);
console.log(nine);

// Use .find() to locate a post whose views field is less than the number of likes in reactions.
let ten = ans.find((obj) => obj.views < obj.reactions?.likes);
console.log(ten);
