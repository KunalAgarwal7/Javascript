const floorTo = (n, d) => Math.floor(n * 10 ** d) / 10 ** d;
const ceilTo = (n, d) => Math.ceil(n * 10 ** d) / 10 ** d;

console.log(floorTo(5.82163, 2));
console.log(ceilTo(5.82163, 2));
