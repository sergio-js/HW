"use strict"
// Обчислити значення виразів
const a = parseFloat(prompt("Введіть значення змінної   A"))
const b = parseFloat(prompt("Введіть значення змінної   B"))
const c = parseFloat(prompt("Введіть значення змінної   C"))

//variable
document.write(`
<div>Значення змінної a — ${a}</div>
<div>Значення змінної b — ${b}</div>
<div>Значення змінної c — ${c}</div>
`);

// S₁ = a + 12 + b
const sum1 = a + 12 + b
document.write(`
<br><div>S <sub>1</sub> = ${sum1} </div>
`);

// S₂ = √ ( a + b ÷ 2 a )
const sum2 = Math.sqrt((a + b) / (2 * a))
document.write(`
<div>S <sub>2</sub> = ${sum2} </div>
`);



// S₃ = ∛ ( a + b ) c
const sum3 = Math.cbrt((a + b) * c)
document.write(`
<div>S <sub>3</sub> = ${sum3} </div>
`);

// S₄ = sin ⁡( a ÷ - b )
const sum4 = Math.sin(a / (-b))
document.write(`
<div>S <sub>4</sub> = ${sum4} </div>
`);