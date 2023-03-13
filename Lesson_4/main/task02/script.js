"use strict"

//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби:


let numberEnter = parseInt(prompt("Введіть число від 1 до 5 "))

let minNumber = 1
let maxNumber = 5

//Рандомне число від 1 до 5
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
// console.log(randomNumber);

if (numberEnter === randomNumber)
	document.write(` 
	Вітаємо &#9996  
	Ви вгадали число!`)
else
	numberEnter = parseInt(prompt("Ви не вгадали число! Спробуйте ще раз..."))

if (numberEnter === randomNumber)
	document.write(` 
	Вітаємо &#9996 
`)
else document.write(`
	Ви не вгадали число. 
	Спроб більше немає`)
