function attendanceCounter() {
  const data = {};

  return function (className, totalPresent = null) {
    if (!data[className]) data[className] = 0;
    data[className] += totalPresent;

    return `In ${className} total present student is ${data[className]}`;
  };
};

const obj = attendanceCounter();

console.log(obj("MERN", 50));
console.log(obj("MERN", 50));
console.log(obj("Java", 40));
console.log(obj("DSA", 58));
