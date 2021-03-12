/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    start: function(){
        this.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Последний просмотренный фильм');
            const b = prompt('Оцените его');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы стандартный зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log("Произошла ошибка");
        }
    },
        showMyDB: (hidden) => {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            let z = prompt(`Введите любимые жанры через запятую`);
            if (z == null || z == '') {
                alert("Error");
                i--;
            } else {
            personalMovieDB.geners = z.split(', ');
            personalMovieDB.geners.sort();
            }
        }
        personalMovieDB.geners.forEach((item, i) => {
            alert(`Ваш любимый жанр ${i + 1} - это ${item}`);
        });
    },
    //     это мой вариант
    //    if (z != null && z != '') {
    //         personalMovieDB.geners.push(z);
            
    //     } else {
    //         let z = prompt(`Ваш любимый жанр под номером ${i}`);
    //         i--;
    //     }
    //     }
    //     for (let k in personalMovieDB.geners) {
    //         alert ("Любимый жанр № " + `${+k + 1}` + " это " + `${personalMovieDB.geners[k]}`);
    //     }
    // },

toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }


};

personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

// Код возьмите из предыдущего домашнего задания



