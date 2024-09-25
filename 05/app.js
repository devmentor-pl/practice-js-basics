const student = new Student("Tomasz", "Kopyra");

function Student(getfirstName, getLastName) {
  this.firstName = getfirstName;
  this.lastName = getLastName;
  this.grades = {};
}

// adding grades
Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
};

// avg of the subject
Student.prototype.getAverageSubjectGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    const wrongSubject =
      "Nie ma takiego przedmiotu lub wpisałeś błędną nazwę przedmiotu!";
    return wrongSubject;
  }
  const grades = this.grades[subject];
  let sum = 0;
  grades.forEach(function (grade) {
    sum += grade;
  });
  return sum / grades.length;
};

// general avg
Student.prototype.getAverageOfAll = function () {
  let allGrades = Object.values(student.grades);
  let gradesConcat = [].concat.apply([], allGrades);
  const sum = gradesConcat.reduce(function (acc, grade) {
    return acc + grade;
  }, 0);
  return sum / gradesConcat.length;
};

// received grades
student.addGrade("Chemistry", 5);
student.addGrade("Chemistry", 4);
student.addGrade("Chemistry", 3);
student.addGrade("Maths", 2);
student.addGrade("Maths", 1);

const chemistryAvg = student.getAverageSubjectGrade("Chemistry");
const avgOfAll = student.getAverageOfAll();

console.log(student);
console.log(chemistryAvg);
console.log(avgOfAll);
