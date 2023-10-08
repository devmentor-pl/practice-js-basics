// function creating array with 20 random numbers
const createArray = (min, max) => {
	let numbers = []
	for (let i = 1; i <= 20; i++) {
		const randomNumber = Math.round(Math.random() * (max - min) + min)
		numbers.unshift(randomNumber)
	}
	return numbers
}

const arr = createArray(10, 200)
console.log(arr)

// function taking 10 biggest numbers from array
const getTenLargestNumbers = arrToSort => {
	arrToSort.sort((a, b) => a - b)
	const sortArray = arrToSort.slice(10, 20)
	return sortArray
}

const largest = getTenLargestNumbers(arr)
console.log(largest)

// function summing 10 biggest numbers and making average
const getAverage = arrToAverage => {
	let total = 0
	let count = 0

	arrToAverage.forEach(element => {
		total += element
		count++
	})
	console.log(`Total = ${total}`)
	return total / count
}

const avg = getAverage(largest)
console.log(avg)
