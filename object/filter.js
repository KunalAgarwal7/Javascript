const arr = [5, 10, 4, 4];

const a1 = arr.filter((x) => x % 5 === 0).map((x) => `${x} mg`);
const a2 = arr.filter((x) => x % 5 !== 0).map((x) => `${x}`);

console.log([...a1, ...a2]);
