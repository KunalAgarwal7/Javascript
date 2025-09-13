function outer() {
  let x = 10;
  return function () {
    return x++;
  };
}

const a = outer();
const b = outer();

console.log(a());
console.log(b());
console.log(a());
console.log(b());
