function bonusTracker(bonus) {
  const data = {};

  return function (employeeName, increment = 0) {
    if (!data[employeeName]) {
      data[employeeName] = 0;
    }

    data[employeeName] += increment;

    return `${employeeName} bonus is: ${data[employeeName]}`;
  };
};

const ans = bonusTracker();

console.log(ans("Kunal", 1000));
console.log(ans("Kunal", 1000));
console.log(ans("Kunal", 1000));
