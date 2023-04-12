function Student(fName, lName) {
	this.firstName = fName;
	this.lastName = lName;
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
		const grades = [];
		for (const grade in this.grades) {
			const arr = this.grades[grade];
			arr.forEach(function (item) {
				grades.push(item);
			});
		}

		return this.avg(grades);
	}
	if (typeof this.grades[subject] === 'undefined') {
		return 0;
	}
	const grades = this.grades[subject];
	return this.avg(grades);
};

Student.prototype.avg = function (arr) {
	if (arr.length === 0) {
		return 0;
	}
	const sum = arr.reduce(function (acc, curr) {
		return acc + curr;
	}, 0);
	return sum / arr.length;
};
const student = new Student('Jan', 'Kowalski');
student.addGrade('math', 4);
student.addGrade('math', 2);
student.addGrade('german', 1);
student.addGrade('german', 3);
student.addGrade('german', 2);
student.addGrade('german', 5);
console.log(student.getAverageGrade('math'));
console.log(student.getAverageGrade('german'));
