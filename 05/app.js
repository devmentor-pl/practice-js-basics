// konstruktor
function Person(initialName, initialSurname) {
    this.name = initialName;
    this.surname = initialSurname;
    this.math = [];
    this.polish = [];
    this.english = [];
    this.biology = [];
}

const person = new Person('Kasia', 'Dworak');

// METODY
// dodawanie ocen do przedmiotów

// czy oceny mogę dodać za pomocą prototypów 
// (obiekt w obiekcie)?
// dodawanie oceny
// Person.prototype.addScore = function(score) {
//     this.score = score;
// }

// person.addScore([10, 20, 30, 40]);

person.math.push(5, 6, 5, 5, 4);
console.log(person);

person.polish.push(4, 6, 5, 3, 4);
console.log(person);

person.english.push(5, 6, 6, 6, 3);
console.log(person);

person.biology.push(5, 6, 4, 4, 2);
console.log(person);

// obliczanie średniej arytmetycznej

// Person.prototype.getAvg = function() {
//     let sum3 = 0;
//     let objLength = 0;
//     person.score.forEach(function(num) {
//         sum3 += num;
//         objLength ++;
//     })
//     const avg = sum3 / objLength;
// }
// const avgScore = person.score.getAvg();
// console.log(avgScore);

// dodaj przedmioty + dodaj oceny z przedmiotów
// wylicz średnią z jednego przedmiotu
// wylicz średnią z wielu przedmiotów