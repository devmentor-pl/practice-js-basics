const a = '4.2';
const b = 9;


console.log(typeof a);
console.log(typeof b);

const numberA = parseFloat(a);  

const results = [
    {name: "sumy", result: numberA + b},
    {name: "różnicy", result: numberA - b},
    {name: "iloczynu", result: numberA * b},
    {name: "ilorazu", result: numberA / b},
    {name: "modulo", result: numberA % b},
    {name: "potęgi", result: numberA ** b},
]

results.forEach(item => {
    if(item.result > 20) {
        console.log('wynik ' + item.name + ' to ' + item.result + ' i jest większy niż dwadzieścia');
    } else {
        console.log('wynik ' + item.name + ' to ' + item.result + ' i jest mniejszy niż dwadzieścia');
    }
});


