function list(name) {
  const obj = {
    kurkure: ["10 rs", "20 rs", "30rs"],
    chips: ["15 rs", "25 rs", "35rs"],
    biscuits: ["5 rs", "20 rs"],
  };

  return obj[name];
}

console.log(list("kurkure"));
console.log(list("chips"));
console.log(list("biscuits"));
