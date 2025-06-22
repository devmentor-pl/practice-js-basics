// Tym razem stworzysz konstruktor, na podstawie którego będzie można generować obiekt przechowujący informacje o studencie.

// Wymagania:
// 1. Obiekt posiada imię i nazwisko przekazywane podczas inicjalizacji (przy użyciu `new`).

function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}


Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
};

// 2. Konstruktor:
// - udostępnia metody (przez `prototype`),
// - metody te pozwalają:
//   - dodać ocenę z danego przedmiotu,
//   - obliczyć średnią arytmetyczną z konkretnego przedmiotu,
//   - obliczyć ogólną średnią arytmetyczną.

Student.prototype.getAverageGrade = function (subject) {
    if (typeof subject !== 'undefine') {
        const grades = this.grades[subject];
        if (!grades || grades.length === 0) return null;
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        console.log(sum / grades.length);
    }

    let totalSum = 0;
    let totalCount = 0;

    for (let subjectName in this.grades) {
        const subjectGrades = this.grades[subjectName];

        for (let i = 0; i < subjectGrades.length; i++) {
            totalSum += subjectGrades[i];
            totalCount++;
        }
    }
    if (totalCount === 0) return null;

    console.log((totalSum / totalCount).toFixed(2));
}

const maths = 4;

const student = new Student('Jan', 'Kowalski');
console.log(student)
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('maths'); // 5
const avg = student.getAverageGrade(); // 4.33




// Zwróć uwagę, że pobranie informacji o ocenach z konkretnego przedmiotu może się odbywać w ten sposób:
// ```
// const subject = 'maths';
// const grades = this.grades[subject];
// ```

