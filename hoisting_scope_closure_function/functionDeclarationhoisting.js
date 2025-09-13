function hoistFunc() {
  console.log(foo());
  function foo() {
    return 10;
  }
}
hoistFunc();
