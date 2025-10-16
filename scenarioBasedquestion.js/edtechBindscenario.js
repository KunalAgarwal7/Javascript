function announceCourse() {
  return `${this.name} taught ${this.subject} course.`;
}

const prajjal = { name: "Prajjal Dhar", subject: "MERN stack" };
const nikal = { name: "Nikal singh slaria", subject: "DSA" };
const kuldeep = { name: "Kuldeep sir", subject: "React" };

const getInfo1 = announceCourse.bind(prajjal);
console.log(getInfo1());

const getInfo2 = announceCourse.bind(nikal);
console.log(getInfo2());

const getInfo3 = announceCourse.bind(kuldeep);
console.log(getInfo3());
