"use strict"
/*
Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
*/
//Просимо користувача ввести перше і друге число
const a = parseFloat(prompt("Введіть ПЕРШЕ число"))
const b = parseFloat(prompt("Введіть ДРУГЕ число"))


//Отримуємо суму чисел
const sum = a + b
//Отримуємо добуток чисел
const multiplication = a * b
//Отримуємо частку чисел
const fraction = a / b


//Виводимо таблицю в HTML для наглядності
document.write(`
 <table>
<tbody>
	<tr>
		<th colspan="2">ЧИСЛА</th>
		<th>СУМА</th>
		<th>ДОБУТОК</th>
		<th>ЧАСТКА</th>
	</tr>
	<tr>
		<th >${a}</th>
		<th >${b}</th>
		<th >${sum.toFixed(2)}</th>
		<th >${multiplication.toFixed(2)}</th>
		<th >${fraction.toFixed(2)}</th>
	</tr>
</tbody>
</table>
`)
