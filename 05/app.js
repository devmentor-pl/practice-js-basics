function Student (addFirstName, addLastName) {
    this.firstName = addFirstName;
    this.lastName = addLastName;
    this.grades= {};
}

Student.prototype.addGrades = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject) {
    if(typeof subject === 'undefined') {
        let sum = 0;
        let average = 0;
        let allGradesNum = 0;
        for(const sub in this.grades){
            this.grades[sub].forEach(function(element){
                sum+=element;
            });
            allGradesNum += this.grades[sub].length;            
        };
        average = sum/allGradesNum;
        return average; 
    }
    let sum = 0;
    let average = 0;
    this.grades[subject].forEach(function(element){
        sum+=element;
    });
    average = sum/this.grades[subject].length;
    return average; 
}


const student1 = new Student ('Jan', 'Kowalski');
const subject = 'maths';
student1.addGrades('maths', 4);
student1.addGrades('maths', 4);

student1.addGrades('polish', 5);
student1.addGrades('polish', 5);
const avgMath = student1.getAverageGrade('maths'); 
console.log(avgMath);
const avg = student1.getAverageGrade(); 
console.log(avg);

console.log(student1);

