

> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e04-js-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03` JavaScript: Podstawy



Funkcje to bardzo użyteczne rozwiązania, które możemy wielokrotnie wykorzystywać w naszym programie i grupować kod, aby był on czytelniejszy. 

Dlatego teraz naszym zadaniem będzie przećwiczenie ich struktury. Mamy do napisania 3 funkcje.

- Funkcja pierwsza o nazwie `getSum`:
    - 3 parametry, których wartość w ciele funkcji mają zostać przekonwertowane na liczby całkowite
    - z podanych 3 liczb mają być wybrane 2 największe
    - wartości 2 największych liczb mają zostać zsumowane i zwrócone przez funkcję
- Funkcja druga o nazwie `isEven`:
    - ma mieć formę wyrażenia funkcyjnego
    - ma przyjmować przez parametr tylko liczbę
        - jeśli parametrem jest inny typ wartości niż `number` to zwróć `null`
        - jeśli jest to liczba to zwróć:
            - `true` jeśli jest parzysta
            - `false` jeśli jest nieparzysta
- Funkcja trzecia `showInfo`:
    - ma przyjmowac 2 parametry
        - pierwszy to dowolna wartość
        - drugi to jedna z wartości: `null`, `true`, `false`
    - wykorzystując strukturę `switch` wyświetl w konsoli informacje:
        - jeśli drugi parametr to
            - `null` => Podany argument [tutaj jej wartość] nie jest liczbą
            - `true` => Podany argument [tutaj jej wartość] jest parzysty
            - `false` => Podany argument [tutaj jej wartość] jest nieparzysty

Mając stworzone funkcje powinieneś je wykorzystać. W pierwszej kolejności oblicz sumę dla zmiennych `a`, `b`, `c` wykorzystując pierwszą funkcję. Wartość zapisz w zmiennej.

Następnie wykorzystując drugą funkcję sprawdzić czy wartość zwrócona przez pierwszą funkcję jest parzysta. Wynik działania drugiej funkcji również zapisz do zmiennej.

Trzecią funkcję wykorzystaj do wyświetlenia odpowiedniego komunikatu w konsoli.

Całość powinna wyglądać mniej więcej tak:

```
const a = 4;
const b = 25;
const c = 14;

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);

```


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*

