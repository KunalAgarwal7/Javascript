function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

let double = createMultiplier(2);
console.log(double(4));
