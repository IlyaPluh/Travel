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

const login = document.querySelector('.button_login');
const popup = document.querySelector('.pop-up');

login.addEventListener('click', () => {
    popup.classList.toggle('hidden')
})

popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')) {
        popup.classList.toggle('hidden')
        console.log(event)
    }
})