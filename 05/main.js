function Student(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
	this.grades = {}
}

Student.prototype.addGrade = function (subject, grade) {
	if (!this.grades[subject]) {
		this.grades[subject] = []
	}
	this.grades[subject].push(grade)
}
Student.prototype.calcAverageGrade = function (subject) {
	if (typeof subject !== 'undefined') {
		const average = this.grades[subject].reduce((a, b) => a + b, 0) / this.grades[subject].length
		return average
	} else {
		const arr = Object.values(this.grades).flat(1)
		return (averageAll = arr.reduce((a, b) => a + b, 0) / arr.length)
	}
}

const student1 = new Student('Tomasz', 'Nowak')

student1.addGrade('matematyka', 4)
student1.addGrade('matematyka', 2)
student1.addGrade('polski', 5)
student1.addGrade('chemia', 4)
student1.addGrade('polski', 6)
student1.addGrade('chemia', 1)
student1.addGrade('polski', 2)
student1.addGrade('religia', 6) 
student1.addGrade('religia', 4)

console.log(student1)
console.log(student1.calcAverageGrade('polski'))
console.log(student1.calcAverageGrade())
