const a = "4.2";
const b = 9;

console.log(`${a} => ${typeof a} | ${b} => ${typeof b}`);

const addition = roundNumToOneDecimal(Number(a) + Number(b));
const subtraction = roundNumToOneDecimal(Number(a) - Number(b));
const multiplication = roundNumToOneDecimal(Number(a) * Number(b));
const division = roundNumToOneDecimal(Number(a) / Number(b));
const exponentiation = roundNumToOneDecimal(Number(a) ** +Number(b));
const modulus = roundNumToOneDecimal(Number(a) % Number(b));

checkNum(addition);
checkNum(subtraction);
checkNum(multiplication);
checkNum(division);
checkNum(exponentiation);
checkNum(modulus);

function checkNum(num) {
  console.log(num);
  if (isNaN(num)) {
    console.log("Please enter for a and b only numbers!");
    return;
  }
  num > 20 ? textMore(num) : textLess(num);
}

function roundNumToOneDecimal(num) {
  return Math.round(num * 10) / 10;
}
function textMore(num) {
  console.log(`${num} is more then 20.`);
}
function textLess(num) {
  console.log(`${num} is less then 20.`);
}
