function Student(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
this.grades = {}
}
Student.prototype.addGrade = function(subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
}
this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
    
    if (typeof subject !== 'undefined') {
        const grades = this.grades[subject];
        const sum = grades.reduce(function (acc, grade) {
            return acc + grade;
        }, 0);
        
        return sum / grades.length;
    }
    
    const allGrades = Object.values(this.grades).reduce(function (acc, grades) {
        return acc.concat(grades);
    }, []);
    
    const totalSum = allGrades.reduce(function (acc, grade) {
        return acc + grade;
    }, 0);
    return totalSum / allGrades.length;
};


//Przykład użycia
const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 1);
student.addGrade('maths', 5);
student.addGrade('english', 4);

const avgMath = student.getAverageGrade('maths');
const avg = student.getAverageGrade(); 

console.log(avgMath);
console.log(avg);