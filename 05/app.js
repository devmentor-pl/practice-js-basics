// konstruktor
function Person(initialName, initialSurname) {
    this.name = initialName;
    this.surname = initialSurname;
}

const person = new Person('Kasia', 'Dworak');

// METODY
// dodawanie oceny
Person.prototype.addScore = function(score) {
    this.score = score;
}

person.addScore([10, 20, 30, 40]);
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