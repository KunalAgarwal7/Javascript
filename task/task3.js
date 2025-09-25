function salaryTracker(name) {
  let s = [];
  return function (salary) {
    s.push(salary);
    return `${name} salary history: ${s}`;
  };
}

let salaryvar = salaryTracker("Kunal");
console.log(salaryvar(30000));
console.log(salaryvar(32000));
console.log(salaryvar(50000));
console.log(salaryvar(80000));
