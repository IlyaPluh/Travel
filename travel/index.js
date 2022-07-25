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
let offset = 0
const addstyle = () => {
    slider[0].style.transition = 'all .5s'
    slider[1].style.transition = 'all .5s'
    slider[2].style.transition = 'all .5s'
    slider[1].style.left = '2550px'
    offset = 1700
    slider[1].style.transform = `translate(-${offset}px)`
    slider[0].style.transform = `translate(-${offset}px)`
    slider[2].style.transform = `translate(-${offset}px)`
    slider[1].firstElementChild.classList.toggle('left')
    slider[0].firstElementChild.classList.toggle('right')
    slider[1].firstElementChild.classList.toggle('right')
    slider[2].firstElementChild.classList.toggle('left')
}
const removestyle2 = () => {
    slider[0].style.transition = 'none'
    slider[1].style.transition = 'none'
    slider[2].style.transition = 'none'
    slider[0].style.left = '2550px'
    slider[1].style.left = ''
    slider[2].style.left = ''
    slider[0].style.transform = `translate(-850px)`
    slider[1].style.transform = `translate(-850px)`
    slider[2].style.transform = `translate(-850px)`
}
const removestyle = () => {
    slider[0].style.transition = 'none'
    slider[1].style.transition = 'none'
    slider[2].style.transition = 'none'
    slider[0].style.left = ''
    slider[1].style.left = ''
    slider[2].style.left = ''
    slider[0].style.transform = `translate(0)`
    slider[1].style.transform = `translate(0)`
    slider[2].style.transform = `translate(0)`
}

document.querySelector('.destination').addEventListener('click', (event) => {
//slider.forEach(el => el.addEventListener('click', (event) => {
//right = document.querySelector('.right')
event = event.target.parentElement
console.log(event.parentElement)
    if (event.parentElement.classList.contains('destination3')) 
    {   
        offset += 850
        slider[0].style.left = '2550px'
        slider[0].style.transform = `translate(-${offset}px)`
        slider[1].style.transform = `translate(-${offset}px)`
        slider[2].style.transform = `translate(-${offset}px)`
        slider[2].firstElementChild.classList.toggle('right')
        let slider2 = [slider[1], slider[2], slider[0]]
        slider = slider2
        slider[2].firstElementChild.classList.toggle('right')}
    
    // else if (event.target.classList.contains('left')) 
    //     {   
    //         offset -= 850
    //         slider[2].style.left = '-2550px'
    //         slider[2].style.transform = `translate(${-offset}px)`
    //         slider[1].style.transform = `translate(${-offset}px)`
    //         slider[0].style.transform = `translate(${-offset}px)`
    //         slider[0].firstElementChild.classList.toggle('left')
    //         let slider2 = [slider[2], slider[0], slider[1]]
    //         slider = slider2
    //         slider[0].firstElementChild.classList.toggle('left')
    //         console.log(slider)}
        //setTimeout(removestyle, 400)
    //     if (offset === 0) {
        
    //         slider[0].style.transition = 'all .5s'
    //         slider[1].style.transition = 'all .5s'
    //         slider[2].style.transition = 'all .5s'

    //         offset += 850
    //         slider[0].style.left = '2550px'
    //         slider[0].style.transform = `translate(-${offset}px)`
    //         slider[1].style.transform = `translate(-${offset}px)`
    //         slider[2].style.transform = `translate(-${offset}px)`
    //         slider[1].firstElementChild.classList.toggle('left')
    //         slider[0].firstElementChild.classList.toggle('right')
    //         slider[0].firstElementChild.classList.toggle('left')
    //         slider[2].firstElementChild.classList.toggle('right')
        
    //     } else if(offset === 850 || offset === -1700) {
    //         removestyle2();
    //         setTimeout(addstyle, 1);
    //         let slider2 = [slider[1], slider[0], slider[2]]
    //         slider=slider2
    //         console.log(slider)
    //         // slider[0].style.transition = 'all .5s'
    //         // slider[1].style.transition = 'all .5s'
    //         // slider[2].style.transition = 'all .5s'
    //         // offset += 850
    //         // slider[1].style.left = '2550px'
    //         // slider[1].style.transform = `translate(-${offset}px)`
    //         // slider[0].style.transform = `translate(-${offset}px)`
    //         // slider[2].style.transform = `translate(-${offset}px)`
    //         // slider[1].firstElementChild.classList.toggle('left')
    //         // slider[0].firstElementChild.classList.toggle('right')
    //         // slider[1].firstElementChild.classList.toggle('right')
    //         // slider[2].firstElementChild.classList.toggle('left')
    //     } else if (offset === 1700 || offset === -850) {
    //         offset += 850
    //         slider[2].style.left = '2550px'
    //         slider[2].style.transform = `translate(-${offset}px)`
    //         slider[0].style.transform = `translate(-${offset}px)`
    //         slider[1].style.transform = `translate(-${offset}px)`
    //         slider[1].firstElementChild.classList.toggle('right')
    //         slider[2].firstElementChild.classList.toggle('right')
    //         slider[0].firstElementChild.classList.toggle('left')
    //         slider[2].firstElementChild.classList.toggle('left')
    //         offset = 0
    //         setTimeout(removestyle, 400)
    // }
    // }
    // else if (event.target.classList.contains('left')) {
    //     if (offset === 0) {
        
    //         slider[0].style.transition = 'all .5s'
    //         slider[1].style.transition = 'all .5s'
    //         slider[2].style.transition = 'all .5s'
    
    //         offset -= 850
    //         slider[2].style.left = '-2550px'
    //         slider[2].style.transform = `translate(${-offset}px)`
    //         slider[0].style.transform = `translate(${-offset}px)`
    //         slider[1].style.transform = `translate(${-offset}px)`
    //         slider[0].firstElementChild.classList.toggle('left')
    //         slider[1].firstElementChild.classList.toggle('right')
    //         slider[2].firstElementChild.classList.toggle('left')
    //         slider[2].firstElementChild.classList.toggle('right')
            
    //     } else if(offset === -850 || offset === 1700) {
    //         offset -= 850
    //         slider[1].style.left = '-2550px'
    //         slider[1].style.transform = `translate(${-offset}px)`
    //         slider[0].style.transform = `translate(${-offset}px)`
    //         slider[2].style.transform = `translate(${-offset}px)`
    //         slider[1].firstElementChild.classList.toggle('left')
    //         slider[1].firstElementChild.classList.toggle('right')
    //         slider[0].firstElementChild.classList.toggle('right')
    //         slider[2].firstElementChild.classList.toggle('left')
    //     } else if (offset === -1700 || offset === 850) {
    //         offset -= 850
    //         slider[0].style.left = '-2550px'
    //         slider[0].style.transform = `translate(${-offset}px)`
    //         slider[1].style.transform = `translate(${-offset}px)`
    //         slider[2].style.transform = `translate(${-offset}px)`
    //         slider[0].firstElementChild.classList.toggle('right')
    //         slider[2].firstElementChild.classList.toggle('right')
    //         slider[0].firstElementChild.classList.toggle('left')
    //         slider[1].firstElementChild.classList.toggle('left')
    //         offset = 0
    //         setTimeout(removestyle, 400)
    //     }
   // }
})




