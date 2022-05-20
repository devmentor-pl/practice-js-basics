function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
} 

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = []
    }
    this.grades[subject].push(grade);
}

Student.prototype.avg = function(arr) {
    if(arr.length === 0) {
        return 0;
    }
    return arr.reduce((a, b) => (a + b)) / arr.length;
}

Student.prototype.getAverageGrade = function(subject) {
    if(typeof subject === 'undefined') {
        const grades = [];
        for(const x in this.grades) {
            const arr = this.grades[x];
            arr.forEach(function(element) {
                grades.push(element);
            });
        }
        return this.avg(grades);
    }
    if(typeof this.grades[subject] === 'undefined') {
        return 0;
    }
    return this.avg(this.grades[subject]);
}

const student1 = new Student('Joanna', 'Kruk');

student1.addGrade('math', 3);
student1.addGrade('math', 5);
student1.addGrade('math', 4);
student1.addGrade('polish', 6);
student1.addGrade('polish', 3);
student1.addGrade('english', 6);
student1.addGrade('english', 4);

const avgMath = student1.getAverageGrade('math');
const avgPolish = student1.getAverageGrade('polish');
const avgEnglish = student1.getAverageGrade('english');

const avg = student1.getAverageGrade();

console.log(avgMath, avgPolish, avgEnglish);
console.log(avg);