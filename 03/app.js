const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const isEven = isEvenNumber;

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a, b, c) {
    let smallest = 0;
    parseInt(a, b, c);

    if (a < c && a < b) {
        //a jest najmniejsze
        smallest = a;
    }
    else if (b < c) {
        //b najmniejsze
        smallest = b;
    }
    else {
        //c najmniejsze
        smallest = c;
    }

    return (a + b + c - smallest);
}


function isEvenNumber(number) {
    if (typeof number != 'number') return null;
    if (number % 2 == 0) return 1;
    return 0;
}


function showInfo(number, state) {
    switch (state) {
        case null:
            console.log('Podany argument ' + number + ' nie jest liczbą');
            break;
        case 1:
            console.log('Podany argument ' + number + ' jest parzysty');
            break;
        case 0:
            console.log('Podany argument ' + number + ' jest nieparzysty');
            break;
    }
}