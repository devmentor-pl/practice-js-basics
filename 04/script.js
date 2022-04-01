console.log('zad-4')
const n = 20

console.log('----- create Array of 20 random numbers from range 1-200 -----')
const arr = createArr(1,200)
console.log(arr)

console.log('----- get 10 largest numbers -----')
const largest = getLargest(arr) 
console.log(largest)

console.log('----- arithmetic average of the 10 larget numbers-----')
const avg = getAvg(largest)
console.log('average', avg)

// functions
function createArr(min, max) {
    let arr = []
    for(let i=0; i<n; i++) {
        let = random = Math.round((Math.random() * (max - min)) + min)
        arr.push(random)
    }
    return arr
}

function getLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    })
    console.log(arr)
    return arr.slice(0, 10)
}

function getAvg(arr) {
    console.log(arr)
    let sum = 0
    sum = arr.reduce(function(prev, next) {
        return prev + next
    }, 0)
    return sum / arr.length
}





