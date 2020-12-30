/*
Student.prototype.addGrade = function(subject, grade) { 
    let studentSubject = this.grades[subject];
    
    // infO if(studentSubject === undefined)  - jest okay 
    if(typeof studentSubject === 'undefined') {
        studentSubject = [];
    //  console.log(this);
    };       
    studentSubject.push(grade);
    console.log(student, typeof studentSubject);
};
*/

Student.prototype.addGrade = function(subject, grade) { 
    // infO if(studentSubject === undefined)  - jest okay 
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    };       
    this.grades[subject].push(grade);
    // console.log(this);
};

Student.prototype.getAverageGrade = function(subject) {
    const grades = this.grades;
    // get an average for all subjects
    if(typeof subject === 'undefined') {
        let subjectsNumber = 0;
        let sum = 0;    
        for(const subject in grades) {
            ++subjectsNumber;
            sum += getAverage(grades[subject]); 
        };
        return sum / subjectsNumber;
    } else {// get an average for one subject
        return getAverage(grades[subject]);
    };   
};

const student = new Student("Marek", "Mitko");

student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);

console.log(student);
const avgMath = student.getAverageGrade('maths'); // 5
const avg = student.getAverageGrade(); // 4.33
console.log(avgMath);

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}
function getAverage(arr) {
    let sum = arr.reduce(function(prev, curr){
        return prev + curr;
    });

    return sum / arr.length;
}