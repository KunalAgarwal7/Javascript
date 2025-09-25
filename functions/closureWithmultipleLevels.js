function outer() {
  let outerVar = "Outer";
  return function middle() {
    let middleVar = "Middle";
    return function inner() {
      return `${outerVar} ${middleVar}`;
    };
  };
}

console.log(outer()()());
