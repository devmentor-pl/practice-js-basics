class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
  }

  addGrade(subject, ...grade) {
    if (typeof this.grades[subject] === "undefined") {
      this.grades[subject] = [];
    }
    this.grades[subject].push(...grade);
  }

  getAverageGrade(subject) {
    if (typeof subject !== "undefined") {
      const grades = this.grades[subject];
      const avg = grades.reduce((a, b) => {
        return a + b;
      }, 0);
      return avg / grades.length;
    } else {
      const grades = [];

      for (const key in this.grades) {
        const gradesArr = this.grades[key];

        gradesArr.forEach((item) => {
          grades.push(item);
        });
      }
      const avg = grades.reduce((a, b) => {
        return a + b;
      }, 0);
      return avg / grades.length;
    }
  }
}

const student = new Student("Jan", "Kowalski");
student.addGrade("math", 4);
student.addGrade("math", 6);
student.addGrade("english", 3);
const avgMath = student.getAverageGrade("math"); // 5
const avg = student.getAverageGrade(); // 4.33

// console.log(student.grades.math);
// console.log(student.grades);
// console.log(avgMath);
console.log(avg);
