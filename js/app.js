 /* Slider */

$(function ()  {
  $("[data-slider]").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    appendArrows: '.reviews__arrows',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
        slidesToShow: 2,
        centerMode: false,
        }
      },
      {
        breakpoint: 530,
        settings: {
        slidesToShow: 1,
        centerMode: false,
        }
      }
    ]
  });
});

$(window).on('load resize', function() {
  if ($(window).width() < 770) {
    $('.project__logo:not(.slick-initialized)').slick({
     centerMode: true,
      dots: false,
      arrows:true,
      appendArrows: '.project__arrows', 
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      variableWidth: true ,
        
    });
  } else {
    $(".project__logo.slick-initialized").slick("unslick");
  }
});

/* Scroll */
function colorHeader() {
  if ($(window).scrollTop() == 0) {
    $('.header').css('boxShadow', 'none');
  } else { 
    $('.header').css('boxShadow', '0 2px 4px rgb(0 0 0 / 50%)');
  }
}

colorHeader();
$(window).scroll(function() {
  colorHeader();
})


/* Burger Menu */

$(document).ready(function() {
    $('.header__burger').click(function() {
    $('.header__burger').toggleClass('open-menu');
    $('.header__menu-mb').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
    });

    $('.menu__item-icon').click(function() {
    $('.header__submenu').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
    });

    /* Search */
$(".header").on("click", ".search-toggle", function (e) {
  var selector = $(this).data("selector");

  $('.search-box').toggleClass("show").find(".search-input").focus();
  $(this).toggleClass("active");

 // e.preventDefault();
});

});

 $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest("nav").length == 0 && !$target.hasClass('header__burger')) {
            $('.header__burger').removeClass('open-menu');
            $('.header__menu-mb').removeClass('open-menu');
            
        }
         if (!$target.hasClass('menu__item-icon') && $target.closest(".menu__item-icon").length == 0) {
            $('.header__submenu').removeClass('open-menu');
            
        }
        if (!$target.hasClass('search-toggle') && !$target.hasClass('search-input')){
            $('.search-box').removeClass('show');
        }
    });
    



