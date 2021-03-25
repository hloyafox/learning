/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
console.log(movI);

/* мой вариант
let mov = movieDB.movies.sort();
console.log(mov);
for (let i = 0; i < mov.length; i++) {
    
           movI[i].textContent = mov[i];
            movI[i].insertAdjacentHTML("afterbegin", `${+i + 1 +". "}`);  

}*/
const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML ="";
movieDB.movies.sort();
movieDB.movies.forEach( (film, i) => {

    movieList.innerHTML += `
         <li class="promo__interactive-item"> ${i + 1 + '. '} ${film}
                            <div class="delete"></div>
        </li>
    `;
}

);



