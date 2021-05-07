const createArr = (min, max) => {
    const arr = [];
    for (let i=0; i<20; i++) {
        arr.push(Math.round(Math.random() * (max - min) + min));
    }
    return arr;
}

const getLargest = (arr) => {
    const compareNum = (a,b) => a-b; 
    sortedArr = arr.sort(compareNum).reverse();
    return sortedArr.slice(0,10);
}

const getAvg = (arr) => {
    return arr.reduce((prev, curr) => prev + curr, 0)/arr.length;
}

const arr = createArr(1,100);
console.log(arr);

const largest = getLargest(arr);
console.log(largest);

const avg = getAvg(largest);
console.log(avg)

