const nums = [1, 2, 3];

const words = nums.map((n) => {
  const map = {
    1: "one",
    2: "two",
    3: "three",
  };
  return map[n];
});

console.log(words);
