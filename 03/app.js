const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

// function getSum(a, b, c) {
//     const aInt = parseInt(a);
//     const bInt = parseInt(b);
//     const cInt = parseInt(c);

//     const arr = [aInt, bInt, cInt]
//     arr.sort(function(a, b) {
//         return b - a;
//     });
//     return arr[0] + arr[1];
// }

// const sum = getSum(a, b, c);
// console.log(sum);


function getSum(a, b, c) {
    const aInt = parseInt(a);
    const bInt = parseInt(b);
    const cInt = parseInt(c);

    return (aInt + bInt + cInt) - Math.min(a, b, c);
}

// const sum = getSum(a, b, c);
// console.log('Sum of two bigest numbers is ' + sum);



// const evenNumber = function isEven(number) {
//     if(number % 2 == 0) {
//         console.log('True - The given number is even.');
//     }
//     else {
//         console.log('False - The given number id odd.')
//     }
// }

// evenNumber(a);


const isEven = function(number) {

    if(typeof number !== 'number') {
        return null
    }
    
    return number % 2 === 0;
}

// console.log(isEven(a), isEven(2), isEven(7), isEven('ahjbdsc'));



function showInfo(value, x) {
    switch(x) {
        case null:
            console.log('Podany argument ' + value + 'vnie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + value + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + value + ' jest nieparzysty');
            break;
    }
}


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);