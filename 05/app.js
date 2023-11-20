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
Student.prototype.calculateAverage = function (grades) {
  const sum = grades.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const avg = sum / grades.length;
  return avg;
};
Student.prototype.getAverageGrade = function (subject) {
  if (subject === undefined) {
    let avgSum = 0;
    let count = 0;
    for (const key in this.grade) {
      const grades = this.grade[key];
      const avg = this.calculateAverage(grades);
      avgSum += avg;
      count++;
    }
    const avgGeneral = avgSum / count;
    return avgGeneral;
  } else {
    const grades = this.grade[subject];
    const avg = this.calculateAverage(grades);
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
console.log(`Ogólna średnia artmetyczna: ${avg}`);
