function createCounter(start) {
  let count = start;
  return function () {
    return ++count;
  };
}

const counter1 = createCounter(0);
const counter2 = createCounter(5);

console.log(counter1());
console.log(counter2());
