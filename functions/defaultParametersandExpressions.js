function calculateTotal(price, tax = price * 0.05) {
  return price + tax;
}

console.log(calculateTotal(100));
console.log(calculateTotal(200, 30));
