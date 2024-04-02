function Student(initFirstName, initLastName) {
  this.firstName = initFirstName;
  this.lastName = initLastName;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === 'undefined') {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function (subject) {
  if (typeof subject !== 'undefined') {
    const grades = this.grades[subject];
    if (!grades || grades.length === 0) {
      return 0;
    }
    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
      sum += grades[i];
    }
    return sum / grades.length;
  } else {
    var totalGrades = 0;
    var totalSubjects = 0;
    for (var subject in this.grades) {
      totalGrades += this.getAverageGrade(subject);
      totalSubjects++;
    }
    if (totalSubjects === 0) {
      return 0;
    }
    return totalGrades / totalSubjects;
  }
}

const student1 = new Student('John', 'Doe');
student1.addGrade('math', 4);
student1.addGrade('math', 5);
student1.addGrade('english', 3);
const avgMath = student1.getAverageGrade('math');
const avg = student1.getAverageGrade();

console.log(student1.grades);