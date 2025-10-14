function doctorData() {
  const data = {};

  return function patientName(doctorName, patientName = null) {
    if (!data[doctorName]) data[doctorName] = [];
    if (patientName) data[doctorName].push(patientName);

    return data[doctorName];
  };
};

const doctor = doctorData();

console.log(doctor("Dr.Kunal", "Nabeela"));
console.log(doctor("Dr.Mathura", "Manas"));
console.log(doctor("Dr.Rajesh", "Sheetal"));

console.log(doctor("Dr.Kunal", "Himanshu"));
