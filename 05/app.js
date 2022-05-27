const student = new Student('Jan', 'Kowalski')

function Student(initFirstName, initLastName) {
  this.firstName = initFirstName;
  this.lastName = initLastName;
  this.grades = {}
}

student.addGrade = function(subject, grade) {
  if(typeof this.grades[subject] === 'undefined') {
    this.grades[subject] = [];
}
   this.grades[subject].push(grade)
}

student.addGrade("math", 5)

student.addGrade("math", 5)

student.addGrade("polski", 20)

student.addGrade("polski", 40)

 

student.getAverageGrade = function(subject) {
  let sum = 0;
  if (typeof subject != "undefined") {
    const grade = this.grades[subject]
    if(grade) {
      this.grades[subject].forEach(function(arr) {
        sum = sum + arr
      })
    return sum / this.grades[subject].length
    }
    else {
      return 'Nie ma takiego przedmiotu'
    }
  }
  else {
    let sum = 0;
    let sumgrades = 0;
    for(const property in this.grades) {
      const allGrades = this.grades[property]
        sumgrades = sumgrades + allGrades.length
      allGrades.forEach(function(item) {
        sum = sum + item;
      })
    }  
    return sum / sumgrades
  }
}
  
  
const avgSubject = student.getAverageGrade('math')
const avgAll = student.getAverageGrade();
console.log(avgSubject, avgAll)










                                        


    
