function Student(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.grades = {};
}

Student.prototype.addGrade = function (sub, grade) {
	if (typeof this.grades[sub] === 'undefined') {
		this.grades[sub] = [];
	}

	if (grade >= 1 && grade <= 6) {
		this.grades[sub].push(grade);
	} else {
		console.log('Ocena musi zawierać się w przedziale od 1 do 6!');
	}
};

Student.prototype.getAvgGrade = function (sub) {
	if (typeof sub === 'undefined') {
		const grades = [];
		for (const key in this.grades) {
			const arr = this.grades[key];
			grades.push(...arr);
		}
		let sum = 0;
		grades.forEach((num) => {
			sum += num;
		});
		return sum / grades.length;
	} else if (typeof this.grades[sub] === 'undefined') {
		return 0;
	} else {
		const grades = this.grades[sub];
		let sum = 0;
		grades.forEach((num) => {
			sum += num;
		});
		return sum / grades.length;
	}
};

const student = new Student('Jan', 'Kowalski');
student.addGrade('math', 4);
student.addGrade('math', 6);
student.addGrade('english', 3);
student.addGrade('english', 4);
const avgMath = student.getAvgGrade('math');
const avgEnglish = student.getAvgGrade('english');
const avg = student.getAvgGrade();
console.log(student);
console.log(avgMath);
console.log(avgEnglish);
console.log(avg.toFixed(2));
