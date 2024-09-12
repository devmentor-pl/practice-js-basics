function Student(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = {}
};

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade)
};
Student.prototype.getAverageGrade = function (subject) {
    if (typeof subject === 'undefined') {
        const allGradesArr = Object.values(this.grades).flat();
        const sumOfAllGrades = allGradesArr.reduce(function (a, b) {
            return (a + b)
        });
        return console.log(sumOfAllGrades / allGradesArr.length);
    } else {
        const subjectGradesArr = this.grades[subject];
        const sumOfSubjectGrades = subjectGradesArr.reduce(function (a, b) {
            return a + b;
        });
        console.log(sumOfSubjectGrades / subjectGradesArr.length);
    };
};

const student = new Student('Jank', 'Kowalski');
student.addGrade('math',1)
student.addGrade('math',5)
student.getAverageGrade('math');
console.log(student);