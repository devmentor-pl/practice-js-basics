function Student(initFirstName, initLastName) {
	this.firstName = initFirstName;
	this.lastName = initLastName;
	this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
	if (typeof this.grades[subject] === "undefined") {
		this.grades[subject] = [];
	}
	this.grades[subject].push(grade);
};

Student.prototype.averageGrade = function (subject) {
	if (typeof subject === "undefined") {
		const grades = [];
		for (const key in this.grades) {
			const arr = this.grades[key];

			arr.forEach(function (item) {
				grades.push(item);
			});
		}

		return this.avgOfGrades(grades);
	}

	if (typeof this.grades[subject] === "undefined") {
		return 0;
	}

	const grades = this.grades[subject];

	return this.avgOfGrades(grades);
};

Student.prototype.avgOfGrades = function(arr) {
	if (arr.length === 0) {
		return 0;
	}

	const sum = arr.reduce(function (a, b) {
		return a + b;
	}, 0);
	return sum / arr.length;
};

const student1 = new Student("Bartosz", "Zagaja");
student1.addGrade("Maths", 5);
student1.addGrade("Maths", 4);
student1.addGrade("Maths", 4);
student1.addGrade("Polish", 4);

console.log(student1);
console.log(student1.averageGrade());
