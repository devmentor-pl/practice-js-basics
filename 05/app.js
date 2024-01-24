function Student(firstNameVal, lastNameVal) {
    this.firsNAme = firstNameVal;
    this.lastNam = lastNameVal;
    this.grades = {};
}
Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === "undefined") {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
    if (typeof subject === "undefined") {
        const grades = [];
        for (const key in this.grades) {
            const arr = this.grades[key];
            arr.forEach(function (item) {
                grades.push(item);
            });
        }
        if (grades.length === 0) {
            return 0;
        }
        const sum = grades.reduce(function (acc, curr) {
            return acc + curr;
        }, 0);
        return sum / grades.length;
    }
    if (typeof this.grades[subject] === "undefined") {
        return 0;
    }
    const grades = this.grades[subject];
    const sum = grades.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    return sum / grades.length;
};

const student = new Student("Ania", "Kowalska");
student.addGrade("math", 4);
student.addGrade("math", 5);
student.addGrade("math", 6);
student.addGrade("polish", 4);

console.log(student.getAverageGrade());
