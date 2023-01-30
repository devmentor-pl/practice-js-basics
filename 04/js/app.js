function createArray(min, max) {
	const numberArr = []

	for (let i = 1; i <= 20; i++) {
		const randomNum = Math.round(Math.random() * (max - min) + min)
		numberArr.push(randomNum)
	}

	return numberArr
}

const arr = createArray(10, 200)
console.log(arr)

function getLargest(arr) {
	const sortArr = arr.sort((a, b) => {
		return b - a
	})
	return sortArr.slice(0, 10)
}

const largest = getLargest(arr)
console.log(largest)

function getAvg(arr) {
	let avg = 0
	arr.forEach((el) => {
		avg = el + avg
	})
	return avg / arr.length
}

const avg = getAvg(largest)
console.log(
	`Średnia arytmetyczna 10 największych liczb z tablicy: ${avg.toFixed(0)}`
)
