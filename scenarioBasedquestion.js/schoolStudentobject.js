function Student(name, course) {
  this.name = name;
  this.course = course;

  this.getInfo = function () {
    console.log("Student name:" + this.name);
    console.log("Student course:" + this.course);
    console.log();
  };
}

const Kunal = new Student("Kunal Agarwal", "MERN stack");
const Manas = new Student("Manas Dadhich", "JAVA full stack");

Kunal.getInfo();
Manas.getInfo();
