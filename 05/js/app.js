class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.grades = {}
    }
    addGrade(subject, grade) {
        if(typeof this.grades[subject] === 'undefined') {
            this.grades[subject] = [];
        }
        
        this.grades[subject].push(grade);
    }
    getAverageGrade(subject=undefined) {
        if (subject !== undefined) {
            const grades = this.grades[subject];
            return grades.reduce((prev, curr) => prev + curr, 0)/grades.length;
        } else {
            const grades = [];
            for (const key in this.grades) {
                this.grades[key].forEach(element => {
                    grades.push(element);
                });
            }
            return grades.reduce((prev, curr) => prev + curr, 0)/grades.length;  
        }
    }
}

const student = new Student("Adam", "Kowalski")
console.log(student);
student.addGrade('maths', 5);
student.addGrade('maths', 3);
student.addGrade('history', 5);
const avgMaths = student.getAverageGrade('maths');
const avg = student.getAverageGrade();

console.log(avgMaths);
console.log(avg);



