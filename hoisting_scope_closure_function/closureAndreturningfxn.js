function multiplierFactory(factor) {
  return function (num) {
    return num * factor;
  };
}
let double = multiplierFactory(2);
console.log(double(4));
