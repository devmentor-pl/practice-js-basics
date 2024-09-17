function Student(name, surname) {
  this.name = name;
  this.surname = surname;
  this.grade = {};
}
Student.prototype.addGrade = function (subject, mark) {
  if (!this.grade.hasOwnProperty(subject)) {
    this.grade[subject] = [];
  }
  this.grade[subject].push(mark);
};

Student.prototype.getAverageGrade = function (subject) {
  if (subject === undefined) {
    let count = 0;
    let sum = 0;
    for (let key in this.grade) {
      const grades = this.grade[key];

      for (let i = 1; i < grades.length; i++) {
        sum += grades[i];
        count++;
      }
    }
    const avgGeneral = sum / count;
    return avgGeneral;
  } else {
    const grades = this.grade[subject];
    const sum = grades.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const avg = sum / grades.length;
    return avg;
  }
};

const student = new Student('Jan', 'Kowalski');

student.addGrade('maths', 4);
student.addGrade('maths', 5);
student.addGrade('maths', 4);
student.addGrade('maths', 3);
student.addGrade('english', 3);
student.addGrade('english', 3);
student.addGrade('english', 3);
student.addGrade('polish', 4);
student.addGrade('polish', 3);
student.addGrade('polish', 3);
student.addGrade('polish', 6);

const avgMath = student.getAverageGrade('maths');
console.log(avgMath);
const avg = student.getAverageGrade();
console.log(`Ogólna średnia arytmetyczna: ${avg}`);

console.log(student);
