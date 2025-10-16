function doctorAvailability(day, time) {
  return `${this.name} available at ${time} on ${day}.`;
}

const Kunal = { name: "Dr.Kunal" };
const Manas = { name: "Dr.Manas" };
const Ajay = { name: "Dr.Ajay" };

console.log(doctorAvailability.apply(Kunal, ["Monday", "10 AM"]));
console.log(doctorAvailability.apply(Manas, ["Tuesday", "12 AM"]));
console.log(doctorAvailability.apply(Ajay, ["Sunday", "8 AM"]));
