const obj = {
  name: "Kunal",
  age: 22,
  loan: 1000000,
};

const arr = Object.entries(obj);

const ans = arr.map(([key, value]) => [
  key[0].toUpperCase() + key.slice(1),
  value,
]);

const newObj = Object.fromEntries(ans);
console.log(newObj);
