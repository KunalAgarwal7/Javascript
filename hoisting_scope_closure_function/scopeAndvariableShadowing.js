let x = 10;
function checkScope() {
  let x = 20;
  console.log(x);
}
checkScope();
console.log(x);
