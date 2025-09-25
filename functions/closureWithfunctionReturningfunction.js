function createPowerFunction(power) {
  return function (base) {
    return Math.pow(base, power);
  };
}

const square = createPowerFunction(2);
console.log(square(4));
