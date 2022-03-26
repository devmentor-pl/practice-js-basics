class Student {

    constructor(initFirstName, initLastName) {
        this.firstName = initFirstName;
        this.lastName = initLastName;
        this.grades = {};
    }

    addGrade(grade, subject) {

        if (grade < 1 || grade > 6 || typeof grade != "number" || typeof subject !== "string" || subject === "") {

            console.log(`Nieprawidłowe dane`);

        } else {

            if (!this.grades[subject]) {
                this.grades[subject] = [];
            }
            this.grades[subject].push(grade);
        };
    }

    getAverage(subject) {

        if (!subject) {

            const subjects = Object.getOwnPropertyNames(this.grades);
            let allGrades = [];

            for (let i = 0; i < subjects.length; i++) {
                allGrades = allGrades.concat(this.grades[subjects[i]]);
            }

            let sumOfAllGrades = 0;
            allGrades.forEach(element => {
                sumOfAllGrades += element;
            });
            let allAverage = (sumOfAllGrades / allGrades.length).toFixed(2);

            return allAverage;
        }
        else {
            let sumOfGrades = 0;
            this.grades[subject].forEach(element => {
                sumOfGrades += element;
            });

            let subjectAverage = (sumOfGrades / this.grades[subject].length).toFixed(2);

            return subjectAverage;
        }
    }
}

const student1 = new Student("Ola", "Nowak");

student1.addGrade(2, "math");
student1.addGrade(3, "history");
student1.addGrade(4, "math");
student1.addGrade(3, "polish");
student1.addGrade(3.5, "polish");
student1.addGrade(2, "english");
student1.addGrade(6, "polish");
student1.addGrade(3, "english");
student1.addGrade(2, "history");
student1.addGrade(5, "polish");


const averagePolish = student1.getAverage("polish");
const averageAll = student1.getAverage();

console.log(`Student: ${student1.firstName} ${student1.lastName}.`);
console.log(`Średnia z przedmiotu "polish": ${averagePolish}`);
console.log(`Średnia z wszystkich przedmiotów: ${averageAll}`);











