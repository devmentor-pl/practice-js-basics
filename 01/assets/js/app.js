const a = '4.2';
const b = 9;
// Wynik dodawania był nieprawidłowy, zachodziła konwersja number w string, poprzez 'sztuczkę' z mnożeniem przez 1, niezależnie od tego czy a i b będą string, wynik działania będzie prawidłowy
const sum = a*1 + b*1;
const substract = a-b;
const multi = a*b;
const divide = a/b;
const mod = a%b;
const expo = a**b;

console.log(a, b);
console.log(typeof a, typeof b);

const results = [sum, substract, multi, divide, mod, expo];

console.log(results);

for(let i=0; i<results.length; i++) {
    if(results[i] > 20 ){
        console.log('Wynik większy od 20: ' +results[i]);
    }else console.log('Wynik mniejszy od 20: ' +results[i]);
}


