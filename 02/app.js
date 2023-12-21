/* rozwiązanie z pętlą for */

const x = prompt('Podaj liczbę');
const num = parseInt(x);

const validNumber = checkPrompt(num);

multiplicationTable(validNumber);

function checkPrompt(num) {
  if (!isNaN(num) && num >= 1 && num <= 9) {
    return num;
  } else {
    num = parseInt(prompt('Twoja liczba musi być w przedziale od 1 do 9'));
    return checkPrompt(num);
  }
}

function multiplicationTable(num) {
  for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

/* rozwiązanie z pętlą while  */

function exponentNumbers() {
  const x = parseInt(prompt('Podaj podstawę od 1 do 9'));
  const validX = checkPrompt(x);
  const n = parseInt(prompt('Podaj wykładnik od 1 do 9'));
  const validN = checkPrompt(n);
  let j = 1;
  let str = validX;
  while (j < validN) {
    j++;
    str += ` * ${validX}`;
  }
  const expNum = validX ** validN;
  console.log(`Wynik potęgowania: ${str} = ${expNum}`);
}
exponentNumbers();
