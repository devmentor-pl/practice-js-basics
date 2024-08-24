const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof(a)); console.log(typeof(b))

////operations
const addition = a + b
const subraction = a - b
const multiplication = a * b
const exponentiation = a**b
const division = a / b

function checkAddition(addition) {
    const result  = Boolean(addition === parseFloat(a) + parseFloat(b))
    if(result) {
        return addition
    } else return parseFloat(a) + parseFloat(b)
}

function checkSubtraction(subtraction) {
    const result  = Boolean(subtraction === parseFloat(a) - parseFloat(b))
    if(result) {
        return subtraction
    } else return parseFloat(a) - parseFloat(b)
}
function checkMultiplication(multiplication) {
    const result  = Boolean(multiplication === parseFloat(a) * parseFloat(b))
    if(result) {
        return multiplication
    } else return parseFloat(a) * parseFloat(b)
}
function checkDivision(division) {
    const result  = Boolean(division === parseFloat(a) / parseFloat(b))
    if(result) {
        return division
    } else return parseFloat(a) / parseFloat(b)
}
function checkExponation(exponentiation) {
    const result  = Boolean(exponentiation === parseFloat(a) ** parseFloat(b))
    if(result) {
        return exponentiation
    } else return parseFloat(a) ** parseFloat(b)
}

function isBiggerthan20(result) {
    if(result > 20) {
        console.log('the result is bigger than 20')
    } else console.log('the result is smaller than 20')
}

const allResults = [addition, subraction, multiplication, exponentiation, division]
allResults.forEach(function(result) {
    isBiggerthan20(result)
})





