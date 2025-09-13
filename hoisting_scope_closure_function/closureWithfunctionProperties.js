function counter() {
  counter.count = (counter.count || 0) + 1;
  return counter.count;
}

console.log(counter());
console.log(counter());
