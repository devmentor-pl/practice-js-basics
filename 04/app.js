// 1
const arr = createArray(20, 200);
console.log(arr);

function createArray (min, max) {
        let arraySample = [];
        for (let i = 0; i < 20; i++) {
                arraySample.push(Math.round(Math.random() * (max - min) + min))
        }
        return arraySample;
}

// 2
getLargestNumber = (array) => {
       return array.sort((a, b) => b - a).slice(0, 10)
}

const arrayForAverage = getLargestNumber(arr);
console.log(arrayForAverage);
// 3

getArithmeticAverage = (array) => {
        let result = 0;
        array.forEach(item => {
                result = result + item;
        })
        return `wynik działania arytmetycznego wynosi ${result / 10}`;
}

console.log(getArithmeticAverage(arrayForAverage));


