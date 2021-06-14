// var student = {
//   firstName: firstName;
//   lastName : lastName;
// }
// var lastName="lastName";
// var job="job";
// person.job="programista";

// student.prototype.addGrade(grade)

// var wyrazenie="do geese see god";
// wyrazenie=wyrazenie.replace(RegExp("\u0020"),"");
// wyrazenie=wyrazenie.replace(RegExp("\u0020"),"");
// wyrazenie=wyrazenie.replace(RegExp("\u0020"),"");
// console.log(wyrazenie);

// const reverseStringReverse = (textToReverse) => {
//   return textToReverse.split("").reverse().join("");
// };
// var odwrocone = reverseStringReverse(wyrazenie);
// if(wyrazenie===odwrocone){
// console.log("true")}
// else{
//     console.log("false");
// };

// var arrFunt=[5,10,15,20,25];
// var arrKg=[2.27,4.54,6.8,9.08,11.35];
// console.log(`Tabela
// Funt | Kilogram`);
// for(let i=0; i<=25; i++){
//     console.log(arrFunt[i]+ ' | ' + arrKg[i]);
// }
// var arr2Funt=[];
// var arr2Kg=[];
// var arr2=[];
// for(let i=30; i<=1000; i+=5){
//     console.log((arr2[i]=i) + ' | ' + (arr2[i]*0.45));
// }


// var arr2=[];
// for(let i=30; i<=1000; i+=5){
//       arr2.push(i,i*0.45);
// }
// console.log(arr2);


// function Student(){ //konstruktor

// }

// var n = "Ania Kowalska-Nowak"; //tworzy zmienna prymitywna 

// var n1 = new String("Ania"); //tworzy obiekt 

// var n2 = String(32); //konwertuje inne 
//                     //wartości do typu string

// n.myValue = 23;

// var v = new Number();

// 255.01.toString(16);
// (255.01).toString(16); // kropka umozliwia wprowadzenie wartosci float





function Student(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades = {}
};
Student.prototype.addGrade = function(schoolSubject, grade){
  if (typeof this.grades[schoolSubject] === 'undefined') {
    this.grades[schoolSubject] = []; //dlaczego tu nie działa z kropką
}
  this.grades[schoolSubject].push(grade);
};
// student.prototype.Avg = function(schoolSubject,grades){
//   var sum=0;
//   sum+=schoolSubject.grades;
//   return sum;
// };
// student.prototype.addGrade;
// student.prototype.Avg;
const student1 = new Student('Jan', 'Kowalski');
// const student1 = new student('Jan', 'Kowalski');
student1.addGrade('maths', 4);
student1.addGrade('maths', 6);
student1.addGrade('english', 3);
//const avgMath = student1.Avg('math'); // 5
//const avg = student1.Avg(); // 4.33