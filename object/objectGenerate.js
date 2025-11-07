const objMaker = (name, nvalue, age, nage) => ({
  [name]: nvalue,
  [age]: nage,
});

const obj = objMaker("name", "Kunal", "age", "25");
console.log(obj);
