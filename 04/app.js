function createArray(min, max) {
    const randomArr = [];

    function createRandomNumber(pMin, pMax) {
        return Math.round((Math.random() * (pMax - pMin)) + pMin);
    }

    for (let i = 0; i < 20; i++) {
        randomArr.push(createRandomNumber(min, max));
    }
    console.log("created array: ", randomArr);
    return randomArr;
}

function getLargest(array) {
    const sortedSliced = array.sort((a, b) => a - b).slice(10);
    console.log("sorted and sliced: ", sortedSliced);
    return sortedSliced;
}

function getAvg(array) {
    const average = (array.reduce((a, b) => a + b)) / (array.length);
    console.log("average: ", average);
    return average;
}

const arr2 = createArray(10, 200);
const largest2 = getLargest(arr2);
getAvg(largest2);