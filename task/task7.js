const patients = [
  {
    id: 1,
    name: "Ravi",
    critical: true,
    medicalCondition: {
      diagnosis: "Severe Pneumonia",
      symptoms: ["Fever", "Cough"],
      vitals: "Oxygen Level: 82%",
    },
  },
  {
    id: 2,
    name: "Prajjal",
    critical: false,
    medicalCondition: {
      diagnosis: "Seasonal Allergy",
      symptoms: ["Sneezing", "Watery eyes"],
      vitals: "Oxygen Level: 97%",
    },
  },
  {
    id: 3,
    name: "Roshni",
    critical: false,
    medicalCondition: {
      diagnosis: "Migraine",
      symptoms: ["Headache", "Nausea"],
      vitals: "Oxygen Level: 98%",
    },
  },
  {
    id: 4,
    name: "Neha",
    critical: false,
  },
  {
    id: 5,
    name: "Kajal",
    critical: false,
  },
  {
    id: 6,
    name: "Pooja",
    critical: false,
  },
  {
    id: 7,
    name: "Rajat",
    critical: false,
  },
  {
    id: 8,
    name: "Sushil",
    critical: false,
  },
];
let idArray = [];

patients.forEach((patient) => {
  if (!patient.medicalCondition) {
    idArray = [...idArray, patient.id];
  }
});

const medicalConditions = [
  {
    diagnosis: "Gastric Reflux",
    symptoms: ["Burning sensation", "Chest discomfort"],
    vitals: "Oxygen Level: 99%",
  },
  {
    diagnosis: "Migraine",
    symptoms: ["Headache", "Nausea"],
    vitals: "Oxygen Level: 98%",
  },
  {
    diagnosis: "Seasonal Allergy",
    symptoms: ["Sneezing", "Watery eyes"],
    vitals: "Oxygen Level: 97%",
  },
  {
    diagnosis: "Asthma Attack",
    symptoms: ["Shortness of breath", "Wheezing"],
    vitals: "Oxygen Level: 88%",
  },
  {
    diagnosis: "High Fever",
    symptoms: ["Body ache", "Chills"],
    vitals: "Temperature: 102°F",
  },
];

const idWithmedicalConditions = medicalConditions.map(
  (medicalCondition, idx) => ({
    ["id"]: idArray[idx],
    ...medicalCondition,
  })
);

const updatedMedicalconditions = patients.map((pat) => {
  const match = idWithmedicalConditions.find((x) => x.id === pat.id);

  if (match) {
    const { id, ...medicalConditionOnly } = match;
    return { ...pat, medicalCondition: medicalConditionOnly };
  }

  return pat;
});

console.log(updatedMedicalconditions);