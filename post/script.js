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

// Use .map() to convert each post into an object containing { postId, author: userId, title }.
let eleven = ans.map((obj) => ({
  postId: obj.id,
  author: obj.userId,
  title: obj.title,
}));
console.log(eleven);

// Use .map() to create an array of strings in the format "<title> (by user <userId>)".
let tweleve = ans.map(
  (obj) => `${obj.title} is written by user : ${obj.userId}`
);
console.log(tweleve);

// Use .map() to add a new property engagement to each post object, computed as likes + dislikes + views.
let thirteen = ans.map((obj) => ({
  ...obj,
  ["likes + dislikes + views"]:
    obj.reactions.likes + obj.views + obj.reactions.dislikes,
}));
console.log(thirteen);

// Use .map() to generate an array where each item is { id, tagCount } where tagCount is the number of tags.
let fourteen = ans.map((obj) => ({ id: obj.id, tagCount: obj.tags.length }));
console.log(fourteen);

// Use .map() to produce an array of posts with only id, title, and shortBody (which is first 50 characters of body + "...").
let fifteen = ans.map((obj) => ({
  id: obj.id,
  title: obj.title,
  shortBody: obj.body.slice(0, 51) + "...",
}));
console.log(fifteen);

// Use .map() to produce an array of posts with id, title, and popularity which is views / (likes + 1).
let sixteen = ans.map((obj) => ({
  id: obj.id,
  title: obj.title,
  popularity: obj.views / (obj.reactions.likes + 1),
}));
console.log(sixteen);

// Use .map() to convert each post’s tags to uppercase strings (so tags: ['crime','history'] becomes ['CRIME','HISTORY']).
let seventeen = ans.map((obj) => obj.tags.map((value) => value.toUpperCase()));
console.log(seventeen);

// Use .map() to create a new array of objects where each contains { id, title, isHighTraffic }, where isHighTraffic is true if views > 1000.
let eighteen = ans.map((obj) => ({
  id: obj.id,
  title: obj.title,
  isHighTraffic: obj.views > 1000,
}));
console.log(eighteen);

// Use .map() to produce objects with { id, author: userId, tagSummary } where tagSummary is a string of tags joined by ", ".
let nineteen = ans.map((obj) => ({
  id: obj.id,
  author: obj.userId,
  tagSummary: obj.tags.join(", "),
}));
console.log(nineteen);

// Use .map() to add a property netLikes = likes – dislikes for each post.
let twenty = ans.map((obj) => ({
  ...obj,
  netLikes: obj.reactions.likes - obj.reactions.dislikes,
}));
console.log(twenty);
