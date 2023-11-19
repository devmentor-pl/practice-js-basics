class Student {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.grade = {};
  }
  addGrade(subject, mark) {
    if (!this.grade.hasOwnProperty(subject)) {
      this.grade[subject] = [];
    }
    this.grade[subject].push(mark);
  }
  getAverageGrade(subject) {
    if (subject === undefined) {
      let avgSum = 0;
      let count = 0;
      for (const key in this.grade) {
        const grades = this.grade[key];
        const sum = grades.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        const avg = sum / grades.length;
        avgSum += avg;
        count++;
      }
      const avgGeneral = avgSum / count;
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
  }
}
const student = new Student('Jan', 'Kowalski');

student.addGrade('maths', 4);
student.addGrade('maths', 5);
student.addGrade('maths', 4);
student.addGrade('maths', 3);
student.addGrade('english', 3);
student.addGrade('english', 2);
student.addGrade('english', 3);
student.addGrade('polish', 4);
student.addGrade('polish', 3);
student.addGrade('polish', 3);
console.log(student);

const avgMath = student.getAverageGrade();
console.log(avgMath);
