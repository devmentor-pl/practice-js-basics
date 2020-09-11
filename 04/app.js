const createArr = (min, max) => {
  let arr = [];
  for (i = 0; i < 20; i++) {
    let num = Math.ceil((Math.random() * max - min) + min);
    arr.push(num)
  }
  return arr
}

const getLargest = (arr) => {
  return arr.sort((a, b) => b - a).slice(0, 3)
}

const getAvg = (arr) => {
  return arr.reduce((a, b) => a + b) / arr.length
}

const newArr = createArr(10, 200);
console.log(`Here are our numbers: ${newArr} and their arithmetic average is...`)
console.log(getAvg(getLargest(newArr)));
