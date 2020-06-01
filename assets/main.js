$(document).ready(function(){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
            if (scroll >= 500) {
            $(".header").addClass("darkHeader");
        } else {
            $(".header").removeClass("darkHeader");
        }
    });

    $('.header__toggler').click(function(){
        $(this).toggleClass('open');
        $('.header').toggleClass('header--open');
    });
    $('.faq__question').click(function(){
        $(this).parent('.faq__item').toggleClass('active');
    });

    $('.recover').click(function(){
        $('#recover').toggle();
    });

    $('.testimonial__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots : false,
        infinite: false
    });
 
    $('.collection__carsouel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots : false,
        infinite: false
    });
 
});