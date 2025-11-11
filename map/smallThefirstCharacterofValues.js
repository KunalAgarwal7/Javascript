const obj = {
  name: ["Kunal", "Manas", "Ajay", "Khushi", "Divya", "Jitendra"],
  age: [20, 30, 54, 23, 56, 23, 55],
  address: ["Jaipur", "Ajmer", "Kota", "Phulera", "Bundi", "Pali", "Bhilwara"],
};

const newObj = {
  name: obj.name.map((x) => x.toLowerCase()),
  age: obj.age,
  address: obj.address.map((x) => x.toLowerCase()),
};
console.log(newObj);
