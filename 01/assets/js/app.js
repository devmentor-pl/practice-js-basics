const a = '4.2'
const b = 9

console.log(a, b)

console.log(typeof a)
console.log(typeof b)

const calc1 = Number(a) + b
const calc2 = Number(a) - b
const calc3 = Number(a) * b
const calc4 = Number(a) / b
const calc5 = Number(a) ** b
const calc6= Number(a) % b

console.log(calc1, calc2, calc3, calc4, calc5, calc6)

const arrey = [calc1, calc2, calc3, calc4, calc5, calc6]

console.log(arrey);

arrey.forEach(function (calc) {
    if(arrey.includes(calc > 20)) {
        console.log('Istnieje w tablicy!');
        } else {
        console.log('Brak w tablicy!');
        }   
})

