console.log('test!!!')

function Student (firstNameVal, lastNameVal) {
    this.firstName = firstNameVal
    this.lastName = lastNameVal
    this.grades = {}
}

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = []
    }

    this.grades[subject].push(grade)
}

Student.prototype.getAverageGrade = function(subject) {
    if(typeof subject === 'undefined') {
        const grades = []
        for(const key in this.grades) {
            const arr = this.grades[key]

            arr.forEach(function(item) {
                grades.push(item)
            })
        }

        if(grades.length === 0) {
            return 0
        }

        return this.avg(grades)
    }

    if(typeof this.grades[subject] === 'undefined') {
        return 0
    }

    return this.avg(this.grades[subject])
}

Student.prototype.avg = function(arr) {
if(arr.length === 0) {
    return 0
}

    const sum = arr.reduce(function(acc, curr) {
        return acc + curr
    }, 0)

    return sum / arr.length
}

const student = new Student('Maria', 'Mariowa')
student.addGrade ('math', 5)
student.addGrade ('math', 3)
student.addGrade ('math', 4)
student.addGrade ('german', 5)
student.addGrade ('polish', 5)
student.addGrade ('polish', 1)

console.log(student)

console.log(student.getAverageGrade())
console.log(student.getAverageGrade('polish'))