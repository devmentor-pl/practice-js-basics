const createArr = (min, max) => {
  if (typeof min === "undefined" || typeof max === "undefined") {
    return 'You did not choose any numbers'
  } else {
    let arr = [];
  for (i = 0; i < 20; i++) {
    let num = Math.round(Math.random() * (max - min)) + min;
    arr.push(num)
  }
    return arr
  }
}

const getLargest = (arr) => {
  return arr.sort((a, b) => b - a).slice(0, 3)
}

const getAvg = (arr) => {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}

const newArr = createArr(10, 200);
console.log(`Here are our numbers: ${newArr}`)
console.log(getAvg(getLargest(newArr)));
