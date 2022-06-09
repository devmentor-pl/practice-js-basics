const a = 4;
const b = 25;
const c = 14;

const sum = getSum(a, b, c);

function getSum(a,b,c){
    let sum = a
    sum += sum + b
    sum += sum + c
    return sum 
}

console.log(sum)


const even = isEven(sum);


showInfo(sum, even);