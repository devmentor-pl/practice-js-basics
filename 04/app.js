console.log('działa!');


function randomArr(min, max) {
    const arr = [];
    for (let i = 1; i < 21; i++) {
        const num = Math.round(Math.random() * (max - min) + min);
        arr.push(num);
    }

    return arr;
}

function getLargest(data) {
    data.sort(function (a, b) {
        return b - a;
    });

    return data.slice(0, 10);
}

function getAvg(nums) {
    let sum = 0;
    nums.forEach(function (n) {
        sum += n;
    });

    return sum / nums.length;
}

const result = randomArr(1, 5);
console.log(result);

const large = getLargest(result);
console.log(large);

console.log(getAvg(large));