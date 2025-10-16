function bonusTracker(bonus) {
  const data = {};

  return function (employeeName, increment = 0) {
    if (!data[employeeName]) {
      data[employeeName] = 0;
    }

    data[employeeName] += increment;

    return `${employeeName} bonus is: ${data[employeeName]}`;
  };
}

const Kunal = bonusTracker();
const Rajat = bonusTracker();

console.log(Kunal("Kunal", 1000));
console.log(Kunal("Kunal", 1000));
console.log(Rajat("Rajat", 1000));
console.log(Rajat("Rajat", 4000));
