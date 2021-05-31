'use strict';

//функция-конструктор, то, что под капотом классов.

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name) {
    console.log(`Good bay ${this.name}`);
};

const ivan = new User('Ivan', 28);
const alex = new User ('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);