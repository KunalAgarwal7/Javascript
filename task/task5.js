const courseActions = {
  enroll: function (name) {
    return `${name} is enrolled in MERN stack develepment course.`;
  },
  completeCourse: function (name) {
    return `${name} has completed the course.`;
  },
  getCertificate: function (name) {
    return `${name} has received the certificate.`;
  },
};

console.log(courseActions.enroll("Kunal"));
console.log(courseActions.completeCourse("Kunal"));
console.log(courseActions.getCertificate("Kunal"));
