function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrades = function (subject) {
    if (typeof subject === 'undefined') {
        const gradesArr = Object.values(this.grades).flat();
        if (gradesArr.length === 0) {
            console.log('Brak ocen w systemie');
        } else {
            return (gradesArr.reduce((a, b) => a + b) / gradesArr.length).toFixed(2);
        }
    } else {
        const subjectGrades = this.grades[subject];
        if (subjectGrades.length === 0) {
            console.log(`Brak ocen z przedmiotu ${subject} w systemie`);
        } else {
            return (subjectGrades.reduce((a, b) => a + b) / subjectGrades.length).toFixed(2);
        }
    }
}


/*
const student1 = new Student('Jan', 'Kowalski');
console.log(student1);
student1.addGrade('matematyka', 5);
student1.addGrade('matematyka', 3);
student1.addGrade('matematyka', 4);
student1.addGrade('matematyka', 4);
student1.addGrade('matematyka', 4);
student1.addGrade('matematyka', 4);
student1.addGrade('matematyka', 4);
student1.addGrade('matematyka', 3);
student1.addGrade('w-f', 5);
student1.addGrade('w-f', 4);
student1.addGrade('w-f', 2);
student1.addGrade('w-f', 1);
console.log(student1.getAverageGrades());
console.log(student1.getAverageGrades('matematyka'));

const student2 = new Student('aaa', 'bbb');
student2.getAverageGrades();
*/