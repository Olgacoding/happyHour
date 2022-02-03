
const swiperOffers = new Swiper('.offers__slider', {
    loop: true,
    speed: 1000,
    // If we need pagination
    pagination: {
        el: '.offers__pagination',
        clickable: true,
    },
});


const swiperMenu = new Swiper('.menu__slider', {
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    speed: 1000,
    pagination: {
        el: ".menu__pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            grid: {
                rows: 1,
            },
        },
        450: {
            slidesPerView: 1,
            grid: {
                rows: 2,
            },
        },
        1045: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
    },

});


let tabs = document.querySelector('.tabs__list');
let menuSlider = document.querySelectorAll('.menu__slider-block');

tabs.addEventListener('click', function (e) {
    if (e.target.classList.contains('tabs__item')) {
        this.querySelectorAll('.tabs__item').forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
    }

    menuSlider.forEach(slider => slider.classList.remove('show'));
    let tabIndex = e.target.dataset.tab;
    let thisSwiper = document.querySelector(tabIndex);
    thisSwiper.classList.add('show');

});

window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);

function overflowTabs() {
    let outerTabs = document.querySelector('.tabs__container');
    let innerTabs = document.querySelector('.tabs__list');
    if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
        innerTabs.classList.add('overflow');
    } else {
        innerTabs.classList.remove('overflow');
    }
}

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.top-menu__list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('top-menu__list--active');
})
