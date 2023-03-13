"use strict"

// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). 
//Вивести на екран назву транспортного засобу, яким він може керувати:



const driverCategory = prompt("Введіть свою категорію водія...")
//Приводимо введені букви в верхній регістр, на той випадок, якщо користувач введе маленьку або велику літеру
const bigLetterDriverCategory = driverCategory.toUpperCase()
console.log(bigLetterDriverCategory);


if (bigLetterDriverCategory === "A") {
	document.write("Ви можете керувати мотоциклом  &#128757;")
} 
else if (bigLetterDriverCategory === "B") {
	document.write("Ви можете керувати авто  &#128663;")
} 
else if (bigLetterDriverCategory === "C") {
	document.write("Ви можете керувати вантажним авто  &#128666;")
} 

else {
	document.write("Такої категорії не існує!  &#9940;")
}