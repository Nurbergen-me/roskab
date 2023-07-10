// Hidden menu

const body = document.querySelector('body')
const hidden = document.querySelector('.hidden')
const burgerMenu = document.querySelector('.header_top_mobile_burger')
const burgerClose = document.querySelector('#burger_close')

if (burgerMenu) {
    burgerMenu.addEventListener('click', function() {
        hidden.classList.add('show')
        body.classList.add('noscroll')
    })
    
    burgerClose.addEventListener('click', function() {
        hidden.classList.remove('show')
        body.classList.remove('noscroll')
    })
}

// Initialize Swiper 
const mySwiper = document.querySelector('.mySwiper')
if (mySwiper) {
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
            dynamicMainBullets: 5,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1999) + "</span>";
            },
        },
        breakpoints: {
            320: {
                pagination: {
                    dynamicMainBullets: 1,
                }
            },
            576: {
                pagination: {
                    dynamicMainBullets: 2,
                }
            },
            1440: {
                pagination: {
                    dynamicMainBullets: 10,
                }
            },
        }
    });
    
}

// Initialize Swiper 
const heroSwiper = document.querySelector('.heroSwiper')
if (heroSwiper) {
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
}


// Initialize Swiper About
const aboutSwiper = document.querySelector('.aboutSwiper')
if (aboutSwiper) {
    var swiper = new Swiper(".aboutSwiper", {
        slidesPerView: 2,
        spaceBetween: 18,
        initialSlide: 1,
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
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });
}


// Initialize Swiper Partners
const partnersSwiper = document.querySelector('.partnersSwiper')
if (partnersSwiper) {
    var swiper = new Swiper(".partnersSwiper", {
        slidesPerView: 6,
        spaceBetween: 18,
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
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 6,
            }
        }
    });
}


// Initialize Swiper Reviews
const reviewSwiper1 = document.querySelector('.reviewSwiper1')
if (reviewSwiper1) {
    var swiper = new Swiper(".reviewSwiper1", {
        slidesPerView: 6,
        spaceBetween: 18,
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
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 6,
            }
        }
    });
}
const reviewSwiper2 = document.querySelector('.reviewSwiper2')
if (reviewSwiper2) {
    var swiper = new Swiper(".reviewSwiper2", {
        slidesPerView: 6,
        spaceBetween: 18,
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
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 6,
            }
        }
    });
}


// Vacancies

const vacanciesList = document.querySelectorAll('.vacancies_item_top')

if (vacanciesList) {
    vacanciesList.forEach(item => {
        item.addEventListener('click', (e) => {
            vacanciesList.forEach(elem => {
                elem.parentNode.classList.remove('active')
            })
            item.parentNode.classList.add('active')
        })
    })
}


// Sidebar

const sidebarMenu = document.querySelectorAll('.sidebar_item_top')

if (sidebarMenu) {
    sidebarMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            sidebarMenu.forEach(elem => {
                elem.parentNode.classList.remove('active')
            })
            item.parentNode.classList.add('active')
        })
    })
}

const sidebarSubMenu = document.querySelectorAll('.sidebar_item_item_top')

if (sidebarSubMenu) {
    sidebarSubMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            sidebarSubMenu.forEach(elem => {
                elem.parentNode.classList.remove('active')
            })
            item.parentNode.classList.add('active')
        })
    })
}