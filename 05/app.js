const Student = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function (subject) {
    grades = this.grades[subject];
    if (typeof subject !== "undefined") {
        if (grades.length === 0) {
            return 0;
        }
        const reducer = grades.reduce((acc, curr) => acc + curr);
        const avGradeSub = reducer / grades.length;
        return avGradeSub;

    } else {
        const gradesTotal = [];
        for (const key in this.grades) {
            const gradesArr = this.grades[key];
            gradesArr.forEach(grade => {
                gradesTotal.push(grade);
            })
        }
        if (gradesTotal.length === 0) {
            return 0;
        }
        const reducer2 = gradesTotal.reduce((acc, curr) => acc + curr);
        const avGrade = reducer2 / gradesTotal.length;
        return avGrade;

    }
}

const student = new Student('Magda', 'Nolde');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
student.addGrade('spanish', 2);
student.addGrade('spanish', 5);
student.addGrade('maths', 2);

const avgMath = student.getAverageGrade(); // 5
const avg = student.getAverageGrade(); // 4.33
console.log(student.grades);
console.log(student.getAverageGrade('spanish'));
console.log(avg);