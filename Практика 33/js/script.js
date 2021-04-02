/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const virus = document.querySelector('.promo__adv');
virus.remove();

document.querySelector('.promo__genre').textContent = "Драма"; 

const bg = document.querySelector('.promo__bg');
bg.style.cssText = "background:url('img/bg.jpg');";

let movI = document.querySelectorAll('.promo__interactive-item');


/* мой вариант
let mov = movieDB.movies.sort();
console.log(mov);
for (let i = 0; i < mov.length; i++) {
    
           movI[i].textContent = mov[i];
            movI[i].insertAdjacentHTML("afterbegin", `${+i + 1 +". "}`);  

}*/

let movieNew = document.querySelector('.adding__input');
let button = document.querySelector('button');
button.addEventListener('click', (ev) => {
    if (movieNew.value) {
    ev.preventDefault();
    movieDB.movies.push(movieNew.value);
    const movieList = document.querySelector(".promo__interactive-list");
    movieList.innerHTML ="";
    movieDB.movies.sort();
    let submt = document.querySelector('input[type="checkbox"]');
    if (submt.checked) {
        console.log('You like this!');
    }
    movieDB.movies.forEach( (film, i) => {
   
    if (film.length > 21) {
        let a = film.substr(0, 19);
        movieList.innerHTML += `
         <li class="promo__interactive-item"> ${i + 1 + '. '} ${a + '...'}
                            <div class="delete"></div>
        </li>
    `;
    } else {
        movieList.innerHTML += `
         <li class="promo__interactive-item"> ${i + 1 + '. '} ${film + '. '}
                            <div class="delete"></div>
        </li>`;
    }

    movieNew.value = '';

});
    } else {
        ev.preventDefault();
    }


});
let dlts = document.querySelectorAll('.delete');
//console.log(dlt);

dlts.forEach ((dlt, i) => {
    let li = document.querySelectorAll('.promo__interactive-item');
    dlt.addEventListener('click', () => {
        movieDB.movies.splice(i, 1);
        li[i].remove();
        console.log(movieDB.movies);
    }
);
});
