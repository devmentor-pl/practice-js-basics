function Student(initialName, initialLastName) {
    this.firstName = initialName;
    this.lastName = initialLastName;
    this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }

    this.grades[subject].push(grade);
}

Student.prototype.calcAvg = function (grades) {
    const gradesSum = grades.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0)
    return (gradesSum / grades.length).toFixed(2);
}

Student.prototype.getAvgGrade = function (subject) {
    const subjects = this.grades;
    const subjectGrades = this.grades[subject];
    const grades = [];

    for (const key in subjects) {
        for (let i = 0; i < subjects[key].length; i++) {
            grades.push(subjects[key][i]);
        }
    }

    if (typeof subject !== 'undefined') {
        return `Średnia z ${subject} to: ${this.calcAvg(subjectGrades)}`;
    } else {
        return `Średnia ze wszystkich przedmiotów to: ${this.calcAvg(grades)}`
    }
}

const student = new Student('Adam', 'Nowak')
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('maths', 2);
student.addGrade('english', 3);
student.addGrade('english', 6);
student.addGrade('physics', 1);
student.addGrade('physics', 4);
student.addGrade('physics', 3);
student.addGrade('physics', 2);
const avgMath = student.getAvgGrade('maths');
const avgPhysics = student.getAvgGrade('physics');
const avg = student.getAvgGrade();
console.log(student);
console.log(avgMath);
console.log(avgPhysics);
console.log(avg);
