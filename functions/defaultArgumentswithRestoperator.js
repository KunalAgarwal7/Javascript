function multiply(factor = 2, ...numbers) {
  return numbers.map((num) => num * factor);
}

console.log(multiply(3, 1, 2, 3));
console.log(multiply(undefined, 4, 5));
