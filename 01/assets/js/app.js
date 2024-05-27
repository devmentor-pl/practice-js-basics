const a = "4.2";
const b = 9;

console.log(a, b);

const typeA = typeof a;
const typeB = typeof b;

const operation = (item1, item2, operation) => {
  switch (operation) {
    case "+": {
      return +item1 + +item2;
    }
    case "-": {
      return +item1 - +item2;
    }
    case "*": {
      return +item1 * +item2;
    }
    case "/": {
      return +item1 / +item2;
    }
    default: {
      console.log("Incorrect operation");
    }
  }
};

const addResult = operation(a, b, "+");
const substractResult = operation(a, b, "-");
const diverseResult = operation(a, b, "/");
const multiplyResult = operation(a, b, "*");

[addResult, substractResult, diverseResult, multiplyResult].forEach(
  (result) => {
    if (result > 20) {
      console.log("Wynik jest większy niż 20");
    } else {
      console.log("Wynik jest mniejszy bądź równy 20");
    }
  }
);
