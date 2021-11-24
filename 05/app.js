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
    if (typeof this.subject !== 'undefined') {
        grades = this.grades[subject];
        console.log(grades);
        const reducer = grades.reduce((acc, curr) => acc + curr);
        console.log(reducer);
        const avGradeSub = reducer / grades.length;
        return avGradeSub;

    } else {

        for (const key in this.grades) {
            const gradesArr = this.grades[key];
            const gradesTotal = [];
            console.log(gradesTotal)
            const result = gradesArr.forEach(grade => {
                gradesTotal.push(grade);
                let total = 0;
                total += grade;
                const AvGrade = total / gradesTotal.length;
                return AvGrade;
            })
        }
    }
}

const student = new Student('Magda', 'Nolde');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('math'); // 5
// const avg = student.getAverageGrade(); // 4.33
console.log(student.grades);
console.log(student.getAverageGrade('maths'));
console.log(student.getAverageGrade('english'));