const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      nav_links = document.querySelectorAll('.menu__link'),
      arrow = document.getElementsByClassName('pageup');

console.log(arrow);
      

 
function open_close_menu(hamburger, close, menu) {
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    })

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    })

    nav_links.forEach((element) => {
        element.addEventListener('click', () => {
            menu.classList.remove('active');
        })
    })
}

function topArrow(arrow){
    window.onscroll = function() {
        if (window.scrollY > 1300) {
            arrow[0].classList.add('pageup-trigger');
        } else {
            arrow[0].classList.remove('pageup-trigger');
        }
    }
}
    

window.onload = function() {
    const form = document.getElementById('contact_form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_w2i0wjs', 'template_s65z8tw', form)
            .then(function() {
                alert('Message has been sent!');
                form.reset();
            }, function(error) {
                alert("Oops, error has occured...please try a different way.");
                form.reset();
            });
    });
}


open_close_menu(hamburger, close, menu);
topArrow(arrow);
