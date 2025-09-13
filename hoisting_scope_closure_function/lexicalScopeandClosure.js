let a = 1;
function outerFunc() {
  let a = 2;
  return function () {
    console.log(a);
  };
}
let result = outerFunc();
result();
