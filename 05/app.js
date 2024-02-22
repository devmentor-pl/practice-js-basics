// konstruktor
function Person(initialName, initialSurname) {
    this.name = initialName;
    this.surname = initialSurname;
}

const student = new Person('Kasia', 'Dworak');

// dodawanie listy przedmiotów będących tablicami
student.grades = [];
student.grades.math = [];
student.grades.english = [];
student.grades.polish = [];
student.grades.biology = [];

// METODY
// dodawanie ocen do przedmiotów - DZIAŁA
student.grades.math.push(5, 6, 5, 5, 4);
student.grades.polish.push(4, 6, 5, 3, 4);
student.grades.english.push(5, 6, 6, 6, 3);
student.grades.biology.push(5, 6, 4, 4, 2);

// dodawanie przedmiotów funkcją
Person.prototype.addScore = function(subject, score) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(score);
}
student.addScore('physics', 4);
console.log(student);

// obliczanie średniej arytmetycznej 

let sum = 0;
const numberOfGrades = 0;

Person.prototype.getAvg = function(subject) {
    if(typeof this.grades[subject] === 'undefined') {
        // średnia dla wszystkich przedmiotów
        const gradesAll = Object.values(this.grades); 
        gradesAll.forEach(function(grade) {
            sum += grade;
            numberOfGrades = grade ++;
        });
        const avg = sum / numberOfGrades;
    } else {
        // średnia dla wybranego subject
        const gradesSubject = Object.values(this.grades); 
        gradesSubject.forEach(function(grade) {
            sum += grade;
            numberOfGrades = grade ++;
        });
        const avg = sum / numberOfGrades;
    }
}
const avg = getAvg('math');
console.log(avg);
