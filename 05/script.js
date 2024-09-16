
class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.grades = {};
    }
}


Student.prototype.addGrade = function (subject, grade) {

    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.averageGrade = function (subject) {
    let sumOfGrades = 0;
    let numOfGrades = 0;
    if (typeof subject === 'undefined') {

        const subjects = this.grades;

        for (let subject in subjects) {
            subjects[subject].forEach(function (element) {
                sumOfGrades += element;
            });
            numOfGrades += subjects[subject].length;
        }
        return sumOfGrades / numOfGrades;
    }

    this.grades[subject].forEach(function (element) {
        sumOfGrades += element;
    });
    return sumOfGrades / this.grades[subject].length;

}


const Student1 = new Student('Mateusz', 'Suplewski');

Student1.addGrade('math', 5);
Student1.addGrade('math', 6);
Student1.addGrade('english', 3);
Student1.addGrade('english', 2);

const avgMath = Student1.averageGrade('math');
const avgEnglish = Student1.averageGrade('english');
const avgGrades = Student1.averageGrade();

console.log(avgMath);
console.log(avgEnglish);
console.log(avgGrades);










