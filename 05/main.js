`use strict`;

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
		const arrayWithGrades = Object.values(this.subjectsAndGrades).reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
		const avg = arrayWithGrades.reduce((acc, curr) => acc + curr / arrayWithGrades.length, 0);
		console.log(`Student average: ${avg.toFixed(2)}`);
	}
	if (typeof subject !== 'undefined') {
		const subjectAvg = this.subjectsAndGrades[subject].reduce((acc, curr) => acc + curr / this.subjectsAndGrades[subject].length, 0);

		console.log(`Student average from ${subject}: ${subjectAvg.toFixed(2)}`);
	}
};

const firstStudent = new Student('bob', 'kevin');
firstStudent.addGrade('math', 5);
firstStudent.addGrade('math', 4);
firstStudent.addGrade('math', 4);
firstStudent.addGrade('english', 4);

firstStudent.addGrade('geo', 5);
firstStudent.addGrade('geo', 5);
firstStudent.getAvgGrade('math');

console.log(firstStudent);
