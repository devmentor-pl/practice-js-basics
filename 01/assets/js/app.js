const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b)

const sum = parseFloat(a)+ parseFloat(b)
const subtract = parseFloat(a)-parseFloat(b)
const multiply = parseFloat(a)*parseFloat(b)
const divide = parseFloat(a)/parseFloat(b)

console.log(sum, subtract, multiply.toFixed(2), divide.toFixed(2))


const arr = [sum, subtract, multiply, divide]

for(const key in arr){
    if (arr[key]>20){
        console.log(arr[key] , ' jest większe od 20')
    } else{ 
        console.log(arr[key] , ' jest mniejsze lub równe 20')
    }
}