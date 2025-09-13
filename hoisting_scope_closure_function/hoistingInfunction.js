function testHoist() {
  console.log(foo);
  var foo = 10;
}
testHoist();
