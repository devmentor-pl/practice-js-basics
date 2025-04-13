function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = {};
}

Student.prototype.addGrade = function (subjectName, grade) {
  const subject = subjectName;
  const grades = this.grades[subject];

  if (typeof this.grades[subject] === 'undefined') {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (gradeKey) {
  const subject = gradeKey;
  const grades = this.grades[subject];

  const initVal = 0;
  const sumWithInit = grades.reduce((acc, curr) => acc + curr, initVal);
  const avgSum = sumWithInit / grades.length;

  return avgSum;
};

Student.prototype.getAverageGrade = function () {
  const grades = Object.values(this.grades);
  const allGrades = [];

  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    for (let j = 0; j < grade.length; j++) {
      allGrades.push(grade[j]);
    }
  }

  const initVal = 0;
  const sumWithInit = allGrades.reduce((acc, curr) => acc + curr, initVal);
  const avgSum = sumWithInit / allGrades.length;

  return avgSum;
};

const student = new Student('Jan', 'Kowalski');

student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('maths');
const avg = student.getAverageGrade();

console.log(student);
// console.log(avgMath);
console.log(avg);
