function createArray (min, max) {
    const result = [];

    for (let i = 0; i < 20; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        result.push(randomNumber);
    }

    return result;
}

const arr = createArray(1, 100);
console.log(arr);