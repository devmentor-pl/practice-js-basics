const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b);

//+ 
const sum = a + b;
console.log(sum, typeof sum);


const sum1 = parseInt(a) + b;
console.log(sum1);
if (sum1 > 20) {
  console.log(sum1 + " jest wieksze od 20");
} else {
  console.log(sum1 + " nie jest wieksze od 20");
}
// -
const c = a - b;
console.log(c, typeof c);
if (c > 20) {
  console.log(c + " jest wieksze od 20");
} else {
  console.log(c + " nie jest wieksze od 20");
}
//*

const d = a * b;
console.log(d, typeof d);
if (d > 20) {
  console.log(d + " jest wieksze od 20");
} else {
  console.log(d + " nie jest wieksze od 20");
}
// /

const e = a / b;
console.log(e, typeof e);
if (e > 20) {
  console.log(e + " jest wieksze od 20");
} else {
  console.log(e + " nie jest wieksze od 20");
}
// %

const f = (a % b);
console.log(f, typeof f);
if (f > 20) {
  console.log(f + " jest wieksze od 20");
} else {
  console.log(f + " nie jest wieksze od 20");
}

let g = b;
g++;
console.log(g, typeof g);
if (g > 20) {
  console.log(f + " jest wieksze od 20");
} else {
  console.log(f + " nie jest wieksze od 20");
}

let h = b;
h--
console.log(h, typeof h);
if (h > 20) {
  console.log(f + " jest wieksze od 20");
} else {
  console.log(f + " nie jest wieksze od 20");
}