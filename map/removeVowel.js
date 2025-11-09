const fruits = ["apple", "banana"];

const noVowels = fruits.map((str) => str.replace(/[aeiou]/g, ""));

console.log(noVowels);

