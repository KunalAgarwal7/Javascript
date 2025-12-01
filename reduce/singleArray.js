const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let ans = arr.reduce((acc, curr) => [...acc, ...curr], []);
console.log(ans);
