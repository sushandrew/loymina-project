// Инициализация aos
AOS.init({
    once: true,
    duration: 1000,
    anchorPlacement: 'center-center',
});


// swiper в блоке hero
const heroSwiper = new Swiper('.hero__swiper', {
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    effect: 'fade',

    pagination: {
        el: '.hero__swiper-pagination',
    },
})


// swiper в блоке wallpaper
const wallpaperSwiper = new Swiper('.wallpaper__swiper', {
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.wallpaper__swiper-pagination',
    },
})


// swiper в блоке paint
const paintSwiper = new Swiper('.paint__swiper', {
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.paint__swiper-pagination',
    },
})


// кнопка hamburger
const html = document.querySelector('html');
const hamburgerBtn = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.nav__menu-mobile');
hamburgerBtn.addEventListener('click', function() {
    html.classList.toggle('html-fixed')
    hamburgerBtn.classList.toggle('hamburger--active');
    menuMobile.classList.toggle('nav__menu-mobile--active');
})


// ссылки в меню в мобильном разрешениее
const mobileWidthMediaQuery = window.matchMedia('(max-width: 840px)');
if (mobileWidthMediaQuery.matches) {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            html.classList.remove('html-fixed');
            hamburgerBtn.classList.remove('hamburger--active');
            menuMobile.classList.remove('nav__menu-mobile--active');
        })
    })
}


// модальные окна
// поиск всех модальных окон
const modals = document.querySelectorAll('[data-modal]');

// поиск всех кнопок, ссылающихся на модальные окна
const modalsBtn = document.querySelectorAll('[data-modal-btn');

// настрйка кнопок, открывающих модальные окна
modalsBtn.forEach(function(modalBtn) {
    modals.forEach(function(modal) {
        if (modalBtn.dataset.modalBtn === modal.dataset.modal) {
            modalBtn.addEventListener('click', function() {
                html.classList.add('html-fixed');
                modal.classList.add('modal--active');
            })
        }
    })
})

// настройка конопок, закрывающих модальные окна (modal-close)
modals.forEach(function(modal) {
    const modalClose = modal.querySelector('[data-modal-close]');
    modalClose.addEventListener('click', function() {
        html.classList.remove('html-fixed');
        modal.classList.remove('modal--active');
    })
})
