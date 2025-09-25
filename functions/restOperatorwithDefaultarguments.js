function listNumbers(first, second = 2, ...rest) {
  return rest;
}

console.log(listNumbers(1, 3, 4, 5, 6));
console.log(listNumbers(1));
