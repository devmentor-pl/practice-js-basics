function createArray(min, max) {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    let number = Math.round(Math.random() * (max - min) + min);
    arr.push(number);
  }
  return arr;
}

const arr = createArray(1, 200);
console.log(arr);
