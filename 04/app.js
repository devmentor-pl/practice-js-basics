
const randomElem = (min, max) => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
        const result = Math.floor(Math.random() * (max - min + 1) + min);
        arr.push(result);
    }
    return arr;
}

const arr = randomElem(1, 100);
console.log(arr);


const sortNumbers = (numbers) => {
    if (!Array.isArray(numbers)) {
        return null;
    }

    numbers.sort((a, b) => b - a);

    return numbers;
}

const getLargest = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const sortedArr = sortNumbers(arr);
    return sortedArr.slice(0, 10);
}

const largest = getLargest(arr);
console.log(largest); 


const getAvg = (numbers) => {

    // sprawdzenie, czy numbers jest tablicą oraz czy tablica nie jest pusta. Jeśli nie jest tablicą lub jest pusta, funkcja zwraca null.

    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }

    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    })
    return sum / numbers.length
}

const avg = getAvg([1, 2, 3, 4, 5]);
console.log(avg); // 3