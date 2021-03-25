'use strict';

/*const box = document.getElementById("box");

console.log(box);

//const buttons = document.getElementsByTagName('button')[1]; //получение второй кнопки
//console.log(buttons[1]); можно еще так
const buttons = document.getElementsByTagName('button');
console.log(buttons);

const circle = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); //первый на странице с таким селектором
*/

const box = document.getElementById("box");
const buttons = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const wrapper = document.querySelector('.wrapper');

console.dir(box);

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

//buttons[1].style.borderRadius = '100%';

//circle[0].style.backgroundColor = 'black';

//box.style.cssText = 'background-color: yellow; width: 300px';

//for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'green';
//}

//hearts.forEach(item => {
//    item.style.backgroundColor = 'green';
//});

const div = document.createElement('div');
//const text = document.createTextNode('Privet');

div.classList.add('black');

//wrapper.append(div); в конец родителя

//wrapper.prepend(div); в начале родителя

//hearts[1].before(div); перед элементом

//hearts[1].after(div); после элемента

//circle[1].remove(); удаление элемента

//hearts[0].replaceWith(circle[0]); передвигает второй элемент на место первого 

wrapper.append(div);

//div.innerHTML = '<h1>Yay</h1>'; добавление HTML кода в страницу
//div.textContent = "Yay!"; для записи ИСКЛЮЧИТЕЛЬНО текста

div.innerHTML = '<h1>Yay</h1>';

div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');
//afterbegin внутрь элемента, в начало
//beforeend внутрь элемента в конец
//afterend после элемента
//beforebegin перед элементом

