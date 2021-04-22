// const timerId = setTimeout(logger, 2000);

// clearInterval(timerId); удаляет интервал

// function logger () {
//     console.log('Text');
// }

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;
// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });



// function logger () {
//     if(i === 3) {
//         clearInterval(timerId);
//     }    
//     console.log('Text');
//         i++;
//     }

    //рекурсивный вызов setTimeout

    // let id = setTimeout(function log () {
    //     console.log('Hello');
    //     id = setTimeout(log, 500);
    // }, 500);

    const btn = document.querySelector('.btn');
    let timerId,
        i = 0;
    
    function myAnimation() {
        const elem = document.querySelector('.box');
        let pos = 0;
        const id = setInterval(frame, 10);
        function frame() {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    btn.addEventListener('click', myAnimation);