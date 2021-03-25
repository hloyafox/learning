const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

let i = 0;


const del =  (event) => {

    console.log(event.currentTarget);
    console.log(event.type);
    //i++;
    //if (i == 1) {
      //  btn.removeEventListener('click', del);
    //}
};
btns.forEach(btn => {
    btn.addEventListener('click', del, {once: true});});

//overlay.addEventListener('click', del);

const link = document.querySelector('a');
link.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log(ev.target);
});