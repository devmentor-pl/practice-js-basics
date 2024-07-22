
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


    // Funkcja generująca tablicę losowych liczb
function generateRandomArray(size, lowerBound, upperBound) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    let randomNum = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
    arr.push(randomNum);
  }
  return arr;
}

// Funkcja wybierająca n największych elementów z tablicy
function getTopNElements(arr, n) {
  return arr.sort((a, b) => b - a).slice(0, n);
}

// Funkcja obliczająca średnią arytmetyczną elementów w tablicy
function calculateAverage(arr) {
  let sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

// Główna część programu
let randomArray = generateRandomArray(20, 10, 200);
console.log("Wygenerowana tablica:", randomArray);

let top10Numbers = getTopNElements(randomArray, 10);
console.log("10 największych liczb:", top10Numbers);

let average = calculateAverage(top10Numbers);
console.log("Średnia arytmetyczna 10 największych liczb:", average);

