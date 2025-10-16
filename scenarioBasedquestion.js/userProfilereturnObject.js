function profile(name, role) {
  const obj = {
    name: this.name,
    role: this.role,
  };
  return obj;
}
const obj1 = { name: "Kunal", role: "SDE" };
const obj2 = { name: "Manas", role: "Developer" };
const obj3 = { name: "Ajay", role: "Cyber security" };

console.log(profile.call(obj1));
console.log(profile.call(obj2));
console.log(profile.call(obj3));
