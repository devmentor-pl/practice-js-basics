const arr = createArray(10, 200)
const largest = getLargest(arr)
const avg = getAvg(largest)
console.log(arr)
console.log(largest)
console.log(
	`Średnia arytmetyczna 10 największych liczb z tablicy: ${avg.toFixed(0)}`
)

function createArray(min, max) {
	const numbersArr = []

	for (let i = 1; i <= 20; i++) {
		const randomNum = Math.round(Math.random() * (max - min) + min)
		numbersArr.push(randomNum)
	}

	return numbersArr
}

function getLargest(arr) {
	const sortArr = arr.sort((a, b) => {
		return b - a
	})
	return sortArr.slice(0, 10)
}

function getAvg(arr) {
	let avg = 0
	arr.forEach((el) => {
		avg = el + avg
	})
	return avg / arr.length
}
