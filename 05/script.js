'use strict'

function Student(initialFirstName, initialLastName) {
    this.firstName = initialFirstName
    this.lastName = initialLastName
    this.grades = {}
}

Student.prototype.addGrade = function addGrade(subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = []
    }
    this.grades[subject].push(grade)
}

Student.prototype.getAverageGrade = function (subject) {
    if (typeof subject === 'undefined') {
        const grades = []
        for (const key in this.grades) {
            const array = this.grades[key]
            array.forEach(function (x) {
                grades.push(x)
            })
        }
        let sum = 0
        grades.forEach(function (y) {
            sum = sum + y
        })
        const avg = sum / grades.length
        return avg
    }
    if (typeof this.grades[subject] === 'undefined') {
        return 0
    }
    let sum = 0
    const grades = this.grades[subject]
    grades.forEach(function (y) {
        sum = sum + y
    })
    const avg = sum / grades.length
    return avg
}

Student.prototype.showInfo = function () {
    console.log('First Name: ' + this.firstName)
    console.log('Last Name: ' + this.lastName)
    console.log('Grades:')
    console.log(this.grades)
}


const student = new Student('Jan', 'Kowalski')
student.addGrade('math', 4)
student.addGrade('math', 6)
student.addGrade('english', 3)
const avgMath = student.getAverageGrade('math')
console.log('Średnia ocen z matematyki wynosi: ' + avgMath)
const avg = student.getAverageGrade()
console.log('Średnia wszystkich ocen wynosi: ' + avg)

student.showInfo()
