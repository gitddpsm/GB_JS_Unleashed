
//2. С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть сущность корзины.Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
'use strict';
//  catalog = [{key, price}]

// var id = 0;
// var namePos = 'anyname';
// var price = 0
// var count = 1 //default count

var catalog = [];

// //catalog.push({ namePos, price });
// catalog.push({ itemName: 'товар1', price: 77 });
// catalog.push({ itemName: 'товар2', price: 10 });
// catalog.push({ itemName: 'товар3', price: 20 });
// catalog.push({ itemName: 'товар4', price: 30 });
//catalog.push({ namePos, price });

// console.log(catalog);
// console.log(catalog.pop(id));
// console.log(catalog);
catalog.push({ itemName: 'товар1', itemPrice: 77, });
catalog.push({ itemName: 'товар2', itemPrice: 10, });
catalog.push({ itemName: 'товар3', itemPrice: 20, });
catalog.push({ itemName: 'товар4', itemPrice: 30, });

console.log(catalog[0].value)
var countTable = []; //  key:count
boxTable.push({ itemName: 'товар1', itemCount: 2 });
boxTable.push({ itemName: 'товар2', itemCount: 1 });
boxTable.push({ itemName: 'товар3', itemCount: 4 });
boxTable.push({ itemName: 'товар4', itemCount: 1 });

function boxPrie(boxTable, catalog)
console.log(boxTable.reduce(function (fullPrice, boxItem) {
    return fullPrice + box
}))

// for (let i = 0; i < countTable.length; i++) {
//     console.log(countTable[i])
// }
// console.log('---------------------------');

// // for (let i of countTable) {
// //     console.log(i);
// }
// console.log('---------------------------');

// countTable.forEach(function (item) {
//     console.log(item.itemName)
//     console.log(item.itemCount)
// })

// countTable.forEach(function (item, catalog) {
//     console.log(catalog.find(position => position.itemName === item.itemName));
//     consile.log(item.itemName);
//     //console.log(catalog.find('товар1') + "<- catalog['товар1']");
//     console.log(item.itemCount + "<- item.itemCount");
// })



// объект корзина


