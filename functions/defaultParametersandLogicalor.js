function getValue(value = 10) {
  return value || 20;
}

console.log(getValue(0));
console.log(getValue(15));
