import Typed from "../vendor/typed/typed.js"

// window scroll
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100) {
        $('body').addClass('fixed-header');
    }
    else 
    {
        $('body').removeClass('fixed-header');
    }
})

// Document Ready
$(document).ready(function() {
    //Typing animation
    new Typed('#type-it', {
        strings: ['Developer', 'Designer', 'Programmer'],
        typeSpeed: 100,
        loop: true
      });
})