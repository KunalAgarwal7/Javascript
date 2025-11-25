const arr1 = [2, 3, 4, 5, 6, 44, 55, 64, 34, 56, 77];
const arr2 = [5, 7, 8, 4, 1, 2, 33, 44, 54, 87, 96, 14, 75];

let arr = arr1;
let ans = arr2.filter((x) => !arr1.includes(x));

arr = [...arr, ...ans];

console.log(arr);
