"use strict";
$(document).ready( function(){
    $('.js-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        speed: 400,
        asNavFor: '.js-slider2'
    });
    $('.js-slider2').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        speed: 400,
        // autoplay: true,
        // autoplaySpeed: 300,
        prevArrow: '<span>туда</span>',
        nextArrow: '<span>сюда</span>',
        asNavFor: '.js-slider',
        focusOnSelect: true,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }]
    })
})
