function Student(initFirstName, initLastName) {
 this.firstName = initFirstName;
 this.lastName = initLastName;
 this.grades = {};
}

Student.prototype.addGrade = function(subject, grade) {  
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject) {
    if(typeof subject === 'undefined') {
        const grades = [];
        for (const key in this.grades) {
            const arr = this.grades[key];
            arr.forEach(grade => {
                grades.push(grade);
            });
        }
        if(grades.length === 0) return 0;
        return grades.reduce((a, b) => a + b, 0) / grades.length;
    }
    
    if(typeof this.grades[subject] === 'undefined') return 0;

    return this.grades[subject].reduce((a, b) => a + b, 0) / this.grades[subject].length;
}

const student1 = new Student('Marek', 'Nowak');
const student2 = new Student('Anna', 'Kowal');
console.log(student1, student2);

student1.addGrade('maths', 4);
student1.addGrade('maths', 6);
student1.addGrade('english', 5);
student1.addGrade('english', 6);
student1.addGrade('english', 5);
const avgMath = student1.getAverageGrade('maths'); // 5
const avgMath2 = student2.getAverageGrade('maths'); // 5
const avgEng = student1.getAverageGrade('english'); 
const avg1 = student1.getAverageGrade(); 
const avg2 = student2.getAverageGrade(); 
console.log(student1);
console.log('avgMath:', avgMath);
console.log('avgMath2:', avgMath2);
console.log('avgEng:', avgEng);
console.log('avg1:', avg1);
console.log('avg2:', avg2);