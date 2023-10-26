function Student(initFirstName, initLastName,grades){
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = grades;
    
}
const student1 = new Student("Ignacy", "Chlebek");

console.log(student1);