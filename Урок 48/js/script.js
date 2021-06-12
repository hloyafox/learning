window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
      tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');

      });
      tabs.forEach (item => {
        item.classList.remove('tabheader__item_active');
      });
  }
  
  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {

    const target = event.target;

    if(target && target.classList.contains('tabheader__item')) {

      tabs.forEach((item, i) => {
        if(target == item) {
          hideTabContent();
          showTabContent(i);

        }
      });

    }

  });

// Timer

const deadline = '2021-06-30';

function getTimeRemaining(endtime){
  const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000/60) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
}

function getZero(num) {
  if(num >=0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
  
        updateClock();

        function updateClock() {

          const t = getTimeRemaining(endtime);

          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }
        }
    
}

setClock('.timer', deadline);

//Modal

const modalBtn = document.querySelectorAll('[data-modal]'),
      modalClose = document.querySelector('[data-close]'),
      modalWind = document.querySelector('.modal');
function openModel() {
    modalWind.classList.add('show');
    modalWind.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

function closeModal() {
    modalWind.classList.add('hide');
    modalWind.classList.remove('show');
    document.body.style.overflow = '';
}

modalBtn.forEach(btn => {
btn.addEventListener('click', openModel);
});


modalClose.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modalWind.classList.contains('show')) {
    closeModal();
  }
});

document.addEventListener('click', (ev) => {
  if (ev.target === modalWind) {
    closeModal();
  } 
});

const modalTimerId = setTimeout(openModel, 5000);

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModel();
    window.removeEventListener('scroll', showModalByScroll);
  } 
}

window.addEventListener('scroll', showModalByScroll);

});

//card menu

class MenuCard {
  constructor(img, title, alt, description, price, id) {
    this.title = title;
    this.img = img;
    this.description = description;
    this.price = price;
    this.alt = alt;
    this.id = id;

  }
  addCard(){
    let container = document.querySelector(`${this.id}`);
    let item = `<div class="menu__item">
                    <img src="${this.img}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>`;
    container.insertAdjacentHTML('beforeend', item);
  }
}

let props = [
  {img: 'img/tabs/vegy.jpg', alt: 'vegy', title: 'Меню "Фитнес"', description: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', price: '229'},
  {img: 'img/tabs/elite.jpg', alt: 'elite', title: 'Меню “Премиум”', description: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', price: '550'},
  {img: 'img/tabs/post.jpg', alt: 'post', title: 'Меню "Постное"', description: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', price: '430'}
]

function showCard(arr) {
    arr.forEach(i => {
      new MenuCard(i.img, i.title, i.alt, i.description, i.price, '#menu_card').addCard();
    })
}

showCard(props);