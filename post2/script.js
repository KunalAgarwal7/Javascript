import fetchData from "./fetchAPI.js";
const one = fetchData.map((data) => ({
  id: data.id,
  email: data.email,
  phone: data.phone,
}));

let department = fetchData.map((obj) => obj.company.department);
let freqOfdept = department.reduce((acc, curr) => {
  return { ...acc, [curr]: acc[curr] + 1 || 1 };
}, {});
console.log(freqOfdept);
