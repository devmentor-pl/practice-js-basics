import Validation from "./validation.js";
import { getAverageGrade } from "./utils.js";

function Student(fName, lName) {
  this.name = fName;
  this.surname = lName;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
  Validation.setValue(subject).isStringType();
  Validation.setValue(grade).isNumberType();
  const isGradeValid = grade > 0 && grade < 7;
  if (!isGradeValid) throw new Error("grade must be in range 1-6");

  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }

  this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
  const allGrades = [];

  if (typeof subject === "undefined") {
    for (const subject in this.grades) allGrades.push(...this.grades[subject]);
    const avgAllGrades = getAverageGrade(allGrades);
    return avgAllGrades.toFixed(1);
  }

  Validation.setValue(subject).isStringType();
  const isSubjectValid = typeof this.grades[subject] !== "undefined";
  if (!isSubjectValid) throw new Error("subject not in db");

  allGrades.push(...this.grades[subject]);
  const avgGradesSingleSubject = getAverageGrade(allGrades);
  return avgGradesSingleSubject.toFixed(1);
};

const zenek = new Student("Zenon", "Zenonkiewicz");
zenek.addGrade("maths", 5);
zenek.addGrade("maths", 5);
zenek.addGrade("maths", 2);
zenek.addGrade("polish", 2);
zenek.getAverageGrade("maths");

// console.log(zenek);
