"use strict"

// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься:


const season = parseInt(prompt("Введіть номер місяця", 1))

if (season === 1) {
	document.write(`ЗИМА &#10052;`)
} else if (season === 2) {
	document.write(`ЗИМА &#10052;`)
} else if (season === 3) {
	document.write(`ВЕСНА &#10048;`)
} else if (season === 4) {
	document.write(`ВЕСНА &#10048;`)
} else if (season === 5) {
	document.write(`ВЕСНА &#10048;`)
} else if (season === 6) {
	document.write(`ЛІТО &#9728;`)
} else if (season === 7) {
	document.write(`ЛІТО &#9728;`)
} else if (season === 8) {
	document.write(`ЛІТО &#9728;`)
} else if (season === 9) {
	document.write(`ОСІНЬ &#9729;`)
} else if (season === 10) {
	document.write(`ОСІНЬ &#9729;`)
} else if (season === 11) {
	document.write(`ОСІНЬ &#9729;`)
} else if (season === 12) {
	document.write(`ЗИМА &#10052;`)
}
else {
	document.write(`Неоректне значення!`)
}