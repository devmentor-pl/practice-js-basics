const a = Number('4.2');
const b = 119;
let sum=a+b
console.log(sum);
let minus=a-b
console.log(minus);
let multiplication=a*b
console.log(multiplication);
let divide=a/b
console.log(divide);
let modulo=a%b
console.log(modulo);

const resultsArray=[sum,minus,multiplication,divide,modulo]
resultsArray.forEach(function(num) {
    if(num>20){
        console.log(`${num}+"wieksze"`)
    }else{
        console.log(`${num}+"mniejsze`)
    }
})
