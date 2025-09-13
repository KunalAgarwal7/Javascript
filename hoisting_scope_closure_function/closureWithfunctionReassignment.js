let count = 0;
function counter() {
  count++;
  return count;
}

let c1 = counter;
let c2 = counter;

console.log(c1());
console.log(c2());
console.log(c1());
