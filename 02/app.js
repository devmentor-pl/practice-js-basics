/* rozwiązanie z pętlą for */
// const x = 4

const x = Number(prompt("Give any number!"))

if (isNaN(x) || x <= 0) {
  console.error("Please enter a digit greater than 0!")
} else {
  for (let i = 1; i <= 9; i++) {
    console.log(`${x} x ${i} = ${x * i}`)
  }
}

/* rozwiązanie z pętlą while  */

// let a = prompt("Specify a base of power(integer): ")
// let n = prompt("Enter power exponent(integer): ")

// a = parseInt(a)
// n = parseInt(n)

// if (isNaN(a) || isNaN(n)) {
//   console.error(
//     "The given data are not a number! Please enter a digit greater than 0!"
//   )
// } else {
//   let result = 1
//   let parts = []

//   let i = 0
//   while (i < n) {
//     result *= a
//     parts.push(a)
//     i++
//   }

//   stringSign = parts.join(" * ") + " = " + result
//   console.log(stringSign)
// }
