const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(first, second, third) {
    first = a;
    second = b;
    third = c;

    let arr = [first, second, third];

    arr = arr.sort(function(a, b) {
        return a - b;
    });;

    console.log(arr);

    const result = arr[2] + arr[1];
    return result;
}

console.log(getSum());

const isEven = function(num) {
    if (typeof num !== 'number') {
        return null;
    } else {
        if (num % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

}
console.log('task 2', isEven('5'));

const showInfo = function(sum, arg) {
    console.log(typeof arg);
    switch (arg) {

        case null:
            console.log('podany argument', sum, 'nie jest liczba');
            break;
        case true:
            console.log('podany argument', sum, 'jest parzysty');
            break;
        case false:
            console.log('podany argumnet', sum, 'jest nieparzysty');
            break;

    }

}
const finalSum = getSum();
console.log(showInfo(finalSum, isEven(finalSum)));