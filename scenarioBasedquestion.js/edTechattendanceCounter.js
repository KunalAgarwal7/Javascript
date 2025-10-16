function attendanceCounter(classname) {
  const obj = {};

  return function (total) {
    if (!obj[classname]) obj[classname] = 0;
    obj[classname] += total;

    return `Total ${obj[classname]} students in ${classname}.`;
  };
}

const MERN = attendanceCounter("MERN");
const DSA = attendanceCounter("DSA");
const JAVA = attendanceCounter("JAVA");

console.log(MERN(80));
console.log(DSA(40));
console.log(JAVA(50));
console.log(JAVA(50));