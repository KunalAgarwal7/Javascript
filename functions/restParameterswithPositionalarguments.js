function combine(first, second, ...rest) {
  return [first, second, ...rest];
}

console.log(combine(1, 2, 3, 4, 5));
console.log(combine("a", "b", "c"));
