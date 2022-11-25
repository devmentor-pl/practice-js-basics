function Student(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.grades = {};
}

Student.prototype.addGrade = function (sub, grade) {
	if (typeof this.grades[sub] === 'undefined') {
		this.grades[sub] = [];
	}
	this.grades[sub].push(Number(grade));
};

Student.prototype.getAvgGrade = function (sub) {
	if (typeof sub === 'undefined') {
		const grades = [];
		for (const key in this.grades) {
			const arr = this.grades[key];
			grades.push(...arr);
		}
		return getAvgFromArray(grades);
	} else if (typeof this.grades[sub] === 'undefined') {
		return 0;
	} else {
		const grades = this.grades[sub];
		return getAvgFromArray(grades);
	}
};

Student.prototype.isCorrectGrade = function (grade) {
	if (grade === null) {
		return false;
	} else if (grade >= 1 && grade <= 6) {
		return true;
	} else {
		console.log('Ocena musi być liczbą i zawierać się w przedziale od 1 do 6!');
	}
};

function getAvgFromArray(arr) {
	let sum = 0;
	arr.forEach((num) => {
		sum += num;
	});
	return sum / arr.length;
}

const student = new Student('Jan', 'Kowalski');
let grade, subject;
do {
	grade = prompt('Podaj ocenę');
	subject = prompt('Podaj nazwę przedmiotu z którego chcesz dodać ocenę');
	if (student.isCorrectGrade(grade)) {
		student.addGrade(subject, grade);
	}
} while (student.isCorrectGrade(grade));

const avgMath = student.getAvgGrade('math');
const avgEnglish = student.getAvgGrade('english');
const avgHistory = student.getAvgGrade('history');
const avg = student.getAvgGrade();
console.log(student);
console.log(avgMath);
console.log(avgEnglish);
console.log(avgHistory);
console.log(avg.toFixed(2));
