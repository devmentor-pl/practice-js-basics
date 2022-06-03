function Student(name, last) {
    this.firstName = name
    this.lastName = last
    this.grades = {}
}

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = []
    }
    this.grades[subject].push(grade)
}

Student.prototype.getAverageGrade = function (subject) {
    if (typeof subject !== 'string' && this.grades[subject]) return console.log('You have to provide string!')

    if (!this.grades[subject] && typeof subject === 'string') {
        return console.log(`This subject ('${subject}') does not exist!`)
    }

    let allGrades = []
    let avgOfAllAverages = null
    if (typeof this.grades[subject] === 'undefined') {
        for (const key in this.grades) {
            allGrades.push(this.grades[key])
        }
        avgOfAllGrades = getAvgValue(allGrades.flat()).toFixed(2)
        console.log('All subjects average = ' + avgOfAllGrades)
        return avgOfAllAverages
    } else {
        const avg = getAvgValue(this.grades[subject])
        console.log(`Average of ${subject} = ${avg}`)
        return avg
    }

}

const getAvgValue = function (arr) {
    return arr.reduce(function (reducer, number, index) {
        if (index === arr.length - 1) {
            return (reducer + number) / arr.length
        } else {
            return reducer + number
        }
    }, 0)
}

const student1 = new Student('Adam', 'Nowak')

student1.addGrade('maths', 4)
student1.addGrade('maths', 6)
student1.addGrade('english', 3)
console.log(student1)

const avgMath = student1.getAverageGrade('maths')
const avg = student1.getAverageGrade()