function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5));
