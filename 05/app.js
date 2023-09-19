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
    const sum = grades.reduce((accumulator, current) => accumulator + current);
    return sum / grades.length;
  } else {
    return 0;
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

  const sum = allGrades.reduce((accumulator, current) => accumulator + current);
  return parseFloat((sum / allGrades.length).toFixed(2));
};

const student = new Student('Andrzej', 'Nowak');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
console.log(student);
console.log(student.getAverageGrade('english'));
console.log(student.getAverageGrade('maths'));
console.log(student.getAverageGradeAll());
