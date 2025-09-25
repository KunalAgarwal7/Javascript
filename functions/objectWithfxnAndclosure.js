const counter = {
  count: 0,
  increment() {
    return ++this.count;
  },
  reset() {
    return (this.count = 0);
  },
};

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());
