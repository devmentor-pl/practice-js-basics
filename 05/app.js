
function Student(initFistName, initLastName) {
    this.firstName = initFistName;
    this.lastName = initLastName;
    this.grades = {};
}

Student.prototype.showFullName = function () {
    console.log(this.firstName, this.lastName);
}


Student.prototype.addGrade = function (subject, grade) {
    this.grades = subject;
    this.grades[subject] = [];


    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }

    this.grades[subject].push(grade); // tu jest jakiś błąd !!!!
}


Student.prototype.getAverageGrade = function (subject) {

    if (typeof this.grades[subject] !== 'undefined') {
        const resultSum = this.grades[subject].reduce(function (a, b) {
            return (a + b);
        });
        const resultAvgGrade = resultSum / this.grades[subject].length;
        return resultAvgGrade;
    } else { // to jest do przerobienia całe else
        const values = Object.values(this.grades); // zwraca wszystkie wartości danego obiektu w formie tablicy
        const totalSum =
            values.reduce(function (a, b) {
                return a + b;
            }, 0);

        const resultAvgGrade = totalSum / this.grades;
        return resultAvgGrade;

    }
}


const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);





