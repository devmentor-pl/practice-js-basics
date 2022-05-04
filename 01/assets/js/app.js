const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a,typeof b);


const add = Number(a) + b
const subtract = Number(a) - b
const multiply = Number(a) * b
const divide = Number(a) / b

console.log(add)
console.log(subtract)
console.log(multiply)
console.log(divide)


const tab = [add, subtract, multiply, divide];

tab.forEach(function(num){
    if(num > 20){
        console.log(num + ' jest wieksze od 20')
    }else{
        console.log(num + ' jest mniejsze lub równe')
    }
})