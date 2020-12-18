# Ćwiczenie #05

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Tym razem Twoim zadaniem będzie utworzenie konstruktora, na podstawie którego będzie można tworzyć obiekt przechowujący informacje o studencie.

Obiekt ma posiadać imię i nazwisko przekazywane podczas inicjalizacji (przy użyciu `new`).

Konstruktor ma udostępniać metody (przez `prototype`), które pozwolą dodać ocenę z danego przedmiotu oraz pobrać średnią arytmetyczną z konkretnego przedmiotu lub ogólną.

Przykład użycia może wyglądać w ten sposób:

```
const student = new Student('Jan', 'Kowalski);
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = function Student(name, secondName) {
    this.name = name;
    this.secondNAme;
    this.grades = {}
}
```

Struktura przechowywania danych w obiekcie może wyglądać mniej wiecej tak:
```
{
    firstName: 'Jan',
    lastName: 'Kowalski',
    grades: {
        maths: [4, 6],
        english: [3],
    }
}
```

To oznacza, że w konstruktorze deklaracje właściwości mogą wyglądać mniej więcej tak:
```
/* ... */ {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}
``` 

Aby rozróżnić czy mamy podać średnią dla 1 przedmiotu czy dla wszystkich wystarczy sprawdzić czy pierwszy parametr w funkcji `.getAverageGrade()` jest zdefiniowany (różny od `undefined`).

Zwróć uwagę, że pobranie informacji o ocenach z konkretnego przedmiotu może się odbywać w ten sposób:
```
const subject = 'maths';
const grades = this.grades[subject];
```

Pamiętaj również, aby przy dodawaniu ocen sprawdzić czy dany przedmiot już istnieje. Jeśli nie to trzeba utworzyć odpowiednią właściwość z obiekcie i przypisać do niej pustą tablicę np.
```
if(typeof this.grades[subject] === 'undefined') {
    this.grades[subject] = [];
}

this.grades[subject].push(grade);
```


Powodzenia!


&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)
