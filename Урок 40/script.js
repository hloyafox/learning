// const now = new Date();

// console.log(now.getDay());

// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());


// const now = new Date();

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i**3
}

let end = new Date();

alert (`Цикл отработал за ${end - start} за миллисекунд`);