"use strict";
const calAvg = (array, length) => {
    return array.reduce((acc, curr) => acc + curr / length, 0);
};
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subjectsAndGrades = {};
}
Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.subjectsAndGrades[subject] === 'undefined') {
        this.subjectsAndGrades[subject] = [];
    }
    this.subjectsAndGrades[subject].push(grade);
};
Student.prototype.getAvgGrade = function (subject) {
    if (typeof subject === 'undefined') {
        const previousArray = [];
        const arrayWithGrades = (Object.values(this.subjectsAndGrades).reduceRight((previousArray, currentValue) => previousArray.concat(currentValue), previousArray));
        const avg = calAvg(arrayWithGrades, arrayWithGrades.length);
        console.log(`Student average: ${avg.toFixed(2)}`);
    }
    if (typeof subject !== 'undefined') {
        const subjectAvg = calAvg(this.subjectsAndGrades[subject], this.subjectsAndGrades[subject].length);
        console.log(`Student average from ${subject}: ${subjectAvg.toFixed(2)}`);
    }
};
// @ts-ignore
const firstStudent = new Student('bob', 'kevin');
firstStudent.addGrade('math', 5);
firstStudent.addGrade('math', 5);
firstStudent.addGrade('english', 4);
firstStudent.addGrade('geo', 5);
firstStudent.addGrade('geo', 5);
firstStudent.getAvgGrade();
console.log(firstStudent);
