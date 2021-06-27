'use strict';
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'summ': return arg1 + arg2;
        case 'minus': return arg1 + arg2;
        case 'multy': return arg1 + arg2;
        case 'divide': return arg1 + arg2;
    }
}
console.log(mathOperation(1, 2, 'summ'));
console.log(mathOperation(4, 6, 'minus'));
console.log(mathOperation(-8, 1, 'multy'));
console.log(mathOperation(81, -2, 'divide'));


