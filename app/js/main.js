const galleryBtn = document.querySelector('.gallery__buttons');
const galleryBtns = document.querySelectorAll('.gallery__button');
const closeBtn = document.querySelector('.rightside-menu__close');
const burgerBtn = document.querySelector('.header__btn');
const rightSide = document.querySelector('.rightside-menu');

burgerBtn.addEventListener('click', ()=>{rightSide.classList.remove('rightside-menu--closed')});
burgerBtn.addEventListener('click', ()=>{console.log('hello')});
closeBtn.addEventListener('click',  ()=>{rightSide.classList.add('rightside-menu--closed')});


if (galleryBtn != null){
galleryBtn.addEventListener('click', (event)=>{
    if(event.target.classList.contains('gallery__button')){
        for (let i = 0; i < galleryBtns.length; i++) {
                galleryBtns[i].classList.remove('gallery__button--active');
        }
        event.target.classList.add('gallery__button--active');
    }
})
}

$(function(){

    $('.header__btn-mobile').on('click', function () {
        $('.menu').toggleClass('menu--open');  
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    });
    $('.contact__slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1800,
              settings: {
                slidesToShow: 9,
                slidesToScroll: 9,
              }
            },
            {
              breakpoint: 1600,
              settings: {
              slidesToShow: 8,
              slidesToScroll: 8,
              }
            },
            {
            breakpoint: 1450,
            settings: {
            slidesToShow: 7,
            slidesToScroll: 7,
            }
            },
            {
                breakpoint: 1250,
                settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                }
              },
              {
                breakpoint: 1050,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                }
              },
              {
                breakpoint: 900,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                }
              },
              {
                breakpoint: 750,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                }
              },
              {
                breakpoint: 550,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
                }
              },
              {
                breakpoint: 375,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
                }
              },

        ]
    });
    $('.blog-item__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick__blog slick__blog-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick__blog slick__blog-next">Next</button>'
    });
    $('.blog-post-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick__blog slick-prev__blog-post"><img class="slick-prev__blog-post-image" src="../images/left-arrow-blog-slider.svg" alt="prev"></button> ',
        nextArrow: '<button type="button" class="slick__blog slick-next__blog-post"><img class="slick-prev__blog-post-image" src="../images/right-arrow-blog-slider.svg" alt="right"></button>'
    });
    if($(window).width() < 540){
        $('.works-path__item03').appendTo($('.works-path__items-box'))
    }
})
var mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.living'
    }
});
