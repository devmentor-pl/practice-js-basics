
function Student(initFistName, initLastName) {
    this.firstName = initFistName;
    this.lastName = initLastName;
    this.grades = {};
}

Student.prototype.showFullName = function () {
    console.log(this.firstName, this.lastName);
}


Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}


Student.prototype.getAverageGrade = function (subject) {

    if (typeof this.grades[subject] !== 'undefined') {
        const resultSum = this.grades[subject].reduce(function (a, b) {
            return (a + b);
        });
        const resultAvgGrade = resultSum / this.grades[subject].length;
        return resultAvgGrade;
    } else if (typeof subject === 'undefined') {

        let arrAll = [];
        Object.values(this.grades).forEach(function (item) {     // stworzenie tablicy jednowymiarowej
            arrAll = arrAll.concat(item);
        });

        const resultSum = arrAll.reduce(function (a, b) {
            return (a + b);
        });
        const resultAvg = resultSum / arrAll.length;
        return resultAvg;



        /* średnia obliczona przez Dawid Pietraszko - wcześniej sprawdzona !!!

                const valuesArr = Object.values(this.grades);
        
                let resultSumAll = 0;
                let resultAvgAll = 0;
                for (let i = 0; i < valuesArr.length; i++) {
        
                    const resultSumItem = valuesArr[i].reduce(function (a, b) {
                        return (a + b);
                    });
                    const resultAvgItem = resultSumItem / valuesArr[i].length;
                    resultSumAll += resultAvgItem;
        
                    resultAvgAll = resultSumAll / valuesArr.length;
                }
                return resultAvgAll;
        */
    } else {
        return null;
    }
}

const student1 = new Student('Jan', 'Kowalski');
student1.addGrade('maths', 4);
student1.addGrade('maths', 4);
student1.addGrade('maths', 1);
student1.addGrade('english', 5);
student1.addGrade('english', 5);
student1.addGrade('polish', 3);
student1.addGrade('polish', 3);
student1.addGrade('polish', 3);
const avgMathsSt1 = student1.getAverageGrade('maths');
const avgEnglishSt1 = student1.getAverageGrade('english');
const avgPolishSt1 = student1.getAverageGrade('polish');
const avgAllSt1 = student1.getAverageGrade();


const student2 = new Student('Marek', 'Nowak');
student2.addGrade('maths', 2);
student2.addGrade('maths', 3);
student2.addGrade('maths', 4);
student2.addGrade('english', 4);
student2.addGrade('english', 4);
student2.addGrade('polish', 5);
student2.addGrade('polish', 5);
student2.addGrade('polish', 2);
const avgMathsSt2 = student2.getAverageGrade('maths');
const avgEnglishSt2 = student2.getAverageGrade('english');
const avgPolishSt2 = student2.getAverageGrade('polish');
const avgAllSt2 = student2.getAverageGrade();



console.log(student1);
console.log('Średnia z Matematyki ' + student1.firstName + ' ' + student1.lastName + ': ' + avgMathsSt1);
console.log('Średnia z Angielskiego ' + student1.firstName + ' ' + student1.lastName + ': ' + avgEnglishSt1);
console.log('Średnia z Polskiego ' + student1.firstName + ' ' + student1.lastName + ': ' + avgPolishSt1);

console.log('Średnia z wszystkich przedmiotów: ' + avgAllSt2);


console.log(student2);
console.log('Średnia z Matematyki ' + student2.firstName + ' ' + student2.lastName + ': ' + avgMathsSt2);
console.log('Średnia z Angielskiego ' + student2.firstName + ' ' + student2.lastName + ': ' + avgEnglishSt2);
console.log('Średnia z Polskiego ' + student2.firstName + ' ' + student2.lastName + ': ' + avgPolishSt2);

console.log('Średnia z wszystkich przedmiotów: ' + avgAllSt2);

