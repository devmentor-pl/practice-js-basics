function Student(initFirstName, initLastName) 
{
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}

Student.prototype.addGrate = function(subject, grade)
{
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject) {
    let sum = 0;
    const grades = this.grades[subject];

    grades.forEach(element => {
        sum += element;
        console.log(element);
    })
    console.log(`Średnia ocen z ${subject} to: `,sum/grades.length);
    
}


Student.prototype.getAllAverageGrades = function() {
    const grades = Array.from(Object.values(this.grades)).flat();
    let sum = 0;
    grades.forEach(grade => {
      sum += grade;
    });
    
    console.log(`Średnia całościowa to:`,sum / grades.length);
  }

const student1 = new Student("Jan", "Kowalski");
student1.addGrate('math', 4);
student1.addGrate('math', 3);
student1.addGrate('en', 5);
student1.getAverageGrade('math');
student1.getAllAverageGrades();
