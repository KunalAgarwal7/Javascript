function studentDatafetcher(id) {
  id = id - 1;
  const arr = [
    { name: "Kunal", marks: 100 },
    { name: "Manas", marks: 90 },
    { name: "Shruti", marks: 10 },
    { name: "Divya", marks: 70 },
    { name: "Ajay", marks: 50 },
  ];

  return arr;
}

console.log(studentDatafetcher());
