/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function (l1, l2) {
  const result = l1 * l2;
  console.log(result);
};

area(1, 4);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  let sum = n1 + n2;
  if (n1 === n2) {
    sum *= 3;
  }
  console.log(sum);
};

crazySum(4, 4);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n) {
  const toSub = 19;
  let result = n - toSub;
  result = Math.abs(result);
  if (n > 19) {
    result *= 3;
  }
  return result;
};

console.log(crazyDiff(21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(399));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  let epifiedString = str;
  const match = "EPICODE";
  if (str.substring(0, 7) !== match) {
    epifiedString = match + epifiedString;
  }
  return epifiedString;
};

console.log(epify("PICODEtest"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
  const isMultiple = !(n % 3) || !(n % 7);
  console.log(isMultiple);
};

check3and7(6);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reversedString = function (str) {
  str = str.split("");
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  console.log(reversedString);
};

reversedString("EPICODE");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    word = word.split("");
    word.splice(0, 1, word[0].toUpperCase());
    word = word.join("");
    words.splice(i, 1, word);
  }
  words = words.join(" ");
  console.log(words);
};

upperFirst(
  "Scrivi una funzione di nome 'upperFirst', che riceve come parametro una stringa formata da diverse parole."
);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
  let cutString = str.split("");
  const stringLength = cutString.length;
  if (stringLength <= 2) {
    console.log("insert a word with at least 3 letters");
  } else {
    cutString = cutString.join("");
    cutString = cutString.slice(1, stringLength - 1);
    console.log(cutString);
  }
};

cutString("nee");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const resultArr = [];
  for (let i = 0; i < n; i++) {
    const randNum = Math.floor(Math.random() * 10);
    resultArr.push(randNum);
  }
  return resultArr;
};

console.log(giveMeRandom(100));
