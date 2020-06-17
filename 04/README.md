# Ćwiczenie #04

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Napisz funkcję, która utworzy tablicę z 20 elementami i ją zwróci. Funkcja ta ma przyjmować dwa parametry tj. liczbę minimalną oraz maksymalną jaka może zostać wylosowana. W ciele tej funkcji wykorzystaj pętle `for` oraz obiekt `Math` np:
```
const arr = createArray(1, 100);
console.log(arr); // [1, 4, 34, 12, 16, 45, 12, 38, 78, 99, 1, 84, 44, 61, 16, 45, 33, 31, 68, 93 ]
```

Kolejna funkcja ma przymować przez argument tablicę i sortować ją od wartości największej do najmniejszej. Następnie ma zwrócić tablicę zawierającą tylko 10 największych liczb. W ciele funkcji możesz użyć metod `.sort()` oraz `.slice()` np:
```
const largest = getLargest(arr);
console.log(largest); // [99, 93, 84, 78, 68, 61A, 45, 45, 44, 38]
```


Ostatnia funkcja ma obliczać [średnią arytmetyczną](https://pl.wikipedia.org/wiki/%C5%9Arednia_arytmetyczna) z liczb przechowyanych w przekazanej przez parametr tablicy - możesz do tego wykorzystać `.forEach()` lub `.reduce()`.

```
const avg = getAvg([1, 2, 3, 4, 5]);
console.log(avg); // 3
```

Wykorzystaj napisane funkcje w taki sposób, aby utworzyć tablicę składającą się z 20 losowych liczb z przedziału od 10 do 200. Z utworzonej tablicy wybiesz 10 największych i obliczych ich średnią arytmetyczną.

Zadbaj o odpowiednie nazwy dla funkcji - nie muszą one być identyczne jak w przykładach.


&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)
