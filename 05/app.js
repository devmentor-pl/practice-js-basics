
function Studen(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}

Studen.prototype.addGrade = function(subjectItem,grade){
    if (typeof this.grades[subjectItem] === 'undefined') {
        this.grades[subjectItem] = [];
        this.grades[subjectItem].push(grade);
    }
    else {
        this.grades[subjectItem].push(grade);
    }
}

Studen.prototype.getAvgGrade = function(subjectName){
    if(typeof this.grades[subjectName] !== 'undefined'){
        let array = 0;
        let sum = 0;
        array = this.grades[subjectName];

        this.grades[subjectName].reduce(function(total,value){
            sum = total+value;
            sum = (sum/array.length);
        });
        return sum;
    }
    else {
        let array2 = 0;
        let sum2 = 0;
        array2 = Object.values(this.grades).flat(2);
        // console.log(array2);
        array2.forEach(function(element) {
            sum2 +=element;
        },0);
        sum2 = (sum2 / array2.length);
        return sum2;
    }
}

const student1 = new Studen('Marcel','Szopa');
student1.addGrade('maths',6);
student1.addGrade('maths',6);
student1.addGrade('english',4);
student1.addGrade('polish',3);
student1.addGrade('polish',1);
console.log(student1);

const avgSubject = student1.getAvgGrade('maths');
console.log('Srednia z matematyki ' + avgSubject);
const avgAll = student1.getAvgGrade();
console.log('Srednia ze wszystkich przedmiotów ' + avgAll);
