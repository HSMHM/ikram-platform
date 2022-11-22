
var swiper = new Swiper(".client-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        speed: 1000,
        delay: 3000,
    },
    speed: 1000,
    breakpoints: {
        '480': {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '820': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '912': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});


var swiper = new Swiper(".projects-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        speed: 1000,
        delay: 3000,
    },
    speed: 1000,
    breakpoints: {
        '480': {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '820': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '912': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

var swiper = new Swiper(".blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        speed: 1000,
        delay: 3000,
    },
    speed: 1000,
    breakpoints: {
        '480': {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '820': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '912': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '1400': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper(".courses-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        speed: 1000,
        delay: 3000,
    },
    speed: 1000,
    breakpoints: {
        '480': {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '820': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '912': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '1400': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
$('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});