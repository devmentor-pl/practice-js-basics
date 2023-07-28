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
Student.prototype.getAverageGrade = function (subject) {
	let avgGradesArr = [];

	// dla konkretnego przedmiotu
	if (this.grades[subject] && this.grades[subject].length !== 0) {
		const count = this.grades[subject].reduce((acc, curr) => acc + curr) / this.grades[subject].length;
		return count;
	}

	// dla ogolnej sredniej
	if (!subject) {
		for (const subjectName in this.grades) {
			const grades = this.grades[subjectName];
			const avgGrades = grades.reduce((acc, curr) => acc + curr) / grades.length;
			avgGradesArr.push(avgGrades);
		}
	}
	const mainAvg = avgGradesArr.reduce((acc, curr) => acc + curr) / avgGradesArr.length;
	return mainAvg;
};

const student = new Student('Jan', 'Kowalski');
const math = student.addGrade('math', 3);
const math2 = student.addGrade('math', 6);
const mat33 = student.addGrade('math', 4);
const a = student.addGrade('english', 2);
const a2 = student.addGrade('english', 4);
const avg = student.getAverageGrade();
console.log(avg);

