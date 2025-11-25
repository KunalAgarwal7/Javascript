const obj = {
  name: "Kunal Agarwal",
  age: 22,
  class: "BCA",
};

function abc(obj) {
    
  const arr = Object.entries(obj);

  const arr2 = arr.map(([key, value]) => [value, key]);

  const objAns = Object.fromEntries(arr2);

  return objAns;
}

let ans = abc(obj);
console.log(ans);
