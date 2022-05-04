function randomNumbers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let random20 = [];
    for (let i = 1; i <= 20; i++) {

        random20.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return random20;
}



function top10(arr) {
    const arrSorted = arr.sort(function(a, b) {
        return a - b;
    });

    return arrSorted.slice(9, 19);

}



function getAvg(arr) {
    const totalSum = arr.reduce(function(previous, current) {
        return previous + current;
    }, 0);
    const avarage = totalSum / arr.length;
    return avarage;
}

const random = randomNumbers(10, 200);
console.log(random);
console.log(top10(random));
console.log(getAvg(top10(random)));