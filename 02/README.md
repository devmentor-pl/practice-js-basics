> :white_check_mark: _Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e04-js-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/)._

&nbsp;

# `#02` JavaScript: Podstawy

Tym razem wykorzystasz dwa rodzaje pętli.

## Pętla for

Twój kolega ma syna w podstawówce i właśnie uczy go tabliczki mnożenia. Zaoferowałeś pomoc w formie programu, który pokaże wszystkie działania mnożenia dla wybranej liczby.

Za pomocą pętli `for` stwórz rozwiązanie, które będzie wyświetlać kolejne wyniki mnożenia.

- Pierwszym czynnikiem niech będzie wartość zmiennej `x`, np. `const x = 4`.
- W miejsce drugiego czynnika wstaw kolejne cyfry od 1 do 9.

Wyświetlane działania powinny prezentować się jak poniżej:

```
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
// ...
```

Jak już wszystko będzie działać, zmień `const x = 4` na `const x = prompt('Podaj liczbę!')`. Dzięki [prompt()](https://www.w3schools.com/jsref/met_win_prompt.asp) możesz pobierać dane od użytkownika. Idelanie, jeśli za każdym razem sprawdzisz, czy podana przez użytkownika wartość mieści się w przedziale od 1 do 9.

Zwróć uwagę, że najpierw tworzymy rozwiązanie dla konkretnego przypadku, a dopiero potem je uogólniamy. Tak ułatwiamy sobie proces tworzenia algorytmu. Pamiętaj o tym! Postaraj się w ten sposób rozwiązywać kolejne zadania.

## Pętla while

Pomyślałeś, że przy okazji stworzysz program do nauki potęgowania.

Niech działa on następująco: jeśli `a = 3` (podstawa) oraz `n = 4` (wykładnik) to w konsoli wyświetla się `3 * 3 * 3 * 3 = 81`

W tym rozwiązaniu również możesz użyć `prompt()` i sprawdzać, czy użytkownik wprowadza odpowiednie dane.

&nbsp;

> :no_entry: _Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-js-basics/)_

> :arrow_left: [_poprzednie zadanie_](./../01) | [_następne zadanie_](./../03) :arrow_right:
