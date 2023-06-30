// Hidden menu

const body = document.querySelector('body')
const hidden = document.querySelector('.hidden')
const burgerMenu = document.querySelector('.header_top_mobile_burger')
const burgerClose = document.querySelector('#burger_close')

burgerMenu.addEventListener('click', function() {
    hidden.classList.add('show')
    body.classList.add('noscroll')
})

burgerClose.addEventListener('click', function() {
    hidden.classList.remove('show')
    body.classList.remove('noscroll')
})


// Initialize Swiper 
var swiper = new Swiper(".heroSwiper", {
    initialSlide: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 5,
    },
});

// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
    initialSlide: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 10,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1999) + "</span>";
        },
    },
});