function flat10(a) {
  a = a - a / 10;
  return a;
}

function festival(a) {
  a = a - a / 20;
  return a;
}

function loyalty(a) {
  a = a - a / 5;
  return a;
}

function bulkPurchase(a) {
  a = a - a / 4;
  return a;
}

let price = 100;
let arr = [flat10, festival, loyalty, bulkPurchase];

console.log("flat10 discount:", arr[0](price));
console.log("festival discount:", arr[1](price));
console.log("loyalty discount:", arr[2](price));
console.log("bulkPurchase discount:", arr[3](price));
