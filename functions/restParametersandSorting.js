function sortNumbers(...numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortNumbers(10, 5, 2, 8));
