
function Student(name, surname) {
    this.name = name;
    this.surname = surname;
    this.grades = {};
   
    //Metoda sprawdza czy istnieje juz wlasciwosc o nazwie 'subject' w obiekcie grades. Wykorzystuje do tego warunek.
    //Jesli przedmiot nie istnieje metoda tworzy nowa wlasciwosci o nazwie subject w obiekcie grades.
    //Za pomoca metody push dodaje nowa ocene do tablicy ocen dla danego przedmiotu.
    Student.prototype.addGrade = function (subject, grade) {
        if(typeof this.grades[subject] === 'undefined') {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
    }
    
    /*
        Jesli podam parametr 'subject' funkcja obliczy srednia ocen tylko dla konkretnego przedmiotu.
        Jesli nie podam parametru 'subject' funkcja obliczy srednia ze wszystkich ocen studenta.

        
    */ 
    Student.prototype.getAverageGrade = function (subject) {
        const subjects = Object.keys(this.grades);
        if (subjects.length === 0) {
            return '0.00';
        }
        let totalSum = 0;
        let totalGrades = 0;
    
        if (subject) {
            const subjectGrades = this.grades[subject];
            if (subjectGrades && subjectGrades.length > 0) {
                subjectGrades.forEach(grade => {
                    totalSum += grade;
                    totalGrades++;
                });
            }
        } else {
            subjects.forEach((subject) => {
                const subjectGrades = this.grades[subject];
                if (subjectGrades && subjectGrades.length > 0) {
                    subjectGrades.forEach((grade) => {
                        totalSum += grade;
                        totalGrades++;
                    });
                }
            });
        }
    
        if (totalGrades === 0) {
            return '0.00'; 
        }
        const overallAverage = totalSum / totalGrades;
        return overallAverage.toFixed(2);
    }

}

const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('maths'); // 5
const avg = student.getAverageGrade(); // '4.33'
console.log(student);
console.log(avgMath);
console.log(avg);