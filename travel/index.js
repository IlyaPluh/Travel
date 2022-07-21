$(document).ready(function() {
    $('.hamburger').click(function() {
      $('.header_navigation').slideToggle(400);
    });
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
const popupcontent = document.querySelector('.pop-up_content');
const signin = document.querySelector('.signin_button');
const email = document.querySelector('.email_input');
const pass = document.querySelector('.pass_input');
const register = document.querySelector('.reg');
const signup = document.querySelector('.signup_button')
const account = document.querySelector('.Account')
let tooglenone = document.querySelectorAll('.tooglenone')
let toogleblock = document.querySelectorAll('.toogleblock')

login.addEventListener('click', () => {
    popup.classList.toggle('hidden')
    popupcontent.style.transform = "translateY(0)"
    document.body.style.overflow = 'hidden'
})

account.addEventListener('click', () => {
    popup.classList.toggle('hidden')
    popupcontent.style.transform = "translateY(0)"
    document.body.style.overflow = 'hidden'
})

popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')) {
        popup.classList.toggle('hidden')
        popupcontent.style.transform = "translateY(-750px)"
        document.body.style.overflow = 'unset'
    }
})

signin.addEventListener('click', () => {
    alert(`E-mail: ${email.value}\nPassword: ${pass.value}`);
})

signup.addEventListener('click', () => {
    alert(`E-mail: ${email.value}\nPassword: ${pass.value}`);
})

register.addEventListener('click', () => {
    tooglenone.forEach(el => el.classList.toggle('none'))
    toogleblock.forEach(el => el.classList.toggle('block'))
    register.textContent === 'Register' ? register.textContent = 'Log in' : register.textContent = 'Register'
})


//slider
let offset = 0;
const slider = document.querySelectorAll('.destination_img')

// slider.addEventListener('click', (event) => {
//     if (event.target.classList.contains('destination_img')) {
//         offset += 840
//         slider.forEach(el => el.style.left = -offset + 'px')
//     }})

slider.forEach(el => el.firstElementChild.addEventListener('click', () => {
    console.log(el.firstElementChild)
}))