function Student(initFirstName, initLastName) {
    this.firstName = initFirstName
    this.lastName = initLastName
    this.grades = {}
}

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = []
    }

    this.grades[subject].push(grade)
}

Student.prototype.getAverageGrade = function (subject) {
    if (typeof subject === 'undefined') {
        const grades = []
        for (const key in this.grades) {
            const arr = this.grades[key]

            arr.forEach(function (item) {
                grades.push(item)
            })
        }

        return this.avg(grades)
    }

    if (typeof this.grades[subject] === 'undefined') {
        return 0
    }

    return this.avg(this.grades[subject])
}

Student.prototype.avg = function (arr) {
    if (arr.length === 0) {
        return 0
    }

    const sum = arr.reduce(function (acc, curr) {
        return acc + curr
    }, 0)

    return sum / arr.length
}

const student = new Student('Jan', 'Kowalski')
student.addGrade('maths', 4)
student.addGrade('maths', 6)
student.addGrade('english', 3)

console.log(student)
console.log(student.getAverageGrade())
console.log(student.getAverageGrade('maths'))