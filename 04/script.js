console.log('zad-4')
const n = 20

function createArr(min, max) {
    let arr = []
    for(let i=0; i<n; i++) {
        let = random = Math.round((Math.random() * (max - min)) + min)
        console.log(random)
        arr.push(random)
    }
    return arr
}
const arr = createArr(1,100)
console.log(arr)


function getLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    })
    console.log(arr)
    return arr.slice(0, 10)
}
const largest = getLargest(arr) 
console.log(largest)

function getAvg(arr) {
    console.log('getAvg')
    console.log(arr)
    let sum = 0
    sum = arr.reduce(function(prev, next) {
        return prev + next
    }, 0)
    return sum / arr.length
}
const avg = getAvg([1,2,3,4,5])
console.log(avg)

