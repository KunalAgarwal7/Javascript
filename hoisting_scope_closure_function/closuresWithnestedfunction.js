function outerFunction() {
  var outerVar = "I'm outer";
  return function innerFunction() {
    console.log(outerVar);
  };
}
outerFunction()();
