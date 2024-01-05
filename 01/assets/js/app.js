const a = '4.2'
const b = 9

console.log(a, b)

console.log(`Zmienna a to ${typeof a}`)
console.log(`Zmienna b to ${typeof b}`)

let c = parseFloat(a)

const addition = c + b
console.log(addition)

const subtraction = a - b
console.log(subtraction)

const multiplication = a * b
console.log(multiplication)

const exponentiation = a ** b
console.log(exponentiation)

const division = a / b
console.log(division)

const modulus = a % b
console.log(modulus)

console.log(addition > 20 ? 'wynik dodawania jest większy niż 20' : 'wynik dodawania jest mniejszy niż 20')

console.log(subtraction > 20 ? 'wynik odejmowania jest większy niż 20' : 'wynik odejmowania jest mniejszy niż 20')

console.log(multiplication > 20 ? 'wynik mnożenia jest większy niż 20' : 'wynik mnożenia jest mniejszy niż 20')

console.log(exponentiation > 20 ? 'wynik potęgowania jest większy niż 20' : 'wynik potęgowania jest mniejszy niż 20')

console.log(division > 20 ? 'wynik dzielenia jest większy niż 20' : 'wynik dzielenia jest mniejszy niż 20')

console.log(modulus > 20 ? 'wynik reszty jest większy niż 20' : 'wynik reszty jest mniejszy niż 20')
