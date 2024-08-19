function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}
Student.prototype.addGrade = function(subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function(subject) {
    if (subject) {
        const grades = this.grades[subject];
        if (!grades || grades.length === 0) {
            return 0; 
        }
        const sum = grades.reduce((acc, grade) => acc + grade, 0);
        return sum / grades.length;
    }

    let totalSum = 0;
    let totalGrades = 0;

    for (let subj in this.grades) {
        const grades = this.grades[subj];
        totalSum += grades.reduce((acc, grade) => acc + grade, 0);
        totalGrades += grades.length;
    }

    return totalGrades > 0 ? totalSum / totalGrades : 0;
};

const student = new Student('Jan', 'Kowalski');

student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);

const avgMath = student.getAverageGrade('maths');
console.log(`Średnia z matematyki: ${avgMath}`);

const avgOverall = student.getAverageGrade();
console.log(`Średnia ogólna: ${avgOverall}`);