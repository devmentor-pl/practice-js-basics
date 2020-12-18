const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);
const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}




// getSum 
function getSum(par1, par2, par3) {
    const arr = [];
    
   arr.push(par1);
   arr.push(par2);
   arr.push(par3);

   const sortedArray= arr.sort(function(a, b) {
       return a - b;
   });

   const largest = Math.max(...sortedArray);
   const nextLargest = sortedArray[sortedArray.length -2];
   
   const sumOfLargestNumber = largest + nextLargest;
   return sumOfLargestNumber;
}

// iseven
function isEven(nr) {
    if(typeof nr !== 'number') {
        return null;
    } else {
        if(nr % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

//showInfo
function showInfo(value, par3) {
    switch (par3) {
        case null:
            console.log(`Podany argument ${value} nie jest liczba`);
            break;
        case true:
            console.log(`Podany argument ${value} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${value} jest nie parzysty`);
            break;
        default:
            console.log(`Something went wrong...`);
    }
}

