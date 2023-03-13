"use strict"

// Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
const priceGoods = parseFloat(prompt("Введіть ЦІНУ товару (ГРН)"))
const quantityGoods = parseFloat(prompt("Введіть КІЛЬКІСТЬ товару"))
const TAX = parseFloat(prompt("Введіть ПОДАТОК (%)"))




const totalPrice = priceGoods * quantityGoods
console.log(totalPrice);


const taxPrice = (totalPrice / 100) * TAX
console.log(taxPrice);

document.write(`
<div>Ціна за одиницию товару : ${priceGoods} грн</div>
<div>Кількість товару : ${quantityGoods.toFixed(2)}</div>
<div>Загальна вартість : ${totalPrice.toFixed(2)} грн</div>
<div>ПДВ : ${taxPrice.toFixed(2)} грн (${(TAX)} %)</div>
`)
