
function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {
        maths: [5],
    };
}

Student.prototype.showFullName = function() {
    console.log(this.firstName, this.lastName);
}

const student1 = new Student('Jan','Nowak');
student1.showFullName();

const student2 = new Student('Piotr', 'Janowski')
student2.showFullName();


Student.prototype.addGrade = function(subject, grade) {
    if( typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = []
    }
        this.grades[subject].push(grade);
}


student1.addGrade('maths', 4);
student1.addGrade('english', 4);
student1.addGrade('english', 3);

console.log(student1.grades.english);



let sum = student1.grades.maths.reduce(function(prev, curr) {
    return prev + curr;
  });

let avg = sum / student1.grades.maths.length;
console.log(avg);

