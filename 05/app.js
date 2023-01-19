function Student(studentName, studentLastName) {
	this.firstName = studentName;
	this.lastName = studentLastName;
	this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
	if (typeof this.grades[subject] === "undefined") {
		this.grades[subject] = [];
	}

	this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
	if (subject === "undefined") {
		const allGrades = [];

		for (const key in this.grades) {
			allGrades.push(this.grades[key]);
		}

		let sum = 0;
		allGrades.forEach(function (element) {
			sum = sum + element;
			return sum;
		});

		return sum / allGrades.length;
	} else {
		const grades = this.grades["subject"];
		let sum = 0;
		grades.forEach(function (element) {
			return (sum = sum + element);
		});
	}

	return sum / grades.length;
};

Student.prototype.getTotalAverage = function (arr) {
	const sum = arr.reduce(function (acc, total) {
		return acc + total;
	}, 0);

	return sum / arr.length;
};

const student = new Student("Jan", "Kowalski");

student.addGrade("maths", 4);
student.addGrade("maths", 6);
student.addGrade("english", 3);
console.log(student);

const avgMath = student.getAverageGrade("math"); // 5
const avg = student.getAverageGrade(); // 4.33
console.log(avg);
