let array = [];

function createArray(min, max) {


    for (let i = 0; i < 20; i++) {
        const num = Math.round((Math.random() * (max - min)) + min);
        array.push(num)
    }
    return array;
}

const newArray = createArray(10, 200)
console.log(newArray)



function sortArr(newArray) {
    newArray.sort(function (a, b) {
        return a - b;
    })

}

const sortArray = sortArr(array);
console.log(array)


function calculate() {

    const arrAvg = array => array.reduce((a, b) => a + b, 0);

    const sum = arrAvg / array.length;
    console.log(sum);


}

calculate(array)