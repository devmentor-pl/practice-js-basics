function Student(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.grades = {};
}
Student.prototype.addGrade = function (subject, grade) {
	if (!this.grades[subject]) {
		this.grades[subject] = [];
	}
	this.grades[subject].push(grade);
};
Student.prototype.countAverage = function (subject) {
	const calc = subject.reduce((acc, curr) => acc + curr) / subject.length
	return Number(calc.toFixed(2));
};
Student.prototype.getAverageGrade = function (subject) {
	let avgGradesArr = [];

	// dla konkretnego przedmiotu

	if (this.grades[subject] && this.grades[subject].length !== 0) {
		const subjectAverage = this.countAverage(this.grades[subject]);
		return subjectAverage;
	}

	// dla ogolnej sredniej
	if (!subject) {
		for (const subjectName in this.grades) {
			const grades = this.grades[subjectName];
			const mainAvgCounting = this.countAverage(grades);
			avgGradesArr.push(mainAvgCounting);
		}
	}
	const mainAvg = this.countAverage(avgGradesArr);
	return mainAvg;
};
const student = new Student('Jan', 'Kowalski');
const math = student.addGrade('math', 3);
const math2 = student.addGrade('math', 6);
const mat33 = student.addGrade('math', 4);
const a = student.addGrade('english', 2);
const a2 = student.addGrade('english', 4);
const avg = student.getAverageGrade();
const avg2 = student.getAverageGrade('math');
console.log('srednia ogolna', avg);
console.log('srednia dla przedmiotu math ', avg2);
