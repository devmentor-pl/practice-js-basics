
function Student(name, surname) {
    this.name = name;
    this.surname = surname;
    this.grades = {};
   
    //Metoda sprawdza czy istnieje juz wlasciwosc o nazwie 'subject' w obiekcie grades. Wykorzystuje do tego warunek.
    //Jesli przedmiot nie istnieje metoda tworzy nowa wlasciwosci o nazwie subject w obiekcie grades.
    //Za pomoca metody push dodaje nowa ocene do tablicy ocen dla danego przedmiotu.
    Student.prototype.addGrade = function (subject, grade) {
        if(typeof this.grades[subject] === 'undefined') {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
    }
    
    //Metoda przyjmuje jeden parametr subject. Uzyskuje dostep do tablicy ocen dla danego przedmiotu z obiektu 'grades' przez 'this.grades[subject].
    //Sprawdza czy tablica ocen dla przedmiotu istnieje.
    //Jesli istnieja oceny dla danego przedmiotu, metoda oblicza ich srednia arytmetyczna przez funkcje reduce.
    //Wynik jest zaokraglony do dwoch miejsc po przecinku, korzystajac z metody 'toFixed(2).
    Student.prototype.calculateSubjectAverage = function (subject) {
        const subjectGrades = this.grades[subject];
        if (!subjectGrades || subjectGrades.length === 0) {
            return 0;
        }
        const getAverageGrade = subjectGrades.reduce((a, b) => a + b, 0) / subjectGrades.length;
        return getAverageGrade.toFixed(2);
    }

    //Metoda przyjmuje jeden parametr i sprawdza czy istnieja jakiekolwiek przedmioty z ocenami w obiekcie grades.
    //Uzyskuje liste nazw przedmiotow jako tablice kluczy obiektu 'grades' za pomoca 'Object.keys(this.grades).
    //Jesli nie ma zadnych przedmiotow metoda zwraca 0.00 jako wynik.
    //Jesli istnieja oceny metoda inicjuje zmienne totalSum oraz totalGrades.
    //Metoda iteruje przez liste przedmiotow za pomcoa forEach i sprawdza czy istnieja oceny dla kazdego z przedmiotow.
    //Jesli tak iteruje przez oceny w danym przedmiocie za pomoca kolejnego forEach i sumuje je w zmiennej totalSum oraz zwieksza 'totalGrades'.
    //Po zakonczeniu metoda sprawdza czy istnieja jakiekolwiek oceny. Jesli nie ma zadnych zwraca '0.00'.
    //Wynik ogolnej sredniej oceny jest zaokraglany do dwoch miejsc po przecinku dzieki 'toFixed(2).
    Student.prototype.calculateOverallAverage = function () {
        const subjects = Object.keys(this.grades);
        if (subjects.length === 0) {
            return '0.00';
        }
        let totalSum = 0;
        let totalGrades = 0;
    
        subjects.forEach((subject) => {
            const subjectGrades = this.grades[subject];
            if (subjectGrades && subjectGrades.length > 0) {
                subjectGrades.forEach((grade) => {
                    totalSum += grade;
                    totalGrades++;
                });
            }
        });
    
        if (totalGrades === 0) {
            return '0.00'; 
        }
        const overallAverage = totalSum / totalGrades;
        return overallAverage.toFixed(2);
    }

}

const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.calculateSubjectAverage('maths'); // 5
const avg = student.calculateOverallAverage(); // '4.33'
console.log(student);
console.log(avgMath);
console.log(avg);