function Student(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
	if (typeof this.grades[subject] === 'undefined') {
		this.grades[subject] = [];
	}
	this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
	if (typeof subject === 'undefined') {
		return (
			[]
				.concat(...Object.values(this.grades))
				.reduce((total, item) => (total += item)) /
			[].concat(...Object.values(this.grades)).length
		);
	}
	const gradesList = this.grades[subject];
	return (
		gradesList.reduce((total, item) => (total += item)) / gradesList.length
	);
};

const student = new Student('Jakub', 'Pawłowski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
student.addGrade('english', 5);
student.addGrade('english', 5);

console.log(student);

const avgEnglish = student.getAverageGrade('english');
console.log(avgEnglish);

const avgMath = student.getAverageGrade('maths');
console.log(avgMath);

const avg = student.getAverageGrade();
console.log(avg);
