const a = '4.2';
const b = 9;

console.log(a, b);



console.log(typeof a);  
console.log(typeof b); 

const sum = Number(a) + b;        
const difference = Number(a) - b; 
const multiplication = Number(a) * b;    
const division = Number(a) / b; 
const modulo = Number(a) % b; 
const exponentiation = Math.pow(Number(a), b); 


console.log("Suma: " + sum);           
console.log("Różnica: " + difference); 
console.log("Iloczyn: " + multiplication);   
console.log("Iloraz: " + division);   
console.log("Reszta: " + modulo);  
console.log("Potęga: " + exponentiation); 

if (sum > 20) {
    console.log('Suma jest większa niż 20');
} else {
    console.log('Suma jest mniejsza lub równa 20');
}

if (difference > 20) {
    console.log('Różnica jest większa niż 20');
} else {
    console.log('Różnica jest mniejsza lub równa 20');
}

if (multiplication > 20) {
    console.log('Iloczyn jest większy niż 20');
} else {
    console.log('Iloczyn jest mniejszy lub równy 20');
}

if (division > 20) {
    console.log('Iloraz jest większy niż 20');
} else {
    console.log('Iloraz jest mniejszy lub równy 20');
}

if (modulo > 20) {
    console.log('Reszta jest większa niż 20');
} else {
    console.log('Reszta jest mniejsza lub równa 20');
}

if (exponentiation > 20) {
    console.log('Potęga jest większa niż 20');
} else {
    console.log('Potęga jest mniejsza lub równa 20');
}