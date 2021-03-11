const a = '4.2';
const b = 9;

console.log(a, b);
console.log(`Zmienna a jest typu: ${typeof a}, a zmienna b typu ${typeof b}`);

const addition = Number(a) + b
const subtraction = Number(a) - b;
const multiplication = Number(a) * b;
const division = Number(a)/b;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);

function checkIfConstIsMoreThan(score, moreThan = 20) {
    return score > moreThan ? `${score} jest większe od ${moreThan}` : `${score} jest mniejsze od ${moreThan}`
}

console.log(checkIfConstIsMoreThan(addition));
console.log(checkIfConstIsMoreThan(subtraction));
console.log(checkIfConstIsMoreThan(multiplication));
console.log(checkIfConstIsMoreThan(division));
