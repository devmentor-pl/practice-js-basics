const createArr = function (min, max) {
    let arr = [];
    for (let i = 0; i < 20; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      arr.push(randomNumber);
    }
    return arr;
  };