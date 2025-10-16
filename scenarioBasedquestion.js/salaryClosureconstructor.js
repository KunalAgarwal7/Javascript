function salary(name, basesalary) {
  let base = basesalary;
  this.name = name;
  this.calculatePay = function (bonus) {
    return `${this.name} : ${base + bonus} `;
  };
}

const emp1 = new salary("Kunal", 40000);
console.log(emp1.calculatePay(10000));

const emp2 = new salary("Manas", 30000);
console.log(emp2.calculatePay(5000));
