const a = "4.2";
const b = 9;

// 1
console.log(typeof a);
console.log(typeof b);
console.log(a, b);

// 2
const sum1 = +a + b;
const sum2 = a - b;
const sum3 = (a * b).toFixed(2);
const sum4 = (a / b).toFixed(2);
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);

// 3
const results = [sum1, sum2, sum3, sum4];
for (let i = 0; i < results.length; i++) {
  console.log(
    `${results[i]} jest ${results[i] > 20 ? "większe" : "mniejsze"} niż 20`
  );
}
