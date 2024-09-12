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
Student.prototype.countAvg = function (subject) {
  let result = 0;
  if (typeof subject === "undefined") {
    const allSubject = [];
    for (const key in this.grades) {
      const subjectValue = this.grades[key];
      for (const key of subjectValue) {
        const subValue = allSubject.push(key);
      }
    };
    allSubject.reduce(function (prev, acc) {
      return result = prev + acc;
    }, 0)
    return result / allSubject.length;
  } else {
    this.grades[subject].forEach(function (element) {
      result += element;
    })
    return result / this.grades[subject].length;
  }
}


const student1 = new Student("Adam", "Nowak")


student1.addGrade("maths", 5);
student1.addGrade("maths", 5);
student1.addGrade("english", 3);
student1.countAvg("maths");
console.log(student1.countAvg("maths"));
console.log(student1.countAvg());