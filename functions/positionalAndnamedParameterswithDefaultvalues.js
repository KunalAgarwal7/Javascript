function displayUser(name = "Unknown", age = 18) {
  return `${name} is ${age} years old`;
}

console.log(displayUser("John", 25));
console.log(displayUser(undefined, 30));
