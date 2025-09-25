const userProfile = {
  name: "John",
  greet(greeting = "Hi") {
    return `${greeting}, ${this.name}`;
  },
};

console.log(userProfile.greet());
console.log(userProfile.greet("Hello"));
