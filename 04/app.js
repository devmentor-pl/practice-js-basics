const arrRandoms = createRandoms(10,200)
console.log(arrRandoms)
const sortedCutArr = sortAndCut(arrRandoms)
console.log(sortedCutArr)
const avg = getAvg(sortedCutArr)
console.log(avg)

function createRandoms(min, max) {
    let arr = []
    for (let i=0; i<20;i++) {
        arr.push(Math.round((Math.random() * (max - min)) + min))
    }
    return arr
}
function sortAndCut(arr) {
    const sortedCutArr = arr.sort(function(a,b){
        return b - a
    }).slice(0,10)
    return sortedCutArr
}
function getAvg(arr) {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum / arr.length
}