function Student(name, surname) {
    this.name = name;
    this.surname = surname;
    this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function (subject) {
    if (typeof subject !== 'undefined') {
        if (typeof this.grades[subject] === 'undefined') {
            return null;
        }

        return this.grades[subject].reduce(function (acc, current) {
            return acc += current;
        }) / this.grades[subject].length;
    } else {
        let sumOfGrades = 0;
        let numberOfGrades = 0;
        for (const subject in this.grades) {
            for (const grade of this.grades[subject]) {
                sumOfGrades += grade;
                numberOfGrades++;
            }
        }
        return sumOfGrades / numberOfGrades;
    }
}

const student1 = new Student("Krzysztof", "Kozłowski");
student1.addGrade('maths', 2);
student1.addGrade('maths', 6);
student1.addGrade('english', 6);

console.log(student1);
console.log(student1.getAverageGrade('maths'));
console.log(student1.getAverageGrade());