console.log("Hello World");

const min = 1;
const max = 200;

const generateArrayNumber = () => {
    const array = []

    for (let i = 0; i < 20; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomNumber);
    }
    return array;

};

const randomArray = generateArrayNumber(min, max);

const getLargest = (randomArray) => {
    const sortedArray = randomArray.sort((a, b) => b - a);
    const largest = sortedArray.slice(0, 10);
    return largest;
};

const largest = getLargest(randomArray);

const getAverage = (numbers) => {
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    });
    const average = sum / largest.length;
    return average;
}

const average = getAverage(largest);
console.log(average);
