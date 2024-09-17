function StudentInfo(firstName,lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.grades = {}
}
function arrAvg(arr) {
    let sum = 0
    for (let item of arr) {
        sum += item
    }
    return Math.round(sum / arr.length * 100) / 100 // zwraca średnią arytmetyczną elementów tablicy zaokrągloną do dwóch miejsc po przecinku
}
StudentInfo.prototype.addGrade = function(subject,grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}
StudentInfo.prototype.getAverage = function(subject) {
    if (typeof subject === 'undefined') {
        const subjects =  this.grades
        const subjectGrades = []
        for (let subject in subjects) {
            const subjectGrade = Math.round(arrAvg(subjects[subject])) // wylicza ocenę z danego przedmiotu zaokrąglając średnią ocen z przedmiotu do liczby całkowitej
            subjectGrades.push(subjectGrade)
        }    
        return arrAvg(subjectGrades) // zwraca średnią ocen z wszystkich przedmiotów
    }
    else {
        const grades =  this.grades[subject]
        return arrAvg(grades)
    }
    
}

const student1 = new StudentInfo('Adam', 'Pierzynowski')

student1.addGrade('math',5)
student1.addGrade('math',5)
student1.addGrade('math',1)
student1.addGrade('english',4)
student1.addGrade('english',4)
student1.addGrade('english',3)
student1.addGrade('js',4)
student1.addGrade('js',5)
student1.addGrade('js',5)

const englishAvg = student1.getAverage('english')
const mathAvg = student1.getAverage('math')
const jsAvg = student1.getAverage('js')
const totalAvg = student1.getAverage()

console.log("%cŚrednia z angielskiego:", "color: #353025; font-weight: bold;");
console.log(englishAvg)
console.log("%cŚrednia z matematyki:", "color: #353025; font-weight: bold;");
console.log(mathAvg)
console.log("%cŚrednia z JavaScript:", "color: #353025; font-weight: bold;");
console.log(jsAvg)
console.log("%cŚrednia z wszystkich przedmiotów:", "color: #620f0a; font-weight: bold;");
console.log(totalAvg)
console.log()
const student2 = new StudentInfo('Tomasz', 'Lis')

student2.addGrade('math',4)
student2.addGrade('math',3)
student2.addGrade('math',3)
student2.addGrade('english',3)
student2.addGrade('english',5)
student2.addGrade('english',5)
student2.addGrade('js',1)
student2.addGrade('js',3)
student2.addGrade('js',4)

const englishAvg2 = student2.getAverage('english')
const mathAvg2 = student2.getAverage('math')
const jsAvg2 = student2.getAverage('js')
const totalAvg2 = student2.getAverage()

console.log("%cŚrednia z angielskiego:", "color: #353025; font-weight: bold;");
console.log(englishAvg2)
console.log("%cŚrednia z matematyki:", "color: #353025; font-weight: bold;");
console.log(mathAvg2)
console.log("%cŚrednia z JavaScript:", "color: #353025; font-weight: bold;");
console.log(jsAvg2)
console.log("%cŚrednia z wszystkich przedmiotów:", "color: #620f0a; font-weight: bold;");
console.log(totalAvg2)