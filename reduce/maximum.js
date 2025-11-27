const arr = [3, 6, 2, 8, 5];
let ans = arr.reduce((acc, curr) => (acc < curr ? (acc = curr) : acc), [0]);
console.log(ans);
