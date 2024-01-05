> :star: _Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e04-js-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/)._

&nbsp;

# `#03` JavaScript: Podstawy

Funkcje pozwalają na wielokrotne wykorzystanie kodu i grupowanie go, tak aby był bardziej czytelny.

Dlatego teraz przećwiczymy ich tworzenie na podstawie 3 funkcji.

1. Funkcja o nazwie `getSum`:

   - przyjmuje 3 parametry. Ich wartość w ciele funkcji ma zostać przekonwertowana na liczby całkowite,
   - z podanych 3 liczb wybierane są 2 największe,
   - wartości tych 2 liczb są sumowane, a wynik jest zwracany przez funkcję.

2. Funkcja o nazwie `isEven`:

   - ma formę wyrażenia funkcyjnego,
   - przyjmuje przez parametr tylko liczbę:
     - jeśli parametrem jest inny typ wartości niż `number`, to zwróć `null`,
     - jeśli jest to liczba, to zwróć:
       - `true` - jeśli jest parzysta,
       - `false` - jeśli jest nieparzysta.

3. Funkcja o nazwie `showInfo`:
   - przyjmuje 2 parametry:
     - pierwszy to dowolna wartość,
     - drugi to jedna z podanych wartości: `null`, `true`, `false`,
   - wyświetla w konsoli podane niżej informacje i wykorzystuje do tego strukturę `switch`. Jeśli drugi parametr to:
     - `null` => Podany argument [tutaj jej wartość] nie jest liczbą
     - `true` => Podany argument [tutaj jej wartość] jest parzysty
     - `false` => Podany argument [tutaj jej wartość] jest nieparzysty

Masz już stworzone funkcje, więc teraz czas je wykorzystać!

W pierwszej kolejności oblicz sumę dla zmiennych `a`, `b`, `c`, wykorzystując pierwszą funkcję. Wartość zapisz w zmiennej.

Następnie, wykorzystując drugą funkcję, sprawdź, czy wartość zwrócona przez pierwszą funkcję jest parzysta. Wynik działania drugiej funkcji również zapisz do zmiennej.

Trzecią funkcję wykorzystaj do wyświetlenia odpowiedniego komunikatu w konsoli o wynikach otrzymanych powyżej.

Powinno to wyglądać mniej więcej tak:

```
const a = 4;
const b = 25;
const c = 14;

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);

```

&nbsp;

> :arrow*left: [\_poprzednie zadanie*](./../02) | [_następne zadanie_](./../04) :arrow_right:

> :no*entry: \_Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*
