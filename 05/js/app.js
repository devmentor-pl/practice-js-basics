function Student(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
	this.grades = {}
}

Student.prototype.addGrade = function (subject, grade) {
	if (typeof this.grades[subject] === 'undefined') {
		this.grades[subject] = []
	}

	this.grades[subject].push(grade)
}

Student.prototype.getAverageGrade = function (subject) {
	if (typeof subject !== 'undefined') {
		const subjectArr = this.grades[subject]
		const subjectAvg = subjectArr.reduce((a, b) => a + b)
		return subjectAvg / subjectArr.length
	} else {
		let allGrades = []

		for (const key in this.grades) {
			allGrades = allGrades.concat(this.grades[key])
		}
		const allAvg = allGrades.reduce((a, b) => a + b)

		return (allAvg / allGrades.length).toFixed(2)
	}
}

const student = new Student('Jan', 'Kowalski')
console.log(student)

student.addGrade('maths', 4)
student.addGrade('maths', 6)
student.addGrade('english', 3)

const avgMath = student.getAverageGrade('maths')
console.log(avgMath)
const avg = student.getAverageGrade() 
console.log(avg)
