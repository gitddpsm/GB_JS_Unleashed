'use strict'
/*1. Написать функцию, преобразующую число в объект.Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.Например, для числа 245 мы должны получить следующий объект: { ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function div(val, by) {
    return (val - val % by) / by;
}

function transForm(numba) {
    var MyNumber = {
        points: 0,
        decimals: 0,
        hundreds: 0
    };
    if (numba > 999) {
        let empty = {};
        console.log('stack owerflow! max numba 999');
        return empty;
    };
    MyNumber.hundreds = div(numba, 100);
    MyNumber.decimals = div((numba - MyNumber.hundreds * 100), 10);
    MyNumber.points = numba - MyNumber.hundreds * 100 - MyNumber.decimals * 10;
    return MyNumber
};

// console.log(typeof (MyNumber));
// console.log(MyNumber);

console.log(typeof (transForm(1000)));
console.log(transForm(1000));
console.log(transForm(777));