const robot = {
  name: "Robo",
  greet(...messages) {
    return `${this.name}: ${messages.join(" ")}`;
  },
};

console.log(robot.greet("Hello", "World!"));
