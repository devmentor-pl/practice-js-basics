class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grades = {};
	}

	addGrade(subject, grade) {
		if (typeof this.grades[subject] === 'undefined') {
			this.grades[subject] = [];
		}
		this.grades[subject].push(grade);
	}

	getAverageGrade(subject) {
		const getAritmeticAvg = (arr) => arr.reduce((aq, el) => aq + el, 0) / arr.length;

		if (subject) {
			return getAritmeticAvg(this.grades[subject]);
		}

		let avg = [];
		Object.keys(this.grades).map((key) => avg.push(this.getAverageGrade(key)));
		return getAritmeticAvg(avg);
	}
}
/*
let student = new Student('Jan', 'Duda');
student.addGrade('english',2);
student.addGrade('english',2);
student.addGrade('english',4);
student.addGrade('english',4);
student.addGrade('english',4);
student.addGrade('english',2);
student.addGrade('math',3);
student.addGrade('math',5);
student.addGrade('math',5);
student.addGrade('math',3);
student
student.grades
student.getAverageGrade('math')
student.getAverageGrade('english')
student.getAverageGrade()


 */
