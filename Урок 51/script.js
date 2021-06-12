'use strict'

//JSON

const person = {
    name: 'Alex',
    phone: '+79999999999'
};

console.log(JSON.stringify(person)); //JSON.parse() - превращает в объект

let clone = JSON.parse(JSON.stringify(person)); // Используется для глубокого копирования объектов (объекты объектов копируются).