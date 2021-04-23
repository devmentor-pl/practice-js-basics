
function student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}

student.prototype.addGrade = function (subject, grade) {

    if (typeof this.grades[subject] === 'undefined') { //jeśli ocena nie jest podana to ją wyzeruj
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);

}

student.prototype.getAverageGrade = function (subject) {

    function sumNumbers(a, b) {
        return a + b;
    }

    if (subject !== undefined) {   //jeśli przedmiot jest podany w wywołaniu funkcji np. "getAverageGrade('maths')"

        const grades = this.grades[subject];
        grade = grades.reduce(sumNumbers) / grades.length;
        return grade;

    } else { //jeśli przedmiot nie jest podany w wywołaniu funkcji: "getAverageGrade()"

        const grades = [];
        for (const el in this.grades) {
            this.grades[el].forEach(function (grade) {
                grades.push(grade);
            });
        }
        grade = grades.reduce(sumNumbers) / grades.length;
        return grade;

    }

}

const student5656 = new student ('Jan', 'Kowalski');

student5656.addGrade('history', 4);
student5656.addGrade('history', 4.5);
student5656.addGrade('maths', 4);
student5656.addGrade('maths', 6);
student5656.addGrade('maths', 4.5);
student5656.addGrade('maths', 5);
student5656.addGrade('english', 3);
student5656.addGrade('english', 3.5);
student5656.addGrade('english', 3.75);

const avgMath = student5656.getAverageGrade('maths');
const avgEng = student5656.getAverageGrade('english');
const avgHis = student5656.getAverageGrade('history');
const avgAll = student5656.getAverageGrade();

console.log(student5656);
console.log(`maths: ${Math.round(avgMath * 100) / 100}`);
console.log(`english: ${Math.round(avgEng * 100) / 100}`);
console.log(`history: ${Math.round(avgHis * 100) / 100}`);
console.log(`all: ${Math.round(avgAll * 100) / 100}`);

