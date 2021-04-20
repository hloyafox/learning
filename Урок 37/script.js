const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
// //console.log(btns[0].classList.length);
// //console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red')); //через запятую можно удалять или добавлять несколько элементов.
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue')); //удаляет если есть и добавляет, если нет

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {

    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
}

);

// ДЕЛЕГИРОВАНИЕ
// wrapper.addEventListener('click', (event) => {

//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }

// });

wrapper.addEventListener('click', (event) => {

    if (event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }

});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     }
//     );
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);