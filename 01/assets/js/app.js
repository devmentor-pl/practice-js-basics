const a = '4.2';
const b = 9;
const results = [];

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const num_a = (typeof a === 'string') ? parseFloat(a) : a;
const num_b = (typeof a === 'string') ? parseFloat(b) : b;

results.push(num_a + num_b);
results.push(a - b);
results.push(a * b);
if (b!==0) results.push(a / b);
results.push(a % b);

for (let i=0; i<results.length; i++){
    if (results[i]>20){
         console.log(results[i]+" Wynik większy od 20")
    }
    else
    {   
        console.log(results[i]+" Wynik mniejszy od 20")
    }
}

