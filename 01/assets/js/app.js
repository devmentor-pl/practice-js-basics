const a = '4.2';
const b = 9;

console.log(typeof a, typeof b);

const sum = parseFloat(a) + b ;
const subtraction = a - b;
const multiplication =  a*b;
const division = a/b;
const modulo = a%b;

checkTwenty(sum);
checkTwenty(subtraction);
checkTwenty(multiplication);
checkTwenty(division);
checkTwenty(modulo);

function checkTwenty (operation) {
    operation > 20 ? console.log(true) : console.log(false);
}