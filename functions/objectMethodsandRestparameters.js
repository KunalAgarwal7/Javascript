const calculator = {
  add(...nums) {
    return nums.reduce((a, b) => a + b, 0);
  },
};

console.log(calculator.add(5, 10, 15));
