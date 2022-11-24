function sendEmail() {
    Email.send({
        SecureToken : "7942962c-8f0a-415a-8b2f-9779576a83e7",
        To : 'lav@lvbh.xyz',
        From : "contact@ntx.lu",
        Subject : "NTX contact form",
        Body : "Name: " + document.body.querySelector('#name') + "\nEmail: " + document.body.querySelector('#email') + 
        "\nPhone: " + document.body.querySelector('#phone') + "\nMessage:" + document.body.querySelector('#message') + "\n"
    }).then(function(message) {
        document.body.querySelector('#name').value = ""
        document.body.querySelector('#email').value = ""
        document.body.querySelector('#phone').value = ""
        document.body.querySelector('#message').value = ""

        console.log(message)
    });
}

window.addEventListener('DOMContentLoaded', event => {
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    
    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
