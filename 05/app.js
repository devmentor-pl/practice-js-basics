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

Student.prototype.getAvgGrade = function (subject) {
    const subjectGrades = this.grades[subject];

    // Przy wyliczeniu średniej ze wszystkich przedmiotów posiłkowałem się podobnym pytaniem na slacku
    const grades = Array.from(Object.values(this.grades)).flat();



    if (typeof subject !== 'undefined') {
        const gradesSum = subjectGrades.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        }, 0)

        const subjectAvg = gradesSum / subjectGrades.length;
        return `Średnia z ${subject} to: ${subjectAvg.toFixed(2)}`;
    } else {
        const gradesSum = grades.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        }, 0)
        const subjectsAvg = gradesSum / grades.length;
        return `Średnia ze wszystkich przedmiotów to: ${subjectsAvg.toFixed(2)}`
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
const avgMath = student.getAvgGrade('maths');
const avgPhysics = student.getAvgGrade('physics');
const avg = student.getAvgGrade();
console.log(student);
console.log(avgMath);
console.log(avgPhysics);
console.log(avg);
