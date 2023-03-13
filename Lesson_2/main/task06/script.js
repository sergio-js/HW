"use strict"

// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

let productCountOne = parseInt(prompt("Введіть кількість першого товару"))
let productPriceOne = parseFloat(prompt("Введіть вартість першого товару"))


let productCountTwo = parseInt(prompt("Введіть кількість другого товару"))
let productPriceTwo = parseFloat(prompt("Введіть вартість другого товару"))

let productCountThree = parseInt(prompt("Введіть кількість третього товару"))
let productPriceThree = parseFloat(prompt("Введіть вартість третього товару"))


const TAX_RATE = 0.2

let totalPriceFirstProduct = productCountOne * productPriceOne
let totalPriceSecondProduct = productCountTwo * productPriceTwo
let totalPriceThirdProduct = productCountThree * productPriceThree


let totalPrice = totalPriceFirstProduct + totalPriceSecondProduct + totalPriceThirdProduct;

let taxValue = totalPrice * TAX_RATE

document.write(`
<div class="check">
<div class="check__body">
	<h5 class="check__title">Фіксальний чек</h5>
	<ol class="check__content">
		<li class="check__item">ПИВО — <span>${productCountOne}</span> * <span>${productPriceOne} грн</span>
			<p class="check__price">Вартість — <span>${totalPriceFirstProduct.toFixed(2)} грн</span></p>
		</li>
		<li class="check__item">ГОРІШКИ —  <span>${productCountTwo}</span> * <span>${productPriceTwo} грн</span>
			<p class="check__price">Вартість — <span>${totalPriceSecondProduct.toFixed(2)} грн</span></p>
		</li>
		<li class="check__item">ТАРАНЬКА — <span>${productCountThree}</span> * <span>${productPriceThree} грн</span>
			<p class="check__price">Вартість — <span>${totalPriceThirdProduct.toFixed(2)} грн</span></p>
		</li>
	</ol>
	<div class="check__bottom">
		<p class="check__all-price">Загальна вартість — ${totalPrice.toFixed(2)} грн</p> 
		<p class="check__tax">ПДВ А 20.00% — ${taxValue.toFixed(2)} грн</p>
		<p class="check__thanks">Дякуємо за покупку 😉</p>
	</div>
</div>
</div>

`)
