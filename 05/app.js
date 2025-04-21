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

const getAvgCalc = function (gradesArray) {
  const initVal = 0;
  const sumWithInit = gradesArray.reduce((acc, curr) => acc + curr, initVal);
  const avgCalc = sumWithInit / gradesArray.length;

  return avgCalc;
};

Student.prototype.getAverageGrade = function (gradeKey) {
  const subject = gradeKey;
  const grades = this.grades[subject];

  const gradesVal = Object.values(this.grades);
  const allGrades = [];

  for (let i = 0; i < gradesVal.length; i++) {
    let grade = gradesVal[i];
    for (let j = 0; j < grade.length; j++) {
      allGrades.push(grade[j]);
    }
  }

  if (subject) {
    return grades;
  } else {
    return allGrades;
  }
};

const student = new Student('Jan', 'Kowalski');

student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
// const avgMath = student.getAverageGrade('maths');
const avg = student.getAverageGrade();
const weird = getAvgCalc(avg);

console.log(student);
// console.log(avgMath);
console.log(avg);
console.log(weird);
