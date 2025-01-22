const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

const numA = parseFloat(a);

const res1 = numA + b;
const res2 = numA - b;
const res3 = numA * b;
const res4 = numA / b;
const res5 = numA % b;
let res6 = numA ;
res6++;
let res7 = b;
res7++;
let res8 = numA ;
res8--;
let res9 = b;
res9--;

if(res1 > 20) {
    console.log('Wynik ' + res1 + ' jest wiekszy od 20!');
} else {
    console.log('Wynik ' + res1 + ' nie jest większy od 20!');
}

if(res2 > 20) {
    console.log('Wynik ' + res2 + ' jest wiekszy od 20!');
} else {
    console.log('Wynik ' + res2 + ' nie jest większy od 20!');
}

if(res3 > 20) {
    console.log('Wynik ' + res3 + ' jest wiekszy od 20!');
} else {
    console.log('Wynik ' + res3 + ' nie jest większy od 20!');
}

if(res4 > 20) {
    console.log('Wynik ' + res4 + ' jest wiekszy od 20!');
} else {
    console.log('Wynik ' + res4 + ' nie jest większy od 20!');
}

if(res5 > 20) {
    console.log('Wynik ' + res5 + ' jest wiekszy od 20!');
} else {
    console.log('Wynik ' + res5 + ' nie jest większy od 20!');
}


console.log(res1, res2, res3, res4, res5, res6, res7, res8, res9);

// nie wiem czy do końca chodziło o to rozwiązanie, 
// wyniki się zgadzają, ale wydaje mi się, że można by
// przypisać funkcję z instrukcją warunkową w jej ciele
// i wtedy zajęło by to o wiele mniej linijek kodu

// np:

// function checkResult(resultNumber, result) {
//     if(result > 20) {
//         console.log(resultNumber + ' jest większy od 20!');
//     } else {
//         console.log(resultNumber + ' nie jest większy od 20!');
//     }
// }

// checkResult(`Wynik ${res1}`, res1);
// checkResult(`Wynik ${res2}`, res2);
// checkResult(`Wynik ${res3}`, res3);
// checkResult(`Wynik ${res4}`, res4);
// checkResult(`Wynik ${res5}`, res5);

