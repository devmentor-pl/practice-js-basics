// #1
function createArray(min, max) {
    let array = [];
    for(let i = 0; i < 20; i++) {
        array.push(Math.round((Math.random() * (max - min)) + min))
    }
    return array;
}

// #2
function getLargest(item){
    item.sort(function(a, b) {
        return b - a;
    });

    return item.slice(0, 10);
};

// #3
function avgNum(items) {
    let sum = 0;
    items.forEach(function(num){
        sum += num
    })
    
    return sum / items.length;
}

// #4

const arr = createArray(10, 200);
console.log(arr)

const slicedArr = getLargest(arr);
console.log(slicedArr)

const averageArr = avgNum(slicedArr);
console.log(averageArr);