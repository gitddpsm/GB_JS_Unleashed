//2. С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть сущность корзины.Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
'use strict'

let box = [
    ['Товар1', 80, 3],
    ['Товар1', 200, 4],
    ['Товар1', 1500, 5],
    ['Товар1', 7000, 6]
];

//console.log(box)

function calculate(box) {
    return box.reduce(function (summ, boxItem) {
        return summ + boxItem[1] * boxItem[2]
    }, 0);
    //return 'pass'
}

console.log(calculate(box))

