function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
  if (typeof subject !== "undefined") {
    const grades = this.grades[subject];
    if (typeof grades === "undefined" || grades.length === 0) {
      return 0;
    }
    const sum = grades.reduce((acc, val) => acc + val, 0);
    return sum / grades.length;
  } else {
    const allGrades = Object.values(this.grades).reduce(
      (acc, val) => acc.concat(val),
      []
    );
    if (allGrades.length === 0) {
      return 0;
    }
    const sum = allGrades.reduce((acc, val) => acc + val, 0);
    return sum / allGrades.length;
  }
};

Student.prototype.displayInfo = function () {
  console.log(`Imię: ${this.firstName}`);
  console.log(`Nazwisko: ${this.lastName}`);
  console.log(`Oceny:`);
  for (const subject in this.grades) {
    const grades = this.grades[subject];
    console.log(`${subject}: ${grades.join(", ")}`);
    console.log(
      `Średnia z przedmiotu ${subject}: ${this.getAverageGrade(subject).toFixed(
        1
      )}`
    );
  }
  console.log(`Średnia ocen: ${this.getAverageGrade().toFixed(2)}`);
};

// <-- Zwraca tablicę ze wszystkimi studentami -->
// Student.getAllStudents = function () {
//   return Student.students;
// };

// <-- Tablica do przechowywania wszystkich studentów -->
// Student.students = [];

// <-- Funkcja do dodawania nowego studenta -->
// Student.addStudent = function (firstName, lastName) {
//   const student = new Student(firstName, lastName);
//   Student.students.push(student);
//   return student;
// };

// <-- Wersja dodania studenta z dodaniem go do tablicy przechowywania wszystkich studentów -->
// const student1 = Student.addStudent ("Jan", "Kowalski");

const student1 = new Student ("Jan", "Kowalski");
student1.addGrade("math", 4);
student1.addGrade("math", 6);
student1.addGrade("math", 1);
student1.addGrade("math", 3);
student1.addGrade("english", 3);
student1.addGrade("english", 5);
student1.addGrade("geography", 4);
const student2 = new Student("Agata", "Wieczorek");
student2.addGrade("math", 1);
student2.addGrade("math", 5);
student2.addGrade("math", 4);

student1.displayInfo();
student2.displayInfo();

// <-- Pobieranie wszystkich studentów -->
// const allStudents = Student.getAllStudents();
// console.log(allStudents)