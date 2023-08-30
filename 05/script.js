function Student(initFirstName, initLastName) {
	this.name = initFirstName
	this.lastName = initLastName
	this.marks = []
}

// dodanie oceny
Student.prototype.getMark = function (subject, mark) {
	if (typeof this.marks[subject] === 'undefined') {
		this.marks[subject] = []
	}
	this.marks[subject].push(mark)
}

// średnia z przedmiotu
Student.prototype.getAverageGrade = function (subject) {
	if (typeof subject === 'undefined') {
	}
	const grades = this.grades[subject]
}

// srednia cała

Student.prototype.avgAll = function () {
	const gradesSums = this.marks[subject]
	let sumMarks = 0
	let sumSubject = 0

	for (const grade of gradesSums) {
		const sumMarskAll = this.sumMarskAllThis(grade)
		sumMarks += sumMarskAll
		sumSubject++
	}
	return sumSubject === 0 ? 0 : sumMarks / sumSubject
}



const student1 = new Student ('Tomasz', 'Kowalski')
student1.getMark('maths', 4)
student1.getMark('maths', 6)
student1.getMark('english', 3)

console.log(student1.avgAll);

