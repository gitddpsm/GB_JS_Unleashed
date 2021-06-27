# GB_JS_Unleashed
1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

Почему код даёт именно такие результаты?
Ответ:
    Значение i++ это значение i до инкрименирования. Значение ++i это значение i после никрименирования.

2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);
Ответ:
    x = 5

3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
7. *Сравнить null и 0. Попробуйте объяснить результат.
    OTBET:
        > null === 0
        false
        > null !== 0
        true
        > typeof null
        'object'
        > typeof 0
        'number'

8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
