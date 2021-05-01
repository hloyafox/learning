//touchstart - касание
//touchmove - движение пальцем
//touchend - когда кончилось прикосновение
//touchenter - когда палец зашел на элемент
//touchcancel -точка соприкосновения не регистрируется
//touchleave

/*window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
        console.log(e.targetTouches[0].pageX);
    });


});*/

//touches - список пальцев на экране
//targetTouches - список пальцев на объекте
//changedTouches - список пальцев, совершивших действие
//hammer.min.js
//defer - загружает скрипт после загрузки всего дерева
//async - асинхронные скрипты не ждут друг друга, запускается как только он был загружен и никого не ждет. Нужен для метрик и счетчиков. 

"use strict";

const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
document.body.append(script);
//по умолчанию ведет себя как async
}

loadScript('some.js');
loadScript('wow.js');

