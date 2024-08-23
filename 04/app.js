function createArray(min, max) {
    const array = []
    for(let i = 0; i < 20; i++) {
        const number = Math.round(Math.random() * (max - min) + min)
        array.push(number)
    }
    return array
}

function sortArray(array) {
    array.sort((a,b) => b - a)
    return array.slice(0,10)
}

function arithmeticAvarage(array){
    const arrayLength = array.length
    const sum = array.reduce((acc, curr) => acc + curr)
    const avarage = sum / arrayLength
    return avarage 
}

const RandomArray = createArray(10,200)
console.log(arithmeticAvarage(sortArray(RandomArray)))
