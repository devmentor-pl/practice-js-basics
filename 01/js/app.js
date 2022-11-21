const a = "4.2";
console.log(typeof a);

const c = parseInt(a);
console.log(typeof c);

const b = 9;
console.log(typeof b);

let res1 = c + b;
console.log(res1);
console.log(typeof res1);
if (res1 >= 20) {
  console.log("Wygrałeś. Idziesz dalej.");
} else {
  console.log("Czekasz dwie kolejki");
}

let res2 = c - b;
console.log(res2);
if (res2 >= 20) {
  console.log("Wygrałeś. Idziesz dalej.");
} else {
  console.log("Czekasz dwie kolejki");
}

let res3 = c * b;
console.log(res3);
if (res3 >= 20) {
  console.log("Wygrałeś. Idziesz dalej.");
} else {
  console.log("Czekasz dwie kolejki");
}

let res4 = c / b;
console.log(res4);
if (res4 >= 20) {
  console.log("Wygrałeś. Idziesz dalej.");
} else {
  console.log("Czekasz dwie kolejki");
}

let res5 = res4 % 2;
console.log(res5);
if (res5 >= 20) {
  console.log("Wygrałeś. Idziesz dalej.");
} else {
  console.log("Czekasz dwie kolejki");
}

let res6 = res1++;
console.log(res6);
if (res6 >= 20) {
  console.log("Wygrałeś. Idziesz dalej.");
} else {
  console.log("Czekasz dwie kolejki");
}

let res8 = ++res1;
console.log(res8);
if (res8 >= 20) {
  console.log("Wygrałeś. Idziesz dalej.");
} else {
  console.log("Czekasz dwie kolejki");
}

let res9 = res1--;
console.log(res9);
if (res9 >= 20) {
  console.log("Wygrałeś. Idziesz dalej.");
} else {
  console.log("Czekasz dwie kolejki");
}

let res10 = --res1;
console.log(res10);
if (res10 >= 20) {
  console.log("Wygrałeś. Idziesz dalej.");
} else {
  console.log("Czekasz dwie kolejki");
}

console.log(
  typeof res1,
  typeof res2,
  typeof res3,
  typeof res4,
  typeof res5,
  typeof res6,
  typeof res8,
  typeof res9,
  typeof res10
);

function isWinner(result) {
  if (result > 20) {
    return true;
  } else {
    return false;
  }
}
result = res1;
console.log;
result = res2;
result = res3;
/*(res4);
result(res5);
result(res6);
result(res8);
result(res9);
result(res10);*/
