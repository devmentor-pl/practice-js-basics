const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

const c = Number(a);
console.log(typeof c);

const addNum = c + b;
console.log(addNum);

const diffNum = c - b;
console.log(diffNum);

const multiNum = c * b;
console.log(multiNum);

const divNum = c / b;
console.log(divNum);

const moduloNum = b % c;
console.log(moduloNum);

function compereResult(result) {
  console.log(
    result > 20
      ? `${result} jest większe od 20`
      : `${result} jest mniejsze od 20`
  );
}
compereResult(addNum);
compereResult(diffNum);
compereResult(multiNum);
compereResult(divNum);
compereResult(moduloNum);
