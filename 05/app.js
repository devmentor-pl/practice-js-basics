function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = {};
}
const student = new Student("Jan", "Kowalski");
console.log(student);
