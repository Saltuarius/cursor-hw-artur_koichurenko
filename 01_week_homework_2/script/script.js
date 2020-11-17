"use strict"

let inputFirstNumber = +prompt("Введіть перше ціле число!");
inputFirstNumber = Math.trunc(inputFirstNumber);

while (inputFirstNumber === " " || isNaN(inputFirstNumber))  
{  
    inputFirstNumber = prompt("Е-ні! Введіть ціле число!");  
}  
alert(`Ваше перше число: ${inputFirstNumber}`);

let inputLastNumber = +prompt("Введіть кінцеве ціле число!");
inputLastNumber = Math.trunc(inputLastNumber);

while (inputLastNumber === " " || isNaN(inputLastNumber) || inputFirstNumber > inputLastNumber)  
{  
    inputLastNumber = prompt("Е-ні! Введіть ціле число, яке більше від попереднього!");  
}  
alert(`Ви ввели число ${inputLastNumber}`);


const EvenNumbers = confirm('Чи треба пропускати парні числа?');
let sumOfNumbers = 0;
for (let i = inputFirstNumber; i <= inputLastNumber; i++) {
    if (i % 2 === 0 && EvenNumbers === false || i % 2 === 1) {
        sumOfNumbers += i;
    } 
}

alert(`Ваша відповідь: ${sumOfNumbers}`);