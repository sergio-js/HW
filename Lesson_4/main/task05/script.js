"use strict"

// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня:

const dayOfWeek = parseInt(prompt("Введіть номер дня тижня (1-7)", 1))

if (dayOfWeek === 1) {
	document.write(`Понеділок`)
} else if (dayOfWeek === 2) {
	document.write(`Вівторок`)
} else if (dayOfWeek === 3) {
	document.write(`Середа`)
} else if (dayOfWeek === 4) {
	document.write(`Четвер`)
} else if (dayOfWeek === 5) {
	document.write(`П'ятниця`)
} else if (dayOfWeek === 6) {
	document.write(`Суббота`)
} else if (dayOfWeek === 7) {
	document.write(`Неділя`)
} else {
	document.write(`Неоректне значення!`)
}

/*
let result

switch (dayOfWeek) {
	case 1: result = "Понеділок"; break;
	case 2: result = "Вівторок."; break;
	case 3: result = "Середа"; break;
	case 4: result = "Четвер."; break;
	case 5: result = "П_ятниця"; break;
	case 6: result = "Суббота"; break;
	case 7: result = "Неділя"; break;
	default: result = "Неоректне значення!"; break;
}
alert(result);
*/
