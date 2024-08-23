const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(num1, num2, num3) {
    num1Int = parseInt(num1)
    num2Int = parseInt(num2)
    num3Int = parseInt(num3)
    
    const numbers = [num1Int, num2Int, num3Int]
    numbers.sort((a,b) => b - a)
    const sum = numbers[0] + numbers[1]
    return sum
}

const isEven = (num) => {
    if(isNaN(num)){
        return null
    } else {
        if(num % 2 === 0) {
            return true
        } else return false
    }
}

function showInfo(sum,value) {
    switch(value) {
        case null:
            console.log(`Podany argument ${sum} nie jest liczbą`)
            break
        case true:
            console.log(`Podany argument ${sum} jest parzysty`)
            break
        case false:
            console.log(`Podany argument ${sum} jest nieparzysty`)
    }
}

const sum = getSum(a,b, c)
const even = isEven(sum)
showInfo(sum, even)


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}