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

Student.prototype.getAverageGrade = function (subject = null) {
  if (subject === null && Object.keys(this.grades).length === 0) {
    return "There are no grades till now saved for this student!";
  }
  if (subject === null) {
    const allGrades = [];
    for (let subject in this.grades) {
      allGrades.push(...this.grades[subject]);
    }
    return (
      allGrades.reduce((acc, val) => acc + val) / allGrades.length
    ).toFixed(1);
  }
  return (
    this.grades[subject].reduce((acc, val) => acc + val, 0) /
    this.grades[subject].length
  ).toFixed(1);
};

const Neil = new Student("Neil", "Gorski");
const avgNoGrades = Neil.getAverageGrade();

Neil.addGrade("maths", 5);
Neil.addGrade("maths", 2);
Neil.addGrade("maths", 1);
Neil.addGrade("english", 4);
Neil.addGrade("english", 1);
Neil.addGrade("english", 5);
Neil.addGrade("german", 5);
Neil.addGrade("german", 5);
Neil.addGrade("german", 4);

const avgMaths = Neil.getAverageGrade("maths");
const avgGerman = Neil.getAverageGrade("german");
const avgEnglish = Neil.getAverageGrade("english");
const avgOverAll = Neil.getAverageGrade();

console.log(avgNoGrades);
console.log(`The avarage grade for maths is ${avgMaths}.`);
console.log(`The avarage grade for german is ${avgGerman}.`);
console.log(`The avarage grade for english is ${avgEnglish}.`);
console.log(`The avarage grade over all is ${avgOverAll}.`);

console.log(Neil);
