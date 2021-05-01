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

/*Мой вариант

document.addEventListener('DOMContentLoaded', () => {
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
    */
    
    /* мой вариант
    let mov = movieDB.movies.sort();
    console.log(mov);
    for (let i = 0; i < mov.length; i++) {
        
               movI[i].textContent = mov[i];
                movI[i].insertAdjacentHTML("afterbegin", `${+i + 1 +". "}`);  
    
    }*/
    
   /*Мой вариант
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
            let a = film.substr(0, 22);
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
            li[i].remove();
            movieDB.movies.splice(i, 1);
            movieDB.movies.sort();
            console.log(movieDB.movies);
        }
    );
    console.log(movieDB.movies);
    });
    
    */
    
    
    document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});
    
    
    
    


