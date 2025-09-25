const user = {
  name: "Alice",
  getName: function () {
    return this.name;
  },
};

const getName = user.getName;
console.log(getName());
