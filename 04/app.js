const arr = createArray(10, 200)
console.log(arr);

const largest = getLargest(arr)
console.log(largest)

const avg = getAvg(largest)
console.log(avg)

function createArray(min, max) {
    let arr = [];

    for (let i = 0; i < 20; i++) {
        const randomNumber = (Math.random() * (max - min) + min).toFixed()
        arr.push(randomNumber)
    }

    return arr
}

function getLargest(arr) {
    const sortArr = arr.sort(function (a, b) { return a - b })
    const largestArr = sortArr.slice(0, 10)

    return largestArr
}

function getAvg(arr) {
    let sum = 0
    arr.forEach(function (item) { sum += Number(item) })

    return sum
}
