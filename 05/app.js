function Student(name, secondName) {
    this.name = name;
    this.secondNAme;
    this.grades = {}
}

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }

    this.grades[subject].push(grade);
}


Student.prototype.getAverage = function(grade) {
    // Average for all grades
    if(typeof grade === 'undefined') {
      let allGrades = [];
      
        for(const key in this.grades) {
            allGrades = allGrades.concat(this.grades[key]);
        }
     const sumGrades = allGrades.reduce(function(a, b) {
        return a + b
      });
      
      return sumGrades / allGrades.length;
    } else {
        const sumOfGrade =this.grades[grade].reduce(function(accu, curre) {
            return accu + curre;
        });

        return sumOfGrade / this.grades[grade].length;    }
}

const student = new Student('Jan', 'Kowalski');

student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
student.addGrade('english', 3);
student.addGrade('english', 4);
student.addGrade('english', 5);
student.addGrade('english', 6);
const avgMath = student.getAverage('maths');
const avg = student.getAverage();
console.log(student) // Whole Object
console.log(avgMath);
console.log(avg);