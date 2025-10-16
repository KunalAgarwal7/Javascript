function employeeRecord(name, department, joining_date) {
  this.name = name;
  this.department = department;
  this.joining_date = joining_date;
}

const Kunal = new employeeRecord("Kunal Agarwal", "SDE", "20-sep-2025");
const Manas = new employeeRecord("Manas Dadhich", "Developer", "2-sep-2025");
const Ajay = new employeeRecord("Ajay Kumar", "Cyber security", "28-nov-2025");

console.log(Kunal);
console.log(Manas);
console.log(Ajay);
