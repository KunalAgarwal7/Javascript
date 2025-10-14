function discount() {
  const data = [10, 20, 30, 40, 50, 60, 70];

  return function (day) {
    let a = day - 1;
    return data[a];
  };
};

const obj = discount();

console.log(obj(2));
console.log(obj(3));
console.log(obj(5));
console.log(obj(4));
console.log(obj(7));
