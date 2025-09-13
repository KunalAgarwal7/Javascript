let x = 10;
function outerFunc() {
  console.log(x);
}
function test() {
  let x = 20;

  outerFunc();
}
test();
