// konstruktor Student, który przyjmuje argumenty: 'firstName' i 'lastName'
// oraz posiada właściwość 'grades', która jest obiektem z ocenami studenta
const Student = function  (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = {
    // math: [],
    // english: [],
  };
}

// metoda 'addGrade' powinna dodawać ocenę do przedmiotu
// oraz sprawdzać czy dany przedmiot istnieje w obiekcie 'grades',
// jeśli nie to ma go dodać
Student.prototype.addGrade = function (subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
  this.grades[subject].push(grade);
}

// funkcja licząca średnia z przedmiotu lub przedmiotów do dwóch miejsc po przecinku
function calculateAverage(grades) {
    const sum = grades.reduce(function(acc, grade) {
        return acc + grade}, 0);
    const average = sum / grades.length;
    return Math.round(average * 100) / 100;
}


// metoda 'getAverageGrade' powinna zwracać średnią ocen z danego przedmiotu, lub ze wszystkich przedmiotów, jesli nie podamy argumentu
Student.prototype.getAverageGrade = function (subject) {
    if(typeof subject !== 'undefined') {
        const grades = this.grades[subject];
        console.log(grades);

        return calculateAverage(grades)

    } else {
        let allGrades = []
        for(let key in this.grades) {
            const gradesFromSubject = this.grades[key];
            allGrades  = allGrades.concat(gradesFromSubject);
        }

        return calculateAverage(allGrades)
    }
}


const student1 = new Student('Jan', 'Kowalski');
// const student2 = new Student('Anna', 'Nowak');
// const student3 = new Student('Piotr', 'Piotrowski');

student1.addGrade('math', 4);
student1.addGrade('math', 3);

// student2.addGrade('math', 5);
// student2.addGrade('math', 4);

// student3.addGrade('math', 3);
// student3.addGrade('math', 5);

student1.addGrade('english', 5);
// student2.addGrade('english', 3);
// student3.addGrade('english', 4);

const avgMath = student1.getAverageGrade('math');
const avgAll = student1.getAverageGrade();
// const avgMath = student2.getAverageGrade('math');
// const avgMath = student3.getAverageGrade('math');


console.log(student1); // wyswietla obiekt z imieniem, nazwiskiem i ocenami

console.log(avgAll);
console.log(avgMath);
console.log(student1.getAverageGrade('math'));



