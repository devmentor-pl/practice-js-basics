function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }

  this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
  const calcAverage = (grades) => {
    if (!grades || grades.length === 0) throw new Error("No grades found!");
    return grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
  };

  if (typeof subject === "undefined") {
    const grades = Object.values(this.grades).flat();
    return Number(calcAverage(grades).toFixed(2));
  }

  return calcAverage(this.grades[subject]);
};

const student = new Student("Jan", "Kowalski");
student.addGrade("maths", 4);
student.addGrade("maths", 6);
student.addGrade("english", 3);
const avgMath = student.getAverageGrade("maths");
const avg = student.getAverageGrade();

console.log(student);
console.log(avgMath);
console.log(avg);
