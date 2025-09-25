function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add10 = createAdder(10);
console.log(add10(5));
console.log(add10(20));
