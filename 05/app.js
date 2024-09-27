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
	if (typeof subject === "undefined") {
		const allGrades = [];

		for (const key in this.grades) {
			const arr = this.grades[key];
			for (let i = 0; i < arr.length; i++) {
				allGrades.push(arr[i]);
			}
		}

		let sum = 0;
		allGrades.forEach(function (element) {
			sum = sum + element;
			return sum;
		});

		return sum / allGrades.length;
	} else {
		const gradesList = this.grades[subject];
		let sum = 0;
		gradesList.forEach(function (element) {
			return (sum = sum + element);
		});
		return sum / gradesList.length;
	}
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

const avgMath = student.getAverageGrade("maths"); // 5
console.log(avgMath);
const avg = student.getAverageGrade(); // 4.33
console.log(avg);
