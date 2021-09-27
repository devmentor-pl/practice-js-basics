const defaultNumbers = function twentyElements(a, b) {

    let arr = [];

    for (let i=1; i<=20; i++) {
        
        arr.push(Math.round((Math.random() * (b - a)) + 1))
    }

    return arr;
}

const randomArrNumbers = defaultNumbers(10, 200);
// console.log(randomArrNumbers);



const sort = function sortFunction(array) {

    array.sort(function(a, b) {
        return b-a;
    })

    const tenNumbersArr = array.slice(0, 10);

    return tenNumbersArr;
}

const tenNumbersArr = sort(randomArrNumbers);
// console.log(tenNumbersArr);


const avg = function average(array) {

    let result = 1; // wcześniej 0
    let arrayLength = array.length;

    array.forEach(function(el) {
        
        result += el;

    });
    
    result /= arrayLength;
    return result;

}

console.log(avg(tenNumbersArr));