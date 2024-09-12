const random = function getRandomNumbers(min, max) {
    let arr = [];
    let randomNumber = 0;

    for (let i = 0; i < 20; i++) {

        randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);

        arr.push(randomNumber);



    }
    return arr;

}



const largest = function getLargest(param) {
    let largestNumb = 0;
    let result = 0;

    largestNumb = param.sort(function (a, b) {
        return a - b;
    });

    result = largestNumb.slice(0, 10);

    return result;


}



const avg = function getAvg(param) {

    let result = 0;
    let arrayLength = 0;
    arrayLength = param.length;

    param.forEach(function (param1) {
        result = result + param1 / arrayLength;


    });


    return result;

}


console.log(avg(largest(random(10,200))));

