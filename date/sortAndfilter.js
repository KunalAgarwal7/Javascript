const data = [
  { id: 1, name: "Kunal", registeredOn: "2025-09-20" },
  { id: 2, name: "Manas", registeredOn: "2025-07-05" },
  { id: 3, name: "Ajay", registeredOn: "2025-11-08" },
  { id: 4, name: "Khushi", registeredOn: "2025-09-29" },
  { id: 5, name: "Jitendra", registeredOn: "2025-12-10" },
  { id: 6, name: "Shubaham", registeredOn: "2025-02-15" },
];

let ans = data.sort((a, b) => a.registeredOn.localeCompare(b.registeredOn));
console.log(ans);

let ans2 = data.filter((x) => x.registeredOn > "2025-09-19");
console.log(ans2);
