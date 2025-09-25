function displayInfo(name = "Anonymous", age = 18) {
  return `${name} is ${age} years old.`;
}

console.log(displayInfo(null, 25));
console.log(displayInfo(undefined, null));
