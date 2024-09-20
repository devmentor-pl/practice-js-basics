function student(name, surname) {
    this.name = name
    this.surname = surname;
    this.grades = {};
};

const student1 = new student("Jan", "Kowalski");

student.prototype.addGrade = function (subject, grade) {
    if (!this.grades[subject]) {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
};

student1.addGrade("math", 5);
student1.addGrade("math", 1);
student1.addGrade("math", 6);
student1.addGrade("w-f", 6);
student1.addGrade("w-f", 4);
student1.addGrade("w-f", 6);
student1.addGrade("w-f", 6);
student1.addGrade("w-f", 6);
student1.addGrade("j.ang", 5);
student1.addGrade("j.ang", 5);
student1.addGrade("j.ang", 5);
student1.addGrade("j.pl", 4);
student1.addGrade("j.pl", 4);
student1.addGrade("j.pl", 1);
student1.addGrade("j.pl", 3);
student1.addGrade("j.pl", 2);
student1.addGrade("j.pl", 1);

student.prototype.getAverageForSubject = function (subject) {
    const gradeArray = this.grades[subject];
    if (!gradeArray || gradeArray.length === 0) {
        return null
    }
    const sum = gradeArray.reduce((grade, total) => total + grade, 0);
    return sum / gradeArray.length;
};

student.prototype.getAverage = function () {
    const subjects = Object.keys(this.grades);
    let totalSum = 0;
    let countSubject = 0;

    subjects.forEach(subject => {
        const average = this.getAverageForSubject(subject);
        if (average !== null) {
            totalSum += average;
            countSubject++;
        }
    })

    if (countSubject === 0) {
        return null;
    }

    return totalSum / countSubject;
}

console.log(student1.getAverageForSubject("math"));
console.log(student1.getAverage());


