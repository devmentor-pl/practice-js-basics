const min = 1;
const max = 100;

const createArray = function(a, b){
    const arr = [];
    
    for(let i = 1; i<=20; i ++){
        const randomNumber = Math.floor(Math.random() * (b - a + 1)  + a);
    
        arr.push(randomNumber);

    }
    return arr;
}

const sortArray = function(arr){
    return arr.sort(function(a, b){
        return a - b;
    }).slice(arr.length - 10 ,arr.length);
    
}

const getAvg = function(arr){
    let sum = 0;

    arr.forEach(function(element){
        sum = sum + element;
    })

    return sum / arr.length;
}

console.log(getAvg(sortArray(createArray(10, 200))));


