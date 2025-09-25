const person = {
  name: "Alex",
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};

console.log(person.greet());
