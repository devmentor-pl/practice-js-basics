
const randomRange = (min, max) => {
    const arr = []
    for (i = 0; i < 20; i++) {
        let random = Math.round(Math.random() * (max - min) + min)
        arr.push(random)
    }
    return arr
}
const sorting = arr => arr.sort((a, b) => b - a).slice(0, 10)
const showAverage = arr => arr.reduce((a, b) => (a + b)) / arr.length

const randomNumbers = randomRange(10, 200)
const sortedNums = sorting(randomNumbers)

console.log(sortedNums)
console.log(showAverage(sortedNums))


