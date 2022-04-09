console.log('zad 5')

const Student = function (name, surname) {
    this.name = name
    this.surname = surname
    this.grades = {
        maths: [],
        english: []
    }
}
Student.prototype.getName = function () {
    return this.name + ' ' + this.surname
}
Student.prototype.addGrade = function (subject, grade) {
    if(this.grades[subject] === undefined) {
        this.grades[subject] = []
    }
    this.grades[subject].push(grade)
    return 'added: ' + subject + ' ' + grade
}
Student.prototype.getAverageGrade = function (subject) {
    if(this.grades[subject] === undefined) return 0

    if (subject !== undefined) {
        let sum = 0
        sum = this.grades[subject].reduce(function (prev, next) {
            return prev + next
        }, 0)
        return sum / this.grades[subject].length
    } else {
        let numberGrades = 0
        let sum = 0
        for (let key in this.grades) {
            sum += this.grades[key].reduce(function(prev, next) {
                return prev + next
            },0)
            numberGrades += this.grades[key].length
        }
        return (sum / numberGrades).toFixed(2)
    }
}

const student1 = new Student('Antoni', 'Kosiba')
console.log(student1.getName())

console.log('----- add grades to subjects -----')
console.log(student1.addGrade('maths', 4))
console.log(student1.addGrade('maths', 6))
console.log(student1.addGrade('english', 3))

console.log('----- average for every subjects -----')
const avgMath = student1.getAverageGrade('maths')
console.log('avgMath:', avgMath)
const avgEnglish = student1.getAverageGrade('english')
console.log('avgEnglish:', avgEnglish)
const avgXxxxx = student1.getAverageGrade('xxxxx')
console.log('avgXxxxx:', avgXxxxx)

console.log('----- average all subjects -----')
const avg = student1.getAverageGrade()
console.log('avg:', avg)

console.log(student1)






