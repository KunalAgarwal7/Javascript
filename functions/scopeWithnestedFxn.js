let outerVar = "I am outside";

function outer() {
  let outerVar = "I am inside";
  function inner() {
    return outerVar;
  }
  return inner();
}

console.log(outer());
