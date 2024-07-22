class Student {
	constructor(firstName, lastName, grades = {}) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grades = grades;
	}

	addGrade(subject, grade) {
		if (!this.grades[subject]) {
			this.grades[subject] = [];
		}
		this.grades[subject].push(grade);
	}

	getAverageGrade(subject) {
		if (subject) {
			if (!this.grades[subject] || this.grades[subject].length === 0) {
				return 0;
			}
			const sum = this.grades[subject].reduce((acc, grade) => acc + grade, 0);
			return sum / this.grades[subject].length;
		} else {
			const allGrades = Object.values(this.grades).flat();
			if (allGrades.length === 0) {
				return 0;
			}
			const sum = allGrades.reduce((acc, grade) => acc + grade, 0);
			return sum / allGrades.length;
		}
	}
}

const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('maths'); // 5
const avg = student.getAverageGrade(); // 4.33

console.log(avgMath); // 5
console.log(avg); // 4.33
