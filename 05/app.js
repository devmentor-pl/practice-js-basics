function Student(initFirstName, initLastName) {
  this.firstName = initFirstName;
  this.lastName = initLastName;
  this.grades = {};
  this.subjects = [];
}

Student.prototype.addGrade = function (subject, grade) {
  if (!this.grades[subject]) {
    this.grades[subject] = [];
    this.subjects.push(subject);
    this.grades[subject].push(grade);
  } else {
    this.grades[subject].push(grade);
  }
};

Student.prototype.getAvg = function (subject) {
    if (subject === undefined ) {
    let sumAvg = 0;
    for (let i = 0; i < this.subjects.length; i++) {
      const avg = calculateAvg(this.grades[this.subjects[i]]);
      sumAvg = sumAvg + avg;
    }
    const generalAvg = sumAvg / this.subjects.length;
    return generalAvg;
  } else {
    const avg = calculateAvg(this.grades[subject]);
    return avg;
  }
};

function calculateAvg(array) {
  const reducedArray = array.reduce(function (accumulator, currentValue) {
    accumulator = accumulator + currentValue;
    return accumulator;
  });
  const avg = reducedArray / array.length;
  return avg;
}

const student = new Student("Adam", "Kowalski");

student.addGrade("matematyka", 6);
const lalal = student.getAvg();

console.log(lalal);
