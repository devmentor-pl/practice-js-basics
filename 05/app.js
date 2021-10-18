
function Student (initFirsName, initLastName) {
    this.firstName = initFirsName;
    this.lastName = initLastName;
    this.grades = {

    }
}

Student.prototype.showFullName = function() {
    console.log(this.firstName, this.lastName);
}

Student.prototype.addGrade = function(subject, grade) {

    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.showGrades = function() {
    // console.log(this.grades);
    for (const element in this.grades) {
        console.log(element + ':');
        console.log(this.grades[element]);
    }
}

Student.prototype.getAverageGrade = function(subject) {

    if (typeof subject !== 'undefined') {
        const subjectGrades = this.grades[subject];

        if (typeof subjectGrades !== 'undefined') {

            const sum = subjectGrades.reduce(function(acc, grade) {
                return acc+grade;
            },0);

        if (sum > 0) {
                    
            return sum / subjectGrades.length; 

            }

        return 0;

        }
    }

    else {
        let arr = [];
        for (const element in this.grades) {
            const singleGrade = this.grades[element]; 
            singleGrade.forEach(function(el) {
                arr.push(el);
            });
        }

        let sum = arr.reduce(function(a, b){
            return a+b;
        },0);


        if (arr.length===0) {
            
            return 0;
        }

        return sum/arr.length;
    }
}


const firstStudent = new Student('Jan', 'Kowalski');
firstStudent.addGrade('math', 1);
firstStudent.addGrade('math', 2);
firstStudent.addGrade('math', 4);
firstStudent.addGrade('history', 6);

const secondStudent = new Student('Piotr', 'Nowak');
secondStudent.addGrade('polish', 3);
secondStudent.addGrade('math', 5);
secondStudent.addGrade('polish', 3);
secondStudent.addGrade('math', 1);

firstStudent.showFullName();
firstStudent.showGrades();

secondStudent.showFullName();
secondStudent.showGrades();

console.log(firstStudent.getAverageGrade('math'));
console.log(secondStudent.getAverageGrade('math'));