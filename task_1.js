
/*4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.Выглядеть это должно так:

for (…) {// здесь пусто}*/
'use strict'

let i = 0;

while (i < 100) {
    // Just number validtion 
    if (isPrimeNumber(i)) {
        console.log(i);
    }
    i++ //iter incremention 
}

function isPrimeNumber(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        // fase if clear divide for 2 
        if (number % i === 0) {
            return false;
        }
    }

    // Если не было найдено делителя в цикле выше, значит число является простым.

    return true;
}
