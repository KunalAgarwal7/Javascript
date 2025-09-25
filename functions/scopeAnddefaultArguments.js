let x = 10;

function testScope(a, b = x) {
  let x = 20;
  return a + b;
}

console.log(testScope(5));
