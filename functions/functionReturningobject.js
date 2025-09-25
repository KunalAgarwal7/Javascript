function createUser(name, age) {
  return {
    name,
    age,
  };
}

const user = createUser("Alice", 25);
console.log(user);
