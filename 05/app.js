function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
    this.addGrade = function(subject, grade) {
        if(typeof this.grades[subject] === 'undefined') {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
        return this.grades;
    }
    this.getAverageGrade = function(element, a) {
        var sum = 0;
        for( var i = 0; i < element[a].length; i++ ){
            sum += parseInt( element[a][i], 10 );
        }
        return sum/element[a];
    }
    }
    



const student1 = new Student('Grzegorz', 'Blaszczyk');
student1.addGrade('maths', 4);
student1.addGrade('maths', 6);
student1.addGrade('english', 3);
const avgMath = student1.getAverageGrade(this.grades,'math');
console.log(avgMath)
console.log(student1);
/*function addGrade(subject, grade) {
    const grades = {subject, grade};
    return grades;
}*/
function asd(subject, grade) {
    
}

console.log(student1);