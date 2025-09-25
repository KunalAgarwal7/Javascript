function hospital() {
  const hospitalName = "Fortis Hospital";
  return function admit(patientname) {
    return `${patientname} is admitted in ${hospitalName}`;
  };
}

console.log(hospital()("Alice"));
