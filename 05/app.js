function Student(initFirstName, initLastName) {
  this.firstName = initFirstName;
  this.lastName = initLastName;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
  if (!this.grades[subject]) {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (grade) {
  if (
    typeof grade !== 'undefined' &&
    typeof this.grades[grade] !== 'undefined'
  ) {
    const grades = this.grades[grade];
    if (grades.length === 0) {
      throw new Error(`Brak ocen z przedmiotu ${subject}`);
    }
    return calculateAverage(grades);
  } else {
    throw new Error(`Brak ocen z przedmiotu ${subject}`);
  }
};

Student.prototype.getAverageGradeAll = function () {
  const allGrades = [];
  for (const subject in this.grades) {
    allGrades.push(...this.grades[subject]);
  }

  if (allGrades.length === 0) {
    throw new Error('Brak ocen');
  }

  return calculateAverage(allGrades);
};

const student = new Student('Andrzej', 'Nowak');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
console.log(student);
console.log(student.getAverageGrade('english'));
console.log(student.getAverageGrade('maths'));
console.log(student.getAverageGradeAll());

function calculateAverage(grades) {
  const sum = grades.reduce((accumulator, current) => accumulator + current, 0);
  return parseFloat((sum / grades.length).toFixed(2));
}
