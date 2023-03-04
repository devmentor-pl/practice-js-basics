function Student (initFirstName, initLastName){
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}

Student.prototype.showFullName = function(){
    console.log(this.firstName, this.lastName);
};

Student.prototype.addGrade = function(subject, grade){
    if(typeof this.grades[subject] === 'undefined'){
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAvgGrade = function(subject){
    if(typeof subject === 'undefined'){
        return 0
    }
        const grades = this.grades[subject];
        const average = grades.reduce((a, b) => a + b, 0) / grades.length; //do douczenia
        return average;
 }

 Student.prototype.avg = function(){
    const arr = Object.values(this.grades).flat(1);   //do douczenia
    const averageAll = arr.reduce((a, b) => a + b, 0) / arr.length; //do douczenia
    return averageAll
 }
   

const student1 = new Student('Jan', 'Kowalski');
student1.addGrade('maths', 4)
student1.addGrade('maths', 6)
student1.addGrade('maths', 5)
student1.addGrade('english', 5)
student1.addGrade('english', 4)


const avgMath = 'Średnia ocena z matematyki to: ' + student1.getAvgGrade('maths');
const avgEnglish = 'Średnia ocena z angielskiego to: ' + student1.getAvgGrade('english');
const avgGrade = 'Średnia ocen ze wszystkich przedmiotów to: ' + student1.avg();

console.log(student1);
console.log(avgMath);
console.log(avgEnglish);

console.log(avgGrade)
