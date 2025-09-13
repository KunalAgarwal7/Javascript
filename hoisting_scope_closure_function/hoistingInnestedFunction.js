function outer() {
  console.log(a);
  var a = 10;
  function inner() {
    console.log(a);
    var a = 20;
  }
  inner();
}
outer();
