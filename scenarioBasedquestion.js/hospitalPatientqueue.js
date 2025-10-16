function doctorData() {
  let data = [];

  return function patientName(...patientName) {
    data.push(...patientName);
    console.log(data);
  };
}

const Drkabita = doctorData();
const DrKuldeep = doctorData();

Drkabita("Kunal", "Nabeela", "Prajjal");
DrKuldeep("Priya", "Raman", "Nikhil");

