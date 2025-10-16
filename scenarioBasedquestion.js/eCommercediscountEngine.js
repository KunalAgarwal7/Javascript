function discount() {
  return {
    tenpercentdiscount: function (val) {
      return val - val * 0.1;
    },
    twentypercentdiscount: function (val) {
      return val - val * 0.2;
    },
    thirtypercentdiscount: function (val) {
      return val - val * 0.3;
    },
  };
}
let percentage1 = discount();

console.log(percentage1.tenpercentdiscount(500));
console.log(percentage1.twentypercentdiscount(500));
console.log(percentage1.thirtypercentdiscount(500));
