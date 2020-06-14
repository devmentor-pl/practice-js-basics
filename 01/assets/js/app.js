const a = '4.2';
const b = 9;

// console.log(a, b);

console.log('a jest:' + ' typem ' + typeof a)
console.log('b jest: ' + 'typem ' + typeof b)



const add = Number(a) + b;
console.log(add)

const multiplication = Number(a) * b;
console.log(multiplication.toFixed(2))

const divide = Number(a) / b;
console.log(divide.toFixed(2))

const modulo = Number(a) % b;
console.log(modulo)


const checkNumbers = function () {
    const checkAdd = add > 20 ? 'wynik add jest większy od 20' : 'wynik add jest mniejszy od 20';
    console.log(checkAdd)

    const checkMultiplication = multiplication > 20 ? 'wynik multiplication  jest większy od 20' : 'wynik multiplication jest mniejszy od 20';
    console.log(checkMultiplication)

    const checkDivide = divide > 20 ? 'wynik divide  jest większy od 20' : 'wynik divide  jest mniejszy od 20';
    console.log(checkDivide)

    const checkModulo = modulo > 20 ? 'wynik modulo jest większy od 20' : 'wynik modulo jest mniejszy od 20';
    console.log(checkModulo)

}


checkNumbers()