// I USED NUMBER IN CODE IN RESULTS - I WANT TO HAVE ONLY NUMBERS NOT STRINGS


const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b);

const result1 = Number(a) + b
console.log(result1);

const result2 = Number(a) - b
console.log(result2);

const result3 = Number(a) * b
console.log(Number(result3.toFixed(1)));

const result4 = Number(a) / b
console.log(result4);

const numbers = [result1, result2, result3, result4]
console.log(numbers);

numbers.forEach(function(num){
    if (num > 20) {
        console.log(num + ' jest większe od liczby 20')
    } else {
        console.log(num + ' jest mniejsze od liczby 20')
    }
})

// FINISHED TASK 01