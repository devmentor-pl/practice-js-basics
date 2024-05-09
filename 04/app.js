function createArray(min, max) {
  const arr = []

  for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min))
  }

  return arr
}

function getLargest(arr) {
  return arr.sort((a, b) => b - a).slice(0, 10)
}

function getAvg(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
}

const arr = createArray(10, 200)
const largest = getLargest(arr)
const avg = getAvg(largest)

console.log(`Wygenerowana tablica: ${arr}`)
console.log(`10 największych wartości: ${largest}`)
console.log(`Średnia arytmetyczna: ${avg}`)
