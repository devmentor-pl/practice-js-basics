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

// Student.prototype.getSubjectAverage(subject){
// }

Student.prototype.getTotalAverage = function (arr) {
	const sum = arr.reduce(function (acc, total) {
		return acc + price;
	}, 0);

	return sum / arr.length;
};

const student = new Student("Jan", "Kowalski");

student.addGrade("maths", 4);
student.addGrade("maths", 6);
student.addGrade("english", 3);
console.log(student);

// const avgMath = student.getAverageGrade("math"); // 5
// const avg = student.getAverageGrade(); // 4.33
