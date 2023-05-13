function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}


Student.prototype.addGrade = function (subject, grade) {
    if (subject.trim() === '') {
        console.log('Podaj nazwę przedmotu')
        return
    }
    if (grade < 1 || grade > 6) {
        console.log('Niepoprawna wartość. Podaj cyfrę od 1-6')
        return
    }
    if (!this.grades[subject]) {
        this.grades[subject] = []
    }

    this.grades[subject].push(grade)
}

Student.prototype.getAverageGrade = function (subject) {
    let sum = 0;
    let gradesAmount = 0

    const keys = Object.keys(this.grades)

    if (!subject) {
        for (const key in this.grades) {
            for (let i = 0; i < this.grades[key].length; i++) {
                sum += this.grades[key][i];
                gradesAmount++
            }
        }
    } else if (!keys.includes(subject)) {
        console.log('Niepoprawna nazwa przedmiotu')
        return
    } else {
        for (const key in this.grades) {
            if (subject === key) {
                for (let i = 0; i < this.grades[subject].length; i++) {
                    sum += this.grades[subject][i]
                    gradesAmount++
                }
            }
        }
    }

    return ((sum / gradesAmount).toFixed(2))
}


const student = new Student('Jan', 'Kowalski')
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('polish', 3);
// student.addGrade('', 4);
// student.addGrade('maths', 5);
// student.getAverageGrade('maths')
// student.getAverageGrade('asfd')
// student.getAverageGrade('')
// student.getAverageGrade('polish')
// student.getAverageGrade()


const avgMath = student.getAverageGrade('maths'); // 5
const avg = student.getAverageGrade(); // 4.33

console.log(avg, avgMath)
console.log(student)


