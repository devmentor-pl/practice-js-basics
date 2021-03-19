const a = '24.2';
const b = 20.0001;
arr = [ 1, 2, 3, 'r', 't' ];
obj = { name: 'greg', age: 18 };

console.log(a, b);

const typo = (x) => console.log(typeof x);
function hi(name) {
	console.log(`Hi ${name}`);
}

typo(a);
typo(b);
typo(null);
typo(arr);
typo(obj);
typo(typo);
typo(hi);

parseInt(a) > 20 ? console.log(`a jest większe od 20`) : null;
b > 20 ? console.log(`b jest większe od 20: ${b}`) : null;
