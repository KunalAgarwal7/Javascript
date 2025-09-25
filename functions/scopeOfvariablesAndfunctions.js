var globalVar = "I am global";

function outerFunction() {
  var localVar = "I am local";
  return function innerFunction() {
    return globalVar + " and " + localVar;
  };
}

console.log(outerFunction()());
