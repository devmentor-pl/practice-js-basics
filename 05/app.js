function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
  if (!this.grades[subject]) {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
};
Student.prototype.calcAverageGrade = function (subject) {
  if (typeof subject !== "undefined") {
    const average =
      this.grades[subject].reduce((a, b) => a + b, 0) /
      this.grades[subject].length;
    return average;
  } else {
    //console.log(this.grades);
    const arr = Object.values(this.grades).flat(1);
    //console.log(arr);
    return (averageAll = arr.reduce((a, b) => a + b, 0) / arr.length);
  }
};

const student1 = new Student("Anna", "kowalska");

//console.log(student1);
student1.addGrade("maths", 4);
//console.log(student1);
student1.addGrade("maths", 2);
student1.addGrade("english", 5);
student1.addGrade("biology", 4);
student1.addGrade("english", 6);
student1.addGrade("biology", 1);
student1.addGrade("biology", 4);
student1.addGrade("english", 2);
//console.log(student1);

/*console.log(student1.calcAverageGrade("biology"));
console.log(student1.calcAverageGrade("maths"));
console.log(student1.calcAverageGrade("english"));*/
console.log(student1);
console.log(student1.calcAverageGrade("english"));
console.log(student1.calcAverageGrade());
