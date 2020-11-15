'use strict'

const PRODUCT_A = 15.678;
const PRODUCT_B = 123.965;
const PRODUCT_C = 90.2345;

// Part 1

console.log(`Максимальна вартість серед наведених товарів: ${Math.max(PRODUCT_A, PRODUCT_B, PRODUCT_C)}`);
console.log(`Мінімальна вартість серед наведених товарів: ${Math.min(PRODUCT_A, PRODUCT_B, PRODUCT_C)}`);
const PRODUCT_SUM = PRODUCT_A + PRODUCT_B + PRODUCT_C;
console.log(`Сума усіх товарів: ${PRODUCT_SUM.toFixed(2)}`); //Визначання суми значень 3-х перемінних
console.log(`Сума округлених до меншого цілих частин вартості товару: ${(Math.floor(PRODUCT_A)) + (Math.floor(PRODUCT_B)) + (Math.floor(PRODUCT_C))}`); //округлення та додавання цілих частин вартості кожного товару між собою
console.log(`Округлена до сотень сума товарів: ${Math.ceil(PRODUCT_SUM / 100 ) * 100 }`);
console.log(`Виведення булевого значення суми усіх товарів: ${Math.floor(PRODUCT_SUM) % 2 === 0}`);
const MONEY_AMOUNT = 500;
console.log(`Сума решти з 500 грн: ${(MONEY_AMOUNT - PRODUCT_SUM).toFixed(2)}`); //додатково виконано округлення до сотих
console.log(`Cереднє значення цін, округлене до другого знаку після коми: ${(PRODUCT_SUM / 3).toFixed(2)}`);

// Більш складне

let randomDiscount = Math.trunc(Math.random(0,1)*100);
console.log(`Знижка складає ${randomDiscount}%`);
console.log(`Сума до оплати з урахуванням знижки: ${(PRODUCT_SUM - ((PRODUCT_SUM / 100) * randomDiscount)).toFixed(2)}`);
console.log(`Чистий прибуток складає: ${(((PRODUCT_SUM)/2) - ((PRODUCT_SUM / 100 * randomDiscount))).toFixed(2)}`);

// Advanced

console.log('Advanced Part:')
console.log (
`1) Максимальна вартість серед наведених товарів: ${Math.max(PRODUCT_A, PRODUCT_B, PRODUCT_C)}
2) Мінімальна вартість серед наведених товарів: ${Math.min(PRODUCT_A, PRODUCT_B, PRODUCT_C)}
3) Сума усіх товарів: ${PRODUCT_SUM.toFixed(2)}
4) Сума округлених до меншого цілих частин вартості товару: ${Math.floor(PRODUCT_A) + Math.floor(PRODUCT_B) + Math.floor(PRODUCT_C)}
5) Округлена до сотень сума товарів: ${Math.ceil( PRODUCT_SUM / 100 ) * 100}
6) Виведення булевого значення суми усіх товарів: ${Math.floor(PRODUCT_SUM) % 2 === 0}
7) Сума решти з 500 грн: ${(MONEY_AMOUNT - PRODUCT_SUM).toFixed(2)}
8) Cереднє значення цін, округлене до другого знаку після коми: ${(PRODUCT_SUM / 3).toFixed(2)}
9) Знижка складає ${randomDiscount}%
10) Сума до оплати з урахуванням знижки: ${(PRODUCT_SUM - ((PRODUCT_SUM / 100) * randomDiscount)).toFixed(2)}
11) Чистий прибуток складає: ${((PRODUCT_SUM / 2) - (PRODUCT_SUM / 100 * randomDiscount)).toFixed(2)}`
);
