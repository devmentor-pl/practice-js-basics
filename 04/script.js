const min = 1 // minimalna liczba
const max = 100 // maksymalna liczba

function createRandomArrey(minimum, maximum) {
	const randomArrey = []

	for (let i = 0; i < 20; i++) {
		const number = Math.floor(Math.random() * (maximum - minimum))
		randomArrey.push(number)
	}
	return randomArrey
}

const randomArray = createRandomArrey(min, max)
console.log(randomArray)

const sortArray = randomArray.sort(function (a, b) {
	// sortowanie od największej
	// do najmniejszej wartości
	return b - a
})
console.log(sortArray)

const sortArrayTen = sortArray.slice(0, 10)
console.log(sortArrayTen)

function calculateAvg(calc) {
	let sum = 0
	calc.forEach(n => {
		sum += n
	})
	const answer = sum / calc.length
	return answer
}
const aritmeticAve = calculateAvg(sortArrayTen)
console.log(aritmeticAve)

const minFour = 10
const maxFour = 200

const taskFour = createRandomArrey(minFour, maxFour)
console.log(taskFour)

const taskFourMax = taskFour.sort(function (a, b) {
	// sortowanie od największej
	// do najmniejszej wartości
	return b - a
})
console.log(taskFourMax)
const taskFour10 = taskFour.slice(0, 10)
console.log(taskFour10)

const taskFourAve = calculateAvg(taskFour10)
console.log(taskFourAve)
