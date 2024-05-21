function Student(initFistName, initLastName) {
    this.firstName = initFistName;
    this.lastName = initLastName;
    this.grades = {};
};

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
};

Student.prototype.calculateAverage = function (gradesArray) {
    const sum = gradesArray.reduce((acc, grade) => acc + grade, 0);
    if(sum > 0){
        return sum / gradesArray.length;
    }
};

Student.prototype.getAverageGrade = function (subject) {
    if (subject && this.grades[subject] !== 'undefined') {
        return Number(this.calculateAverage(this.grades[subject]).toFixed(2));
    } else {
        const allGrades = Object.values(this.grades).flat();
        const overallAverage = this.calculateAverage(allGrades);
        return Number(overallAverage.toFixed(2));
    }
};

const student = new Student('Jan', 'Kowalski');
student.addGrade('math', 4);
student.addGrade('math', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('math');
const avg = student.getAverageGrade();

console.log(student);
console.log(avgMath);
console.log(avg);