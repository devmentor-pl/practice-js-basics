const min = 1;
const max = 100;

const a = getRandomNumber(min, max);
const b = getRandomNumber(min, max);
const c = getRandomNumber(min, max);

console.log('The generated numbers are:' , a, b, c);




const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);


function showInfo(x, y) {


   switch(y) {

    case null:
        console.log('Podany argument' , x , 'nie jest liczbą');
        break;
    case true:
        console.log('Podany argument' , x , 'jest parzysty');
        break;
    case false:
        console.log('Podany argument' , x , 'jest nieparzysty');
        break;
    default:
    alert('Podano błędne dane!');
    break;

   }
}


function isEven(x) {

    const num = x;

    if( typeof num === 'number' ) {
        if( num%2 === 0 ) {
            console.log('Number' , num , 'is even')
            return true
        } else {
            console.log('Number' , num , 'is odd');
            return false;
        }
    } else {
        console.log("It's must be a number")
        return null;
    }
}


function getSum(a,b,c) {

    const parameter1 = parseInt(a);
    const parameter2 = parseInt(b);
    const parameter3 = parseInt(c);

    const arrAlfa = [parameter1, parameter2, parameter3];
    const arrBeta = arrAlfa.slice().sort(function(a, b) {
        return b - a;
    });

    let sum = 0;
    for(let i=0; i<arrBeta.length - 1; i++) {
        sum = sum + arrBeta[i];
    }
    console.log( 'The sum of the two the highest number is:' , sum);
    return sum
}


function getRandomNumber(min, max) {

   const randomNumber = Math.round((Math.random() * (max - min)) + min);
   return randomNumber;
}