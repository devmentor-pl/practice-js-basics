const a = "4.2"
const b = 9

console.log(a, b)
// console.log(parseFloat(a), Number(a + "s")) //test zamiany w liczbę

console.log(`Typ zmiennej dla a: ${typeof a}`)
console.log(`Typ zmiennej dla b: ${typeof b}`)

const adding = parseFloat(a) + b
console.log(adding)

const subtract = parseFloat(a) - b
const subtract2 = a - b
console.log(subtract, subtract2)
//-4.8, -4.8 ->automatyczna konwersja przy odejmowaniu na `number`

const multiply = parseFloat(a) * b
console.log(multiply.toFixed(2)) //37.80 tu jest w postaci string
console.log(Number(multiply.toFixed(2))) //37.80 tu jest w postaci string

const division = a / b
//przy dzieleniu ponownie automatyczna zamiana na 'number'
console.log(division)

const results = [adding, subtract, multiply.toFixed(2), division]

results.forEach((num, index) => {
  if (num > 20) {
    console.log(
      `The result of the operation number ${
        index + 1 //+1, żeby liczyć jako operacje a nie od indexu
      } (${num}) is greater than 20.`
    )
  } else {
    console.log(
      `The result of the operation number ${
        index + 1
      } (${num}) is less than 20.`
    )
  }
})
