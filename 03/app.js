const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);







function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}


function getSum(a, b, c) {
    const num1 = Math.floor(a)
    const num2 = Math.floor(b)
    const num3 = Math.floor(c)

    let largestNumber = Math.max(num1, num2, num3)
    let middleNumber

    if(largestNumber === num1) {
        middleNumber = Math.max(num2, num3)
    } else if (largestNumber === num2) {
        middleNumber = Math.max(num1, num3)
    } else {
        middleNumber = Math.max(num1, num2)
    }
    return largestNumber + middleNumber
}



const isEven = function(number) {
    if(typeof number !== 'number') {
        return null
    }
    return number % 2 === 0
}



function showInfo(anyValue, specificValue) {
    switch(specificValue) {
        case null:
            console.log('Podany argument ' + anyValue + ' nie jest liczbą!');
            break
        case true:
            console.log('Podany argument ' + anyValue + ' jest parzysty!');
            break
        case false:
            console.log('Podany argument ' + anyValue + ' jest nieparzysty!');
            break
        default:
            console.log('Nieprawidłowa wartość!');            
    }
}

const sum = getSum(a, b, c)
console.log(sum);

const even = isEven(sum)
console.log(even);

showInfo(sum, even)