function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
  if (this.grades[subject]) {
    this.grades[subject].push(grade);
  } else {
    this.grades[subject] = [grade];
  }
};

Student.prototype.getAverageGrade = function (subject) {
  if (subject !== undefined) {
    return (
      this.grades[subject].reduce((acc, curr) => acc + curr, 0) /
      this.grades[subject].length
    );
  } else {
    const allGrades = Object.values(this.grades).flat();

    return allGrades.reduce((acc, curr) => acc + curr, 0) / allGrades.length;
  }
};

const student = new Student("Jan", "Kowalski");

student.addGrade("maths", 4);
student.addGrade("maths", 6);
student.addGrade("maths", 5);
student.addGrade("maths", 4);
student.addGrade("english", 3);

console.log(student);
console.log(student.getAverageGrade("maths"));
console.log(student.getAverageGrade("english"));
console.log(student.getAverageGrade());
