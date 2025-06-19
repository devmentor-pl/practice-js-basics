// const min = 1;
// const max = 100;

// const a = randomNumber(min, max);
// const b = randomNumber(min, max);
// const c = randomNumber(min, max);

// console.log(a, b, c);
// function randomNumber(min, max) {
//     return Math.round((Math.random() * (max - min)) + min);
// }

/*
Funkcja o nazwie getSum:
-przyjmuje 3 parametry. Ich wartość w ciele funkcji ma zostać przekonwertowana na liczby całkowite,
-z podanych 3 liczb wybierane są 2 największe,
-wartości tych 2 liczb są sumowane, a wynik jest zwracany przez funkcję.
*/

const a = 41.5234;
const b = 25;
const c = 14;

const sum = getSum(a, b, c);

// zapisac w tablicy i posortowac

function getSum(a, b, c) {
    let largestNum = Math.max(a, b, c);
    let secondLargestNum;

    if (largestNum === a) {
        secondLargestNum = Math.max(b, c);
    } else if (largestNum === b) {
        secondLargestNum = Math.max(a, c);
    } else {
        secondLargestNum = Math.max(a, b);
    }
    return sum1 = parseInt(largestNum) + parseInt(secondLargestNum);
}

// console.log(sum1)

/*
Funkcja o nazwie isEven:
-ma formę wyrażenia funkcyjnego,
-przyjmuje przez parametr tylko liczbę:
    -jeśli parametrem jest inny typ wartości niż number, to zwróć null,
    -jeśli jest to liczba, to zwróć:
        -true - jeśli jest parzysta,
        -false - jeśli jest nieparzysta.
*/


const even = isEven(2);

function isEven(num) {
    if (typeof num !== "number") {
        return null;
    } else if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(even);

/*
Funkcja o nazwie showInfo:

-przyjmuje 2 parametry:
    pierwszy to dowolna wartość,
    drugi to jedna z podanych wartości: null, true, false,
-wyświetla w konsoli podane niżej informacje i wykorzystuje do tego strukturę switch. Jeśli drugi parametr to:
    null => Podany argument [tutaj jej wartość] nie jest liczbą
    true => Podany argument [tutaj jej wartość] jest parzysty
    false => Podany argument [tutaj jej wartość] jest nieparzysty
*/

function showInfo(para1, para2) {
    switch (para2) {
        case null:
            console.log('Podany argument ' + para1 + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + para1 + ' jest parzystybą');
            break;
        case false:
            console.log('Podany argument ' + para1 + ' jest nieparzysty');
            break;
    }
}

showInfo(sum, even);