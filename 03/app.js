const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);


console.log(a, b, c);
const sum =  getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    let bigger1;
    let bigger2;
    let smaller;
    if(a > b ) {
        bigger1 = a;
        smaller = b;
    } else {
        bigger1 = b;
        smaller = a;
    }
    if(bigger1 < c) {
        bigger2 = c;
    } else {
        if(smaller < c) {
            bigger2 = c;
        } else {
            bigger2 = smaller;
        }

    }
        return bigger1 + bigger2;

}

function isEven(sum) {
    if(typeof(sum) === 'number') {
        if(sum % 2 === 0) {
            return true;
        } else {
            return false;
        }
    } else if(typeof(sum) !== 'number')
    return null;
}

function showInfo(sum, even) {
    switch(even) {
        case null:
            console.log('Podany argument: '+sum+' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument: '+sum+' jest liczbą parzystą')
            break;
        case false:
            console.log('Podany argument: '+sum+' jest liczbą nieparzystą')
            break;
        default:
            console.log('Błędne dane. Sprawdź wszystko jeszcze raz');
            break;
    }
}