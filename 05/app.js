function Student(getfirstName, getLastName) {
  this.firstName = getfirstName;
  this.lastName = getLastName;
  this.grades = {};
}

// dodawanie ocen
Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
};

// średnia
let sum = 0;
Student.prototype.getAverageSubjectGrade = function (subject, grade) {
  this.grades[subject].forEach(function (grade) {
    sum += grade;
    console.log(sum);
  });
};

const student = new Student("Tomasz", "Kopyra");
student.addGrade("Chemistry", 5);
student.addGrade("Chemistry", 4);
student.addGrade("Chemistry", 3);
student.addGrade("Maths", 3);

const chemistryAvg = student.getAverageSubjectGrade("Chemistry");
// const Avg = student.getAverageSubjectGrade();

console.log(student);
// console.log(chemistryAvg);
