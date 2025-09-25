let name = "Outside";

function outerFunction() {
  let name = "Inside";
  function innerFunction() {
    return name;
  }
  return innerFunction();
}

console.log(outerFunction());
