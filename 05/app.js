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
    this.getAverageGrade = function(avg) {
       
        const total = avg.reduce((acc, c) => acc + c, 0);
        return total / avg.length;
    }
    }
    


const student1 = new Student('Grzegorz', 'Blaszczyk');
console.log(student1);
/*function addGrade(subject, grade) {
    const grades = {subject, grade};
    return grades;
}*/
function asd(subject, grade) {
    
}

console.log(student1);