function createArray(min, max) {
    let array = [];

    for (let i = 0; i < 20; i++) {
        const num = Math.round((Math.random() * (max - min)) + min);
        array.push(num)
    }
    return array;
}

const newArray = createArray(10, 200)
console.log(newArray);



function sortArr(array) {
    array.sort(function (a, b) {
        return b - a;
    });


    return array.slice(0, 10);
}

const sortArray = sortArr(newArray);
console.log(sortArray)


function calculate(arr) {

    let sum = 0;
    arr.forEach(function (num) {
        sum += num;
    });

    const avg = sum / arr.length;
    return avg;

}

const avg = calculate(sortArray);
console.log(avg);