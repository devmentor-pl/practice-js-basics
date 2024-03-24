function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {}
}

Student.prototype.addGrade = function(subject, grade) {
    if (typeof(this.grades[subject]) == 'undefined') { 
        this.grades[subject] = [];
        this.grades[subject].push(grade);
    }
    else {
        this.grades[subject].push(grade);
    }
}

Student.prototype.getAverageGrade = function(subject) {
    if (typeof(subject) == 'string' ) {
        if (typeof(this.grades[subject]) != 'undefined') {
            let numbers = this.grades[subject].slice(0,this.grades[subject].length);
            total = numbers.reduce(function(sum,number) { return sum + number });
            return ('Średnia ocen '+(total / this.grades[subject].length).toFixed(2)+' z przedmiotu: '+subject);
        }
        else {
            return ('Nie ma takiego przedmiotu: '+subject);
        }
    }
    else {
        let allGrades = 0; // ilość ocen
        let totalScore = 0; // suma wszystkich ocen
        for(const subjectName in this.grades) {
            let numbers = this.grades[subjectName].slice(0,this.grades[subjectName].length);
            allGrades += this.grades[subjectName].length;
            totalScore += numbers.reduce(function(sum,number) { return sum + number });
        }
        return ('Średnia ocen ze wszystkich przedmiotów: '+(totalScore / allGrades).toFixed(2));
    }
}

const student = new Student('Jan', 'Kowalski');

student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('math');
const avgMaths = student.getAverageGrade('maths');
const avg = student.getAverageGrade();

console.log(avgMath);
console.log(avgMaths);
console.log(avg);
console.log(student);