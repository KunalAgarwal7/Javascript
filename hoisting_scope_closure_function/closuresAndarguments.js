function createFunction() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const increment = createFunction();
console.log(increment());
console.log(increment());
