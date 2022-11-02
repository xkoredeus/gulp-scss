$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$(() => {
    const indSlider = new Swiper(".js-ind-slider", {
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        mousewheel: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 35,
                scrollbar: {
                    snapOnRelease: true,
                    draggable: true,
                },
            },
        }
    });
});