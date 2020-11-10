'use strict'

const product_a = 15.678;
const product_b = 123.965;
const product_c = 90.2345;

// Part 1

console.log(`Максимальна вартість серед наведених товарів: ${Math.max(product_a, product_b, product_c)}`);
console.log(`Мінімальна вартість серед наведених товарів: ${Math.min(product_a, product_b, product_c)}`);
let product_sum = product_a + product_b + product_c;
console.log(`Сума усіх товарів: ${product_sum.toFixed(2)}`); //Визначання суми значень 3-х перемінних
console.log(`Сума округлених до меншого цілих частин вартості товару: ${(Math.floor(product_a)) + (Math.floor(product_b)) + (Math.floor(product_c))}`); //округлення та додавання цілих частин вартості кожного товару між собою
console.log(`Округлена до сотень сума товарів: ${Math.round((product_a + product_b + product_c) / 100 ) * 100 }`);
console.log(`Виведення булевого значення суми усіх товарів: ${Math.floor(product_a + product_b + product_c) % 2 == 0}`);
console.log(`Сума решти з 500 грн: ${(500 - (product_a + product_b + product_c)).toFixed(2)}`); //додатково виконано округлення до сотих
console.log(`Cереднє значення цін, округлене до другого знаку після коми: ${((product_a + product_b + product_c) / 3).toFixed(2)}`);

// Більш складне

let randomDiscount = Math.trunc(Math.random(0,1)*100);
console.log(`Знижка складає ${randomDiscount}%`);
console.log(`Сума до оплати з урахуванням знижки: ${((product_a + product_b + product_c) - (((product_a + product_b + product_c)/100) * randomDiscount)).toFixed(2)}`);
console.log(`Чистий прибуток складає: ${((((product_a + product_b + product_c)/2)) - (((product_a + product_b + product_c) / 100 * randomDiscount))).toFixed(2)}`);

// Advanced

console.log('Advanced Part:')
console.log (
`1) Максимальна вартість серед наведених товарів: ${Math.max(product_a, product_b, product_c)}
2) Мінімальна вартість серед наведених товарів: ${Math.min(product_a, product_b, product_c)}
3) Сума усіх товарів: ${product_sum.toFixed(2)}
4) Сума округлених до меншого цілих частин вартості товару: ${(Math.floor(product_a)) + (Math.floor(product_b)) + (Math.floor(product_c))}
5) Округлена до сотень сума товарів: ${Math.round((product_a + product_b + product_c) / 100 ) * 100 }
6) Виведення булевого значення суми усіх товарів: ${Math.floor(product_a + product_b + product_c) % 2 == 0}
7) Сума решти з 500 грн: ${(500 - (product_a + product_b + product_c)).toFixed(2)}
8) Cереднє значення цін, округлене до другого знаку після коми: ${((product_a + product_b + product_c) / 3).toFixed(2)}
9) Знижка складає ${randomDiscount}%
10) Сума до оплати з урахуванням знижки: ${((product_a + product_b + product_c) - (((product_a + product_b + product_c)/100) * randomDiscount)).toFixed(2)}
11) Чистий прибуток складає: ${((((product_a + product_b + product_c)/2)) - (((product_a + product_b + product_c) / 100 * randomDiscount))).toFixed(2)}`
);
