function Student(name, surname) {
	this.firstName = name;
	this.lastName = surname;
	this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
	if (typeof this.grades[subject] === 'undefined') {
		this.grades[subject] = [];
	}
	this.grades[subject].push(grade);
};

Student.prototype.getAverage = function (grade) {
	if (typeof grade === 'undefined') {
		let allGrades = [];

		for (const key in this.grades) {
			allGrades = allGrades.concat(this.grades[key]);
		}
		const sumGrades = allGrades.reduce(function (a, b) {
			return a + b;
		});

		return sumGrades / allGrades.length;
	} else {
		const sumOfGrade = this.grades[grade].reduce(function (acc, cur) {
			return acc + cur;
		});

		return sumOfGrade / this.grades[grade].length;
	}
};

const student = new Student('Jan', 'Kowalski');

student.addGrade('maths', 3);
student.addGrade('maths', 4);
student.addGrade('german', 3);
student.addGrade('german', 2);
student.addGrade('german', 4);
student.addGrade('german', 5);
student.addGrade('german', 6);
const avgMath = student.getAverage('maths');
const avgGerman = student.getAverage('german');
const avg = student.getAverage();
console.log(student);
console.log(avgMath);
console.log(avgGerman);
console.log(avg);
