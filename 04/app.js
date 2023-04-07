
console.log(createArray(2, 5));

function createArray(min, max) {
    let randomNumbers = [];
    for(let i = 0; i < 20; i++) {
        randomNumbers.push(Math.floor(min + Math.random() * (max - min + 1)));
    }
    return randomNumbers;
};

