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

Student.prototype.getAverageGrade = function (subject) {
  let gradesArr = [];
  if (typeof subject !== "undefined") {
    let gradesArr = this.grades[subject];
    let sum = gradesArr.reduce(function (x, y) {
      return x + y;
    }, 0);
    return (sum / gradesArr.length).toFixed(2);
  }
  if (typeof subject === "undefined") {
    for (const val in this.grades) {
      this.grades[val].forEach(function (grade) {
        gradesArr.push(grade);
      });
    }
    sum = gradesArr.reduce(function (x, y) {
      return x + y;
    }, 0);
    return (sum / gradesArr.length).toFixed(2);
  }
};

const student = new Student("Jan", "Kowalski");
student.addGrade("maths", 4);
student.addGrade("maths", 6);
student.addGrade("english", 3);
const avgMath = student.getAverageGrade("maths"); // 5
const avg = student.getAverageGrade(); // 4.33
console.log(avgMath);
console.log(avg);
