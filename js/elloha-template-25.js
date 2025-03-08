(function ($) {
    // Mobile Nav
    var MobNav = $('.navbar-toggler');
    MobNav.on('click', function () {
        $('.menu-mobile').toggleClass('menu-mobile-active');
        $('.navbar-toggler .btn-menu').toggleClass('d-none');
    });

    // Sous-menu
    $('.clic-sub-menu').on('click', function () {
        if ($(this).children('.sub-menu').hasClass('sub-menu-active')) {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
        } else {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
            $(this).children('.sub-menu').addClass('sub-menu-active');
        }
    });

    // Sous-menu langues
    $('.languages').on('click', function () {
        if ($(this).children('.dropdown-menu').hasClass('dropdown-menu-active')) {
            $('.languages .dropdown-menu').removeClass('dropdown-menu-active');
        } else {
            $('.languages .dropdown-menu').removeClass('dropdown-menu-active');
            $(this).children('.dropdown-menu').addClass('dropdown-menu-active');
        }
    });

    // Voir plus SCEA
    $(".options-scea").hide();
    $(".options-scea").slice(0, 12).show();

    $("#seeMore").on('click', function (e) {
        e.preventDefault();

        $(".options-scea:hidden").slideDown();

        $("#seeMore").hide();
        $("#seeLess").show();
    });

    // Voir moins SCEA
    $("#seeLess").on('click', function (e) {
        e.preventDefault();

        $(".options-scea").not(":lt(12)").slideUp();

        $("#seeMore").show();
        $("#seeLess").hide();
    });

    // Clics sur les liens des prix chèques cadeaux
    $('.all-prices-vouchers a').on('click', function (event) {
        event.preventDefault();

        var targetId = $(this).attr('id');

        // Trouver l'élément correspondant dans le slider
        var targetElement = $(targetId);
        if (targetElement.length) {
            var index = $('.vouchers-slider').find('.owl-item').filter(function () {
                return $(this).find(targetId).length > 0;
            }).index();

            // Si un index valide est trouvé, déplacer le slider
            if (index !== -1) {
                $('.vouchers-slider').trigger('to.owl.carousel', [index, 600]);
            } else {
                console.error("Impossible de trouver l'index dans Owl Carousel pour :", targetId);
            }
        } else {
            console.error("Cible non trouvée pour :", targetId);
        }
    });

    // Détecter le changement dans Owl Carousel pour le .active
    $('.vouchers-slider').on('changed.owl.carousel', function (event) {
        var currentIndex = event.item.index;

        // Sélectionner l'élément actif dans le slider
        var activeSlide = $(event.target).find('.owl-item').eq(currentIndex).find('.giftcard-index');

        if (activeSlide.length) {
            var activeId = activeSlide.attr('id');
            console.log("Élément actif dans le slider :", activeId);
            
            $('.all-prices-vouchers a').removeClass('active');
            
            $('.all-prices-vouchers a[href="#' + activeId + '"]').addClass('active');
            
        }
    });
})(jQuery);

$(document).ready(function () {
    $('.home-slider_img').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
        }
    });
    $('.slider-meteo').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        items: 1,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.slider-options').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1400: {
                items: 4,
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.giftcard-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1400: {
                items: 2,
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.vouchers-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        margin: 20,
        items: 1,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.avis-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,

            },
            1400: {
                items: 3,
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
        }
    });
    $('.slider-page-news').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
        }
    });
    $(".owl-carousel-stacked").on(
        "dragged.owl.carousel translated.owl.carousel initialized.owl.carousel",
        function (e) {
            $(".center")
                .prev()
                .addClass("left-of-center");
            $(".center")
                .next()
                .addClass("right-of-center");
        }
    );

    $(".owl-carousel-stacked").on("drag.owl.carousel", function (e) {
        $(".left-of-center").removeClass("left-of-center");
        $(".right-of-center").removeClass("right-of-center");
    });

    $(".owl-carousel-stacked").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        center: true,
        mouseDrag: true,
        touchDrag: false,
        pullDrag: false,
        autoplay: true,
        navText: [
            '<span class="fa-stack fa-lg"><i class="fa fa-circle-thin fa-stack-2x" ></i><i class="fa fa-caret-left fa-stack-1x"></i></span>',
            '<span class="fa-stack fa-lg"><i class="fa fa-circle-thin fa-stack-2x" ></i><i class="fa fa-caret-right fa-stack-1x"></i></span>'
        ],
        responsive: {
                    0: {
                        items: 1,
                        touchDrag: true,
                        mouseDrag: true,
                        dots: true,
                        nav: false,
                    },
                    480: {
                        items: 3,
                        touchDrag: true,
                        mouseDrag: true,
                        dots: true,
                        nav: false,
                    },
                    768: {
                        items: 3,
                        touchDrag: true,
                        mouseDrag: true,
                        dots: true,
                        nav: false,

                    },
                    1400: {
                        items: 5,
                        touchDrag: false,
                        mouseDrag: true,
                        dots: true,
                        nav: false,
                    },
                }
    });


    $(".owl-carousel-stacked").on("translate.owl.carousel", function (e) {
        $(".left-of-center").removeClass("left-of-center");
        $(".right-of-center").removeClass("right-of-center");
    });
});