const objectMaker = (name, namev, age, agev, remarks, remarksv) => ({
  [name]: namev,
  [age]: agev,
  [remarks]: remarksv,
});

const obj = objectMaker("name", "Kunal", "age", "22", "remarks", "Bad person");

const ans = (obj) => {
  const arr = Object.entries(obj);

  let arr2 = arr.map(([key, value]) => [value, key]);

  const obj2 = Object.fromEntries(arr2);

  return obj2;
};

const a = ans(obj);
console.log(a);
