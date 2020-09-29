const a = '4.2';
const b = 9;
const numA = parseFloat(a);

console.log(a, b);
console.log(typeof a);
console.log(typeof b);
const adding = numA + b;
console.log(adding);
const substraction = numA - b;
console.log(substraction);
const multiplication = numA * b;
console.log(multiplication);
const division = numA / b;
console.log(division);
const exponentiation = numA ** b;
console.log(exponentiation);
const modulo = numA % b;
console.log(modulo);
const arr = [adding, substraction, multiplication, division, exponentiation, modulo]
const func = funcVar(arr);
function funcVar (a) {
    for (i=0; i < a.length; i++) {
    if (a[i] < 20) {
        console.log(a[i],"is less than 20")
    }
    else {
        console.log(a[i],"is greater than 20")
    }
}
}   

    
