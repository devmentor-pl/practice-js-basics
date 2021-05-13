

> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e04-js-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` JavaScript: Podstawy

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

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*

