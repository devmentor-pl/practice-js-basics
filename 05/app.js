function Student(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
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
		const allGrades = Object.values(this.grades).flat();
		return allGrades.reduce((a, b) => a + b, 0) / allGrades.length;
	} else {
		const subjectGrades = this.grades[subject];
		return subjectGrades.reduce((a, b) => a + b, 0) / subjectGrades.length;
	}
};

const student1 = new Student("Jan", "Kowalski");
student1.addGrade("math", 4);
student1.addGrade("math", 5);
student1.addGrade("english", 5);
student1.addGrade("english", 3);
const avgMath = student1.getAverageGrade("math");
const avgEnglish = student1.getAverageGrade("english");
const avg = student1.getAverageGrade();
console.log(avg);
console.log(avgMath);
console.log(avgEnglish);
console.log(student1);
