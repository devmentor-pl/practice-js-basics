function getSum(a, b, c) {
  a = parseInt(a)
  b = parseInt(b)
  c = parseInt(c)

  const nums = [a, b, c].sort((a, b) => b - a)
  return nums[0] + nums[1]
}

const isEven = (num) => {
  if (typeof num !== "number") return null
  return num % 2 === 0
}

function showInfo(value, isNumEven) {
  switch (isNumEven) {
    case null:
      console.log(`Podany argument ${value} nie jest liczbą`)
      break
    case true:
      console.log(`Podany argument ${value} jest parzysty`)
      break
    case false:
      console.log(`Podany argument ${value} jest nieparzysty`)
      break
  }
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

const min = 1
const max = 100

const a = randomNumber(min, max)
const b = randomNumber(min, max)
const c = randomNumber(min, max)

console.log(a, b, c) //tutaj losowane liczby

const sum = getSum(a, b, c)
console.log(sum) //sum 2 najwiekszych liczb

const even = isEven(sum)

showInfo(sum, even)
