function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
};

const student = new Student("Jan", "Kowalski");
console.log(student);
student.addGrade("maths", 4);
student.addGrade("maths", 6);
student.addGrade("english", 3);
