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
const avgMath = student.getAverageGrade('math'); // 5
const avg = student.getAverageGrade(); // 4.33
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

Aby rozróżnić czy mamy podać średnią dla 1 przedmiotu czy dla wszystkich wystarczy sprawdzić czy pierwszy parametr w funkcji `.getAverageGrade()` jest zdefiniowany (`undefined`).

Pamiętaj, że pobranie informacji o ocenach z konkretnego przedmiotu może się odbywać w ten sposób:
```
const subject = 'maths';
const grades = this.grades[subject];
```

Pamiętaj również, aby przy dodawaniu ocen sprawdzić czy dany przedmiot już istnieje. Jeśli nie to trzeba utworzyć odpowiednią właściwość z obiekcie i przypisać do niej pustą tablicę.

Powodzenia!


&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)
