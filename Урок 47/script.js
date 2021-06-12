'use strict'

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { //наследование
    constructor(height, width, text, bgColor) {
        super(height, width); // позволяет наследовать свойства из конструктора родтеля
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}

// const square = new Rectangle(10, 10);
// console.log(square.calcArea());
// const long = new Rectangle(5, 15);
// console.log(long.calcArea());

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red');

div.showMyProps();
console.log(div.calcArea());