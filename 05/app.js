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

person.polish.push(4, 6, 5, 3, 4);

person.english.push(5, 6, 6, 6, 3);

person.biology.push(5, 6, 4, 4, 2);

// obliczanie średniej arytmetycznej (dla obiektu w obiekcie)
const avg = getAvg(this.person.math);
console.log(avg);

Person.prototype.getAvg = function() {
    const scoreSum = 0;
    const scoreNumbers = 0;

    this.forEach(function(scores) {
        scoreSum += scores;
        scoreNumbers ++;
    })
    
    avg = scoreSum / scoreNumbers;
    console.log(avg);

}

// obliczanie średniej arytmetycznej dla wszystkich przedmiotów

const avgAll = getAvgAll(this.person.math);
console.log(avgAll);

Person.prototype.getAvgAll = function() {
    const scoreSumAll = 0;
    const scoreNumbersAll = 0;

    this.forEach(function(scores) {
        scoreSumAll += scores;
        scoreNumbersAll ++;
    })
    
    avgAll = scoreSum / scoreNumbers;
    console.log(avgAll);

}