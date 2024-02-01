function Student(initName, initSurname) {
    this.studentName = initName
    this.studentSurname = initSurname
    this.grades = {}
}

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = []
    }

    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject) {

    if(typeof this.grades[subject] !== 'undefined') {

        const subjectName = this.grades[subject]
        const grade  = subjectName
        let sumGrade = 0

        grade.forEach(function(number) {
            sumGrade += number
        });

        if(grade.length === 0) {
            return false
        }

        const avgResult = (sumGrade / grade.length)
        return avgResult.toFixed(2)

    } else {
        const gradesTab = []

        for(const key in this.grades) {
            const grades = this.grades[key]
            grades.forEach(function (el) {
            gradesTab.push(el);
        });
        }

        const result = gradesTab.reduce(function (acc, num) {
            return acc + num;
        });

        return (result / gradesTab.length).toFixed(2)
    }
}

const student = new Student('Jan', 'Kowalski');
student.addGrade('math', 4)
student.addGrade('math', 6)
student.addGrade('english', 3)
const avgMath = student.getAverageGrade('math')
const avg = student.getAverageGrade()

console.log(student, avgMath, avg);