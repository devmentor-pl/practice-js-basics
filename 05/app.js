function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}

Student.prototype.addGrade = function ({ subject, grade }) {
    if (!this.grades[subject]) {
        this.grades[subject] = [];
        return this.grades[subject].push(grade);
    }

    this.grades[subject].push(grade);
};

Student.prototype.getAvgFrom = function ({ subject }) {
    if (!this.grades[subject] || this.grades[subject].length < 1) {
        return null;
    }

    return (
        this.grades[subject].reduce((acc, grade) => acc + grade) /
        this.grades[subject].length
    );
};

Student.prototype.getAvg = function () {
    const allGrades = Object.values(this.grades).flat();
    const avg =
        allGrades.reduce((acc, grade) => acc + grade, 0) / allGrades.length;
    return avg.toFixed(2);
};

const Mateuszek = new Student('Mateuszek', 'Sowa');
Mateuszek.addGrade({ subject: 'maths', grade: 5 });
Mateuszek.addGrade({ subject: 'maths', grade: 2 });
Mateuszek.addGrade({ subject: 'english', grade: 3 });
console.log(Mateuszek);
console.log(Mateuszek.getAvgFrom({ subject: 'maths' }));
console.log(Mateuszek.getAvg());
