const a = '4.2';
const b = 9;

console.log(a, b);



console.log(typeof(a), typeof(b))


const sum = Number(a) + b
console.log('sum')
console.log(sum)


const substraction = a - b
console.log('substraction')
console.log(substraction)

const multiplication = a * b
console.log('multiplication')
console.log(multiplication.toFixed(1))

const division = a / b
console.log('division')
console.log(division)

const arr = [sum, substraction, multiplication.toFixed(1), division]

// for(let i = 0; i <= arr.length-1; i++){
//     if (arr[i]>=20){
//     console.log(arr[i] + " większa od 20")
//     }
// else{
//     console.log(arr[i] + " mniejsza lub równe 20")
// }
// }

arr.forEach(function(num) {
    if(num >20 ) {
        console.log(num + " większa od 20")
    } else {
        console.log(num + " mniejsza lub równa 20")
    }
})
    
