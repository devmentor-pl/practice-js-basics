// Konstruktor

function Student (initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}

// Prototypy

Student.prototype.addGrade = function(subject, grade){
    if (typeof this.grades[subject] === 'undefined') {
    this.grades[subject] = [];
}

this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function (subject){
    if (typeof this.grades[subject] !== 'undefined') 
    {
        return this.grades[subject].reduce(function(total, value){
            return total + value;
        },0)/this.grades[subject].length;
    }
    else {
        let num = 0;
        let sum = 0;
        for (const key in this.grades) {
            sum += this.grades[key].reduce(function(total, value){
                return total + value;
            });
            num += this.grades[key].length;
        }
        return sum/num;
    }
}

// Utworzenie studenta

const student = new Student ('Anna','Nowak');

// Dodanie ocen

student.addGrade('math', 5);
student.addGrade('math', 2);
student.addGrade('math', 5);
student.addGrade('history', 4);
student.addGrade('history', 5);

const avgMath = student.getAverageGrade('math');
const avg = student.getAverageGrade();

// Wyświetlenie średniej

console.log('Średnia arytmetyczna z matematyki dla studenta ' + student.firstName, student.lastName + ' to: ' + avgMath);
console.log('Ogólna średnia arytmetyczna dla studenta ' + student.firstName, student.lastName + ' to: ' + avg);