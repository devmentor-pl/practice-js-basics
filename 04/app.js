// 1
const arr = createArray(1, 100);
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
        array.sort((a, b) => a - b);
}

console.log(getLargestNumber(arr));


