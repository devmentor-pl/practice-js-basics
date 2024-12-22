const a = "4.2";
const b = 9;

console.log(a, b);

console.log("Typem zmienne b jest:", typeof b);
console.log("Typem zmienne a jest:", typeof a);

const result1 = Number(a) + Number(b);
const result2 = Number(a) - Number(b);
const result3 = Number(a) * Number(b);
const result4 = Number(a) / Number(b);
const result5 = Number(a) % Number(b);

console.log(
  result1 > 20 ? "Result1 is greater than 20" : "Result1 is less than 20"
);
console.log(
  result2 > 20 ? "Result2 is greater than 20" : "Result2 is less than 20"
);
console.log(
  result3 > 20 ? "Result3 is greater than 20" : "Result3 is less than 20"
);
console.log(
  result4 > 20 ? "Result4 is greater than 20" : "Result4 is less than 20"
);
console.log(
  result5 > 20 ? "Result5 is greater than 20" : "Result5 is less than 20"
);
