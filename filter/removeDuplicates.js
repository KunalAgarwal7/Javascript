const arr = [1, 2, 3, 1, 2, 4, 5];
let unique = [];

arr.filter((v) => (!unique.includes(v) ? (unique = [...unique, v]) : unique));

console.log(unique);
