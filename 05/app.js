// konstruktor
function Person(initialName, initialSurname) {
    this.name = initialName;
    this.surname = initialSurname;
    this.grades = [];
}

const student = new Person('Kasia', 'Dworak');

// dodawanie listy przedmiotów 
student.grades.math = [];
student.grades.english = [];
student.grades.polish = [];
student.grades.biology = [];

// METODY
// dodawanie ocen do przedmiotów
student.grades.math.push(5, 6, 5, 4);
student.grades.polish.push(4, 6, 5, 3, 4);
student.grades.english.push(5, 6, 3);
student.grades.biology.push(5, 6, 4, 4, 2, 5);

// dodawanie przedmiotów przy uzyciu funkcji
Person.prototype.addScore = function(subject, score) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(score);
}
student.addScore('physics', 4);
console.log(student);

// obliczanie średniej arytmetycznej
const gradesValues = Object.values(student.grades);
// console.log(gradesValues);

// wyliczamy średnią arytmetyczną z dowolnego przedmiotu
// .forEach() DZIAŁA
let sum = 0;
let gradesNum = 0;

Person.prototype.getAverageGrade = function(subject) {
    const subjectGrades = this.grades[subject];
    subjectGrades.forEach(function(grade) {
        sum += grade;
        gradesNum ++;
    })
    const avgSub = sum / gradesNum;
    console.log(avgSub);
}

const cos = student.getAverageGrade('math');

// PĘTLA for DZIAŁA
let sum2 = 0;
let gradeNum2 = 0;

Person.prototype.getAverageGrade2 = function(subject) {
    for(let i = 0; i < this.grades[subject].length; i ++) {
        let grades = this.grades[subject][i];
        sum2 += grades;
        gradeNum2 ++;
    }
    return sum2 / gradeNum2;
}

avgSub2 = student.getAverageGrade2('math');
// console.log(avgSub2);

// wyliczamy średnią arytmetyczną ze wszystkich przedmiotów
// .forEach() DZIAŁA
let sumAll1 = 0;
let count = 0;
Person.prototype.getAverageGrade2 = function(subject) {
    if(typeof this.grades[subject] === 'undefined') {
        
        let gradeNumAll = Object.values(this.grades);
        gradeNumAll.forEach(function(gradeSub1) {
            gradeSub1.forEach(function(grade) {
                sumAll1 += grade;
                count ++;
            })
        })
        if(count === 0) {
            return 0;
        }
        return sumAll1 / count;
    }
}

avgAll1 = student.getAverageGrade2();
console.log(avgAll1.toFixed(1));


// PĘTLA for NIE DZIAŁA
let sumAll2 = 0;
let count2 = 0;
Person.prototype.getAverageGrade2 = function(subject) {
    if(typeof this.grades[subject] === 'undefined') {
    for(let i = 0; i < this.grades.length; i ++) {
        for(let j = 0; j < this.grades[j].length; j ++) {
            let grades = this.grades[j];
            console.log(this.grades[j])
            sumAll2 += grades;
            count2 ++;
        }
    }
    return sumAll2 / count2;
}
}
let avgSubAll = student.getAverageGrade2();
console.log(avgSubAll);