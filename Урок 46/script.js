'use strict'

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); //this = 2
// console.log(doble(3)); //num = 3
//1) Обычная функция: this = window, но если use strict - undefined
//2) Контекст у методов оъекта - сам объект. Если функция вызывается внутри метода, то ее контекст будет п.1
//3) this в конструкторах и классах - это новый экземпляр объекта 
//4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    // console.log(this);
    this.style.backgroundColor = 'red';
}); //обработчик события в класс. режиме (function) this = event.target (контекст = кнопка, например)

btn.addEventListener('click', () => {
    // console.log(this);
    this.style.backgroundColor = 'red'; //undefinde - контекст вызова теряется, потому что стрелочная функция берет контекст родителя.
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () =>{
            console.log(this); //стрелочная функция берет контекст родителя
        }

        say();
    }
};

obj.sayNumber();

const double = (a) => a*2; //если стрелочная функция в одну строчку - можно без {}
