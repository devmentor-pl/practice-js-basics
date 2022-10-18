function Student(name, surname) {
  this.name = name;
  this.surname = surname;
  this.grades = {};
}
Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === 'undefined') {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
}
Student.prototype.countAvg = function (subject, sub) {
  let result = 0;
  if (typeof this.grades[sub] !== "undefined") {
    // const alfa = this.grades[subject].concat(this.grades[sub]);
    const alfa = [...this.grades[subject], ...this.grades[sub]];
    alfa.reduce(function (prev, acc) {
      return result = prev + acc;
    }, 0)
    return result / alfa.length;
  } else {
    this.grades[subject].forEach(function (element) {
      result += element;
    })
    return result / this.grades[subject].length;
  }
}



const student1 = new Student("Adam", "Nowak")

student1.addGrade("maths", 6);
student1.addGrade("maths", 6);
student1.addGrade("english", 5);
student1.addGrade("english", 4)
// student1.addGrade("historia", 5)
// student1.addGrade("historia", 5)
student1.countAvg("maths")
student1.countAvg("maths", "english")
// student1.countAvg("maths", "historia", "english")