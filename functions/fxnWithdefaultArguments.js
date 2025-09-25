function greet(name = "Guest", message = "Welcome!") {
  return `${name}, ${message}`;
}

console.log(greet("Alice"));
console.log(greet());
