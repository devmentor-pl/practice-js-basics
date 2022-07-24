const a = "4.2";
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const result1 = parseFloat(a) + b;
const result2 = parseFloat(a) - b;
const result3 = parseFloat(a) * b;
const result4 = b / parseFloat(a);
const result5 = b % parseFloat(a);

let incNumber = 1;
incNumber++;

let decNumber = 10;
decNumber--;

console.log(
  result1,
  result2,
  Math.floor(result3),
  Math.floor(result4),
  result5,
  incNumber,
  decNumber
);

if (result1 > 20) {
  console.log("Result1 jest większy od 20");
} else {
  console.log("Result1 niestety nie jest większy od 20 :(");
}

if (result2 > 20) {
  console.log("Result2 jest większy od 20");
} else {
  console.log("Result2 niestety nie jest większy od 20 :(");
}

if (result3 > 20) {
  console.log("Result3 jest większy od 20");
} else {
  console.log("Result3 niestety nie jest większy od 20 :(");
}

if (result4 > 20) {
  console.log("Result4 jest większy od 20");
} else {
  console.log("Result4 niestety nie jest większy od 20 :(");
}

if (result5 > 20) {
  console.log("Result5 jest większy od 20");
} else {
  console.log("Result5 niestety nie jest większy od 20 :(");
}
