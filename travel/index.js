$(document).ready(function() {
    $('.hamburger').click(function() {
      $('.header_navigation').slideToggle(400);
    });//end slide toggle
});

$(document).on('click', function(e) 
{
    var container = $('.header_navigation');
    var hamburger = $('.hamburger');
    var hamburger_line = $('.hamburger_line');
    var nav = $('.navigation_link')
    if (!container.is(e.target) && !hamburger_line.is(e.target) && !hamburger.is(e.target) && $(window).width() < 391) 
    {
        container.hide(400);
    }
});



//    (function () {
//       const burgerItem = document.querySelector('.hamburger'); // находим кнопку для открытия навигации
//       const menu = document.querySelector('.header_navigation'); // находим окно навигаци
//       //const menuCloseItem = document.querySelector('.header__nav_close');  // находим кнопку для закрытия окна навигации
//       const menuLinks = document.querySelectorAll('.navigation');// находим весь (All) список ссылок для закрытия окна навигации

//       burgerItem.addEventListener('click', () => { // при клике на кнопку
//          menu.classList.add('nav__active');  // открываем окно навигации, добавляя активный класс
//       });

//     //   menuCloseItem.addEventListener('click', () => { // при клике на кнопку
//     //      menu.classList.remove('nav__active');  // закрываем окно навигации, удаляя активный класс
//     //   });


//       if (window.innerWidth <= 390) {  // если ширина окна <= 390 px
//          for (let i = 0; i < menuLinks.length; i++) { // то перемещаемся по  All списку ссылок меню
//             menuLinks[i].addEventListener('click', () => {  // при клике на [i]-ю ссылку
//                menu.classList.remove('nav__active'); // закрываем окно навигации, удаляя активный класс
//             });
//          }
//       }


//       window.addEventListener('click', (e) => {   // при клике в любом месте окна браузера
//          const target = e.target; // находим элемент, на котором был клик
//          if (!target.closest('.header_navigation') && !target.closest('.hamburger')) {   // если этот элемент или его родительские элементы не окно навигации и не кнопка бургера
//             menu.classList.remove('nav__active');  // то закрываем окно навигации, удаляя активный класс
//          }
//       });

//    }());