const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');
      

 
function open_close_menu(hamburger, close, menu) {
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    })

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    })
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
