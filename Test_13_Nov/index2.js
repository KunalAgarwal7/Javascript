function abc() {
  const obj = {
    name: ["Kunal", "Manas", "Ajay", "Khushi"],
    empSalary: [30000, 40000, 50000, 60000],
    age: [22, 23, 24, 20],
    department: ["SDE", "Developer", "Cyber Security", "Developer"],
  };

  return function () {
    obj.empSalary = obj.empSalary.map((x) => x * 5);
    return obj;
  };
}

let ans = abc();
console.log(ans());
