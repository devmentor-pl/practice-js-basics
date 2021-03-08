

> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e04-js-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` JavaScript: Podstawy




Napisz funkcję, która utworzy tablicę z 20 elementami i ją zwróci. Funkcja ta ma przyjmować dwa parametry tj. liczbę minimalną oraz maksymalną jaka może zostać wylosowana. W ciele tej funkcji wykorzystaj pętle `for` oraz obiekt `Math` np:
```
const arr = createArray(1, 100);
console.log(arr); // [1, 4, 34, 12, 16, 45, 12, 38, 78, 99, 1, 84, 44, 61, 16, 45, 33, 31, 68, 93 ]
```

Kolejna funkcja ma przymować przez argument tablicę i sortować ją od wartości największej do najmniejszej. Następnie ma zwrócić tablicę zawierającą tylko 10 największych liczb. W ciele funkcji możesz użyć metod `.sort()` oraz `.slice()` np:
```
const largest = getLargest(arr);
console.log(largest); // [99, 93, 84, 78, 68, 61, 45, 45, 44, 38]
```


Ostatnia funkcja ma obliczać [średnią arytmetyczną](https://pl.wikipedia.org/wiki/%C5%9Arednia_arytmetyczna) z liczb przechowyanych w przekazanej przez parametr tablicy - możesz do tego wykorzystać `.forEach()` lub `.reduce()`.

```
const avg = getAvg([1, 2, 3, 4, 5]);
console.log(avg); // 3
```

Wykorzystaj napisane funkcje w taki sposób, aby utworzyć tablicę składającą się z 20 losowych liczb z przedziału od 10 do 200. Z utworzonej tablicy wybiesz 10 największych i obliczych ich średnią arytmetyczną.

Zadbaj o odpowiednie nazwy dla funkcji - nie muszą one być identyczne jak w przykładach.


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*

