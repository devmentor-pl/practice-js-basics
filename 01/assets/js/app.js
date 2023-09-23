const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b);

const aNumerical = parseFloat(a);

const allOperations = [];

allOperations[0] = aNumerical + b;
allOperations[1] = aNumerical - b;
allOperations[2] = aNumerical * b;
allOperations[3] = aNumerical ** b;
allOperations[4] = aNumerical / b;
allOperations[5] = aNumerical % b;
allOperations[6] = a + b;

allOperations.forEach(function(num) {
    
    if (typeof num === 'number') {
        console.log(num.toFixed(2));
    } else {
        const numFromString = parseFloat(num);
        console.log(numFromString.toFixed(2));
    }

})

allOperations.forEach(function(num) { 
    if (typeof num === 'number') {
        if (num > 20) {
            console.log(num.toFixed(2) + ' większy od 20');
        } else {
            console.log(num.toFixed(2) + ' mniejszy od 20');
        }
    } else {
        const numFromString = parseFloat(num);
        if (numFromString > 20) {
            console.log(numFromString.toFixed(2) + ' większy od 20');
        } else {
            console.log(numFromString.toFixed(2) + ' mniejszy od 20');
        }
    }
})

