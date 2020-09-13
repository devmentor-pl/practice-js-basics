function Student(name, surname) {
  this.name = name;
  this.surname = surname;
  this.grades = {}
}
//METODY:
// dodaj ocenę z przedmiotu (i przedmiot też jeśli, go nie ma)
// pobierz średnią arytm. z przedmiotu ('argument') lub z całości ()
//pokaż oceny z danego przedmiotu (???)


Student.prototype.addGrades = (function (sub, ...num) {
  if (typeof this.grades[sub] === 'undefined') {
    console.log(`a new subject - ${sub} - added`)
    this.grades[sub] = [];
    this.grades[sub].push(...num)
  } else {
    console.log(`new grades added to subject: ${sub}`)
    this.grades[sub].push(...num)
  }
})

Student.prototype.getAverageGrade = (function (sub) {
  if (typeof sub === 'undefined') {
    let arr = [];
    for (item in this.grades) {
      arr.push(...(this.grades[item]))
    }
    return (arr.reduce((a, b) => a + b) / arr.length).toFixed(2)
  } else if (typeof this.grades[sub] === 'undefined') {
    console.log('This subject does not exist on the list')
  } else if (!this.grades[sub].length > 0) {
    console.log('There are no grades in this subject')
  } else {
    const grades = this.grades[sub];
    return grades.reduce((a, b) => a + b) / grades.length
  }
})

const stud1 = new Student('Jan', 'Pann')
const stud2 = new Student('Kasia', 'Kowalska')

stud2.addGrades('history', 4, 5, 3);
stud2.addGrades('polish', 4, 5, 4, 3);
stud2.addGrades('PE', 5, 5);
stud2.addGrades('IT', 5, 5, 6);
stud2.addGrades('history', 3, 3);
stud2.addGrades('PE', 5);

console.log(`Student ${stud2.name} ${stud2.surname} has an average grade of ${stud2.getAverageGrade()}.`)