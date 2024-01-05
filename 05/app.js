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
	if (subject !== undefined) {
		let sumOfGrades = this.grades[subject].reduce((prev, next) => prev + next)
		return sumOfGrades / this.grades[subject].length
	} else {
		const array = Object.entries(this.grades)
		const gradesFromArray = array.map(item => {
			const [first, second] = item
			return second
		})
		const newArray = gradesFromArray.flat()
		const newArraySum = newArray.reduce((prev, next) => prev + next)
		return newArraySum / newArray.length
	}
}

const student1 = new Student('Michał', 'Gawlik')
student1.addGrade('math', 2)
student1.addGrade('math', 4)
student1.addGrade('biology', 3)
student1.addGrade('biology', 6)
student1.addGrade('english', 4)
console.log(student1.grades)

console.log(student1.getAverageGrade('math'))
console.log(student1.getAverageGrade('biology'))
console.log(student1.getAverageGrade())
