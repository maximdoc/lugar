$(function () {

    $('.project__slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        variableWidth: true,

        prevArrow: '<button class="slider-btn slider-btn_left"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M21.6667 9.66671H5.44001L12.8933 2.21337L11 0.333374L0.333344 11L11 21.6667L12.88 19.7867L5.44001 12.3334H21.6667V9.66671Z" fill="#AFD4E2"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="slider-btn slider-btn_right"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M11 0.333374L9.11998 2.21337L16.56 9.66671H0.333313V12.3334H16.56L9.11998 19.7867L11 21.6667L21.6666 11L11 0.333374Z" fill="#AFD4E2"/>\n' +
            '</svg>\n</button>',
    });

    $('.comment__slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,

        prevArrow: '<button class="comment-btn comment-btn_left"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M21.6667 9.66671H5.44001L12.8933 2.21337L11 0.333374L0.333344 11L11 21.6667L12.88 19.7867L5.44001 12.3334H21.6667V9.66671Z" fill="#AFD4E2"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="comment-btn comment-btn_right"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M11 0.333374L9.11998 2.21337L16.56 9.66671H0.333313V12.3334H16.56L9.11998 19.7867L11 21.6667L21.6666 11L11 0.333374Z" fill="#AFD4E2"/>\n' +
            '</svg>\n</button>',
    });



    $('.menu_btn').on('click', function (){
        $('.menu_btn').toggleClass('menu_btn--active');
        $('.header_menu-item').toggleClass('header_menu-item--active');
    });

    $('.header_menu-link').on('click', function (){
        $('.menu_btn').removeClass('menu_btn--active');
        $('.header_menu-item').removeClass('menu_list--active');
    });

});