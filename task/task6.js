function classRoom(className) {
  const teacher = "Prajjal Sir";
  return function markAttendence(student) {
    return `${student} marked present in ${className} by Teacher: ${teacher}`;
  };
}

let attend = classRoom("3rd Year");
console.log(attend("Kunal"));
