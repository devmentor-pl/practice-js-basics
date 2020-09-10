function Student(name, surname) {
    this.firstName = name;
    this.lastName = surname;
    this.grades = {};
}

Student.prototype.addGrade = function(subject, grade) {
    if((typeof grade !== 'number') || (grade < 1) || (grade > 6)) {
        return;
    }

    if(subject in this.grades) {
        this.grades[subject].push(grade);
    } else {
        this.grades[subject] = [grade];
    }
}

Student.prototype.getAverageGrade = function (subject) {
    if(subject) {
        if (subject in this.grades) {
            return this.grades[subject].reduce(function(total, a) {
                return total + a;
            }) / this.grades[subject].length;
        }
        return 0;
    }

    totalSum = totalGrades = 0;
    for(const key in this.grades) {
        totalSum += this.grades[key].reduce(function(total, a) {
            return total + a;
        });
        totalGrades += this.grades[key].length;
    }
 
    if(totalGrades) {
        return totalSum / totalGrades;
    }

    return 0;
}

const student1 = new Student ('Paweł', 'Tarnowski');
student1.addGrade('maths', 4);
student1.addGrade('maths', 6);
student1.addGrade('history', 1);
student1.addGrade('history', 4);
student1.addGrade('biology', 5);
student1.addGrade('biology', 5);
student1.addGrade('biology', 4);

console.log('avarage maths:', student1.getAverageGrade('maths'));
console.log('avarage history:', student1.getAverageGrade('history'));
console.log('avarage biology:', student1.getAverageGrade('biology'));
console.log('total avarage:', student1.getAverageGrade());

