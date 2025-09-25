function outerFunc(outerValue) {
  return function innerFunc(innerValue) {
    return outerValue + innerValue;
  };
}

const addFive = outerFunc(5);
console.log(addFive(10));
console.log(addFive(3));
