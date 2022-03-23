
let randomArray = createArray(10, 200);
let highNumbersArray = getLargest(randomArray);
average(highNumbersArray);


function createArray(min, max) {

    const elementsArray = [];
    for (let i = 0; i < 20; i++) {
        elementsArray.push(Math.round((Math.random() * (max - min)) + min));
    }
    console.log(`Tabela zawierająca 20 losowych liczb z zakresu od ${min} do ${max} to: ${elementsArray}`);
    return elementsArray;
}

function getLargest(array) {
    let result = array.sort(function (a, b) { return a - b }).slice(10, 20);
    console.log(`10 największych wartości z pierwotnej tabeli to: ${result}`);
    return result;
}

function average(array) {

    const initial = 0;
    const sum = array.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initial);

    console.log(`Średnia arytmetyczna liczb wynosi: ${sum / array.length}`);
}
