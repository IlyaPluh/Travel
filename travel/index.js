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

let slider = document.querySelectorAll('.destination_img')
let ellipse = document.querySelectorAll('.ellipse')
let offset = 0
let n = 1
const removestyle = () => {
    offset = 0
    slider.forEach((el) => { 
        el.style.transform = `translate(0)`
        el.style.left = ''
        el.style.right = ''
        el.style.transition = 'none'
    }
    )}

document.querySelector('.destination').addEventListener('click', (event) => {
    
    slider.forEach(el => el.style.transition = 'all .45s')


    if (event.target.classList.contains('right')) 
    {   
        offset -= 850
        offset >= 0 ? slider[0].style.right = '' : slider[0].style.left = '2550px'
        slider.forEach(el => el.style.transform = `translate(${offset}px)`)
        let slider2 = [slider[1], slider[2], slider[0]]
        slider = slider2
        n--
        
        
    }
    if (event.target.classList.contains('left')) 
    {   
        offset += 850
        offset <= 0 ? slider[2].style.left = '' : slider[2].style.right = '2550px'
        slider.forEach(el => el.style.transform = `translate(${offset}px)`)
        let slider2 = [slider[2], slider[0], slider[1]]
        slider = slider2
        n++
    }
    if (offset === -2550 || offset === 2550) {
        setTimeout(removestyle, 400)
    }
    if (n>2) n=0
    if (n<0) n=2
    ellipse.forEach(el => el.classList.remove('active'))
    ellipse[n].classList.add('active')
    
})

//mobile slider
let offsetm = 0
let d = 0
document.querySelector('.ico_arr').addEventListener('click', () => {
    offsetm += 390
    if (offsetm > 780) offsetm = 0
    document.querySelector('.destination').style.transform = `translate(-${offsetm}px)`
    d++
    if (d>2) d=0
    ellipse.forEach(el => el.classList.remove('activem'))
    ellipse[d].classList.add('activem')
})

document.querySelector('.ico_arrl').addEventListener('click', () => {
    offsetm -= 390
    if (offsetm < 0) offsetm = 780
    document.querySelector('.destination').style.transform = `translate(-${offsetm}px)`
    d--
    if (d<0) d=2
    ellipse.forEach(el => el.classList.remove('activem'))
    ellipse[d].classList.add('activem')
})

//end slider



