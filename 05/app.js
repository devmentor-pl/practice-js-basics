function Student(firstName, lastname) {
  this.firstName = firstName;
  this.lastName = lastname;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grades) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }
  return `${this.grades[subject]} ${this.grades[subject].push(grades)}`;
};

Student.prototype.getAverageGrade = function (subject) {
  if (subject !== undefined) {
    let subject = "math";
    let grades = this.grades[subject];
    let sum = 0;
    grades.forEach(function (num) {
      sum += num;
    });
    const avgMath = sum / grades.length;
    return avgMath;
  } else {
    const arrEn = this.grades.english;
    const arrMath = this.grades.math;
    const arrTotalGrades = arrEn.concat(arrMath);
    let total = 0;
    arrTotalGrades.forEach(function (num) {
      total += num;
    });
    const average = total / arrTotalGrades.length
    return average;
  }
};
const student1 = new Student("Adam", "Kowalski");

student1.addGrade("math", 3);
student1.addGrade("english", 4);
student1.addGrade("english", 6);
student1.addGrade("math", 6);
student1.addGrade("math", 2);

const avgMath = student1.getAverageGrade("math");
const avg = student1.getAverageGrade();


