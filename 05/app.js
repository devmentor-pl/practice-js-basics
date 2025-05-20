function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {}; // Tablica z ocenami
};

Student.prototype.addGrade = function (subject, oneGrade) {
    if (!this.grades[subject]) { // **czy dany przedmiot już istnieje**
        this.grades[subject] = [];
    }
    this.grades[subject].push(oneGrade); // przypisane jednej oceny 
};

Student.prototype.averageGrade = function (subject) {
    const grades = this.grades[subject];
    const sum = grades.reduce((a, b) => a + b, 0); // sumujemy wszystko
    return sum / grades.length; // Średnia
};

Student.prototype.getAverageGrade = function (subject) {
    if (subject) { // czy został dodany przedmiot jako warunek
        const grades = this.grades[subject]; 
        if (!grades || grades.length === 0) return null; // nie ocen w tablicy zwracamy null
        const sum = grades.reduce((a, b) => a + b, 0); // liczymy średnią tylko z subject tj. math english itd (warotść funkcji)
        return sum / grades.length; // wynik średnia artmetyczna dla konkrentego przedmiotu
    } else {
        const allGrades = Object.values(this.grades).flat(); // tablicza z ocenami flat spłaszcza tworzy jednowymiarową - tutaj nie jestem pewny nazewnictwa
        if (allGrades.length === 0) return null; // brak ocen lenght tj. ilość wartości = 0 zwracamy null
        const sum = allGrades.reduce((a, b) => a + b, 0);
        return sum / allGrades.length; // wynik - Średnia artmetyczna dla wszystkich 
    }
};

const student = new Student('Mikołaj', 'Kopernik');

student.addGrade('maths', 6);
student.addGrade('maths', 2);
student.addGrade('english', 2);
student.addGrade('english', 4);


for (const subject of Object.keys(student.grades)) { // wszystkie nazwy przedmiotów, for of iteracja po nazwach
    console.log(`Średnia z ${subject}:`,
        student.averageGrade(subject));
};

const avgMath = student.getAverageGrade('maths');
const avg = student.getAverageGrade();

console.log(`Średnia z matematyki: ${avgMath}`, `Średnia artmetyczna: ${avg}` );