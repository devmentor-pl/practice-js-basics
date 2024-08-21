

class Student{
constructor (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}
    addGrade(subject, grade){
        if(typeof this.grades[subject] === 'undefined') {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
    }

    getAverageGrade(subject) {
        if(subject){
        let avg = 0;
        let gradesAmount = this.grades[subject].length;

        this.grades[subject].forEach(element => {
            avg += element;
        });

        return avg / gradesAmount;
    }else{
        let totalSum = 0;
        let totalGrades = 0;

        for (let subj in this.grades){
            let grades = this.grades[subj];
            
            for (let i = 0; i < grades.length; i++){
                totalSum += grades[i];
                totalGrades ++;
            }
        }

        return totalGrades ? totalSum / totalGrades : 0;
    }
    }
}

const firstStudent = new Student('Jan', 'Kowalski');

console.log(firstStudent);

firstStudent.addGrade('Math', 5); //pamietaj o uzyciu cyckow
firstStudent.addGrade('Math', 3);
firstStudent.addGrade('Math', 2);
firstStudent.addGrade('English', 2);
firstStudent.addGrade('English', 4);
firstStudent.addGrade('Physics', 2);
firstStudent.addGrade('Physics', 2);

console.log(firstStudent.getAverageGrade());
