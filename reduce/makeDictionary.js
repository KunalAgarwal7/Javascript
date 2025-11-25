const data = [
  "art",
  "kitten",
  "kavya",
  "kayra",
  "avan",
  "banana",
  "briyani",
  "byunika",
  "avocardo",
  "blueberry",
  "cat",
  "cutie",
];

let res = data.reduce((obj, x) => {
  obj[x[0]] = obj[x[0]] ? [...obj[x[0]], x] : [x];
  return obj;
}, {});

console.log(res);
