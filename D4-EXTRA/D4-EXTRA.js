// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

let randArr = giveMeRandom(10);
console.log(randArr);

const checkArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const isGreater = arr[i] > 5 ? "maggiore" : "non maggiore";
    console.log(isGreater);
  }
};

checkArray(randArr);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
  {
    price: 5,
    name: "book",
    id: 1,
    quantity: 2,
  },
  {
    price: 1,
    name: "pen",
    id: 2,
    quantity: 4,
  },
  {
    price: 2,
    name: "notebook",
    id: 3,
    quantity: 3,
  },
];

const shoppingCartTotal = function () {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const price = shoppingCart[i].price;
    const quantity = shoppingCart[i].quantity;
    total += price * quantity;
  }
  console.log(total);
};

shoppingCartTotal();

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

const addToShoppingCart = function (shoppingCart, item) {
  shoppingCart.push(item);
  return shoppingCart.length;
};

const newItem = {
  price: 5,
  name: "case",
  id: 4,
  quantity: 1,
};

console.log(addToShoppingCart(shoppingCart, newItem));

console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

const maxShoppingCart = function (shoppingCart) {
  let costliestItem = shoppingCart[0];
  for (let i = 1; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > costliestItem.price) {
      costliestItem = shoppingCart[i];
    }
  }
  return costliestItem.name;
};

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

const latestShoppingCart = function (shoppingCart) {
  const lastItem = shoppingCart[shoppingCart.length - 1];
  return lastItem.name;
};

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

const loopUntil = function (n) {
  let greaterStreak = 0;
  while (true) {
    const randNum = Math.floor(Math.random() * 10);
    console.log(randNum);
    if (randNum > n) {
      greaterStreak++;
      if (greaterStreak === 3) {
        break;
      }
    } else {
      greaterStreak = 0;
    }
  }
};

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const average = function (arr) {
  let sum = 0;
  let trueNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === "number") {
      trueNumbers++;
      sum += element;
    }
  }
  const average = sum / trueNumbers;
  return average;
};

let testArr = [4, 5, 6, 7, "g"];
console.log("---");
console.log(average(testArr));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

const longest = function (arr) {
  let longestString = null;
  let maxChCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let string = arr[i];
    const stringLength = string.length;
    if (stringLength > maxChCount) {
      longestString = arr[i];
      maxChCount = stringLength;
    }
  }
  console.log(longestString, maxChCount);
};

testArr = ["hdddi", "doggy", "dodddddddddg"];

longest(testArr);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

// const emailContent = function (emailContent) {

// };

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

// const f = function (date) {

// }

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

// const matrixGenerator = function (x, y) {

// }
