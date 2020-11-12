
/*
 Array - массив
 Массив - упорядоченная последовательность чего-угодно
 [] - пустой массив
 ["Печенька", 2, 0,1,true, undefined]

arr.length
arr[0] - последний элемент
arr[arr.length - 1] Обращение к последнему индексу.



*/
let ivan = ["Печенька", 2, 0, 1, true, undefined];
let ivanObj = {
  word: "Печенька"
}
console.log(ivan.length);
console.log(ivan[3]);
ivan[13] = "Igor";
console.log(ivan);
console.log(ivan[10]);

let numbers = [];
/* Наполнить массив 100 рандомными числами (1-100) и посчитать их сумму)      */
function getNumber(max,min){
  return Math.floor(Math.random() * 
  (max - min) + min);

}

let i = 0;
while (i < 100) {
  numbers[i] = getNumber(101, 1);
  i++;
}
console.log(numbers);
let arrSum = 0;
for (let i = 0, cnt = numbers.length; i < cnt; i++) {
  arrSum += numbers[i];
}
console.log(arrSum);

let fruits = [
  "Банан",
  "Манго",
  "киви",
  "яблоко",
  "ананас",
  "мандарин",
  "хурма",
];
/*
Методы массива
.push(el) - добавить элемент в конец массива
.unshift(el)
.pop() - забрать последний элемент массива
.shift() - забрать первый элемент массива
*/
fruits.push("груша");
fruits.push("персик");
fruits.unshift("абрикос");
console.log(fruits);
let last = fruits.pop();
console.log(fruits, last);
