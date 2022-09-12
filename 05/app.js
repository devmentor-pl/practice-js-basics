const person = {
    firstName:'Jacek',
    lastName:'Zielinski',
     grades: {
        maths: ['4' ,'6'],
        english: ['3'],
     }
}


console.log(person);

function Student (firstName, lastName,grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
    }
    const student1 = new Student('Jan', 'Kowalski');
    const student2 = new Student('Michał', 'Nowak');
    const student3 = new Student('Maciej', 'Zielinski');
    
    console.log(student1,student2,student3);
    