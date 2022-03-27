function Student(initFirstName, initLastName) {
    this.firstName = initFirstName
    this.lastName = initLastName
    this.grades = {}
}

Student.prototype.addGrade = function (grade, subject) {

    if (grade < 1 || grade > 6 || typeof grade != "number" || typeof subject !== "string" || subject === "") {

        console.log(`Nieprawidłowe dane`)

    } else {
        if (!this.grades[subject]) {
            this.grades[subject] = []
        }
        this.grades[subject].push(grade)
    }
}

Student.prototype.getAverage = function (subject) {

    if (subject === undefined) {

        const subjects = Object.getOwnPropertyNames(this.grades)
        let allGrades = [];

        subjects.forEach(element => allGrades = allGrades.concat(this.grades[element]))

        const initial = 0
        const sum = allGrades.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initial)

        return (sum / allGrades.length).toFixed(2);
    } else if (typeof subject === "string") {

        const initial = 0;
        const sum = this.grades[subject].reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initial)

        return (sum / this.grades[subject].length).toFixed(2)
    } else {
        console.log(`Błędne dane`)
    }
}


// Same functionality but using  "class" declaration

// class Student {

//     constructor(initFirstName, initLastName) {
//         this.firstName = initFirstName;
//         this.lastName = initLastName;
//         this.grades = {};
//     }
//     addGrade(grade, subject) {

//         if (grade < 1 || grade > 6 || typeof grade != "number" || typeof subject !== "string" || subject === "") {

//             console.log(`Nieprawidłowe dane`)

//         } else {
//             if (!this.grades[subject]) {
//                 this.grades[subject] = []
//             }
//             this.grades[subject].push(grade)
//         }
//     }

//     getAverage(subject) {

//         if (subject === undefined) {

//             const subjects = Object.getOwnPropertyNames(this.grades)
//             let allGrades = [];

//             subjects.forEach(element => allGrades = allGrades.concat(this.grades[element]))

//             const initial = 0
//             const sum = allGrades.reduce(
//                 (previousValue, currentValue) => previousValue + currentValue,
//                 initial)

//             return (sum / allGrades.length).toFixed(2);
//         } else if (typeof subject === "string") {

//             const initial = 0;
//             const sum = this.grades[subject].reduce(
//                 (previousValue, currentValue) => previousValue + currentValue,
//                 initial)

//             return (sum / this.grades[subject].length).toFixed(2)
//         } else {
//             console.log(`Błędne dane`)
//         }

//     }
// }


const student1 = new Student("Ola", "Nowak");

student1.addGrade(2, "math");
student1.addGrade(4, "math");
student1.addGrade(3, "history");
student1.addGrade(2, "history");
student1.addGrade(5, "polish");
student1.addGrade(4, "polish");
student1.addGrade(5, "polish");
student1.addGrade(3, "polish");
student1.addGrade(2, "english");
student1.addGrade(5, "english");


const averagePolish = student1.getAverage("polish");
const averageAll = student1.getAverage();

console.log(`Student: ${student1.firstName} ${student1.lastName}.`);
console.log(`Średnia z przedmiotu "polish": ${averagePolish}`);
console.log(`Średnia z wszystkich przedmiotów: ${averageAll}`);











