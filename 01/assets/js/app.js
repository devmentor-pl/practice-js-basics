const a = "4.2";
const b = 9;

console.log(a, b);

console.log("Typem zmienne b jest:", typeof b);
console.log("Typem zmienne a jest:", typeof a);

const operations = ["+", "-", "*", "/", "%"];

const results = operations.map((operation) => {
  switch (operation) {
    case "+":
      return Number(a) + Number(b);
    case "-":
      return Number(a) - Number(b);
    case "*":
      return Number(a) * Number(b);
    case "/":
      return Number(a) / Number(b);
    case "%":
      return Number(a) % Number(b);
  }
});

results.forEach((result, index) => {
  const operation = operations.at(index);
  console.log(
    `${a} ${operation} ${b} is ${result > 20 ? "greater" : "less"} than 20`
  );
});
