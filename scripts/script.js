$(document).ready(function () {
    
    setTimeout(function () {
        $('.list').fadeIn(1000).removeClass('hidden');
    }, 300)
    setTimeout(function () {
        $('.intro').fadeIn(1000).removeClass('hidden');
    }, 600)
    setTimeout(function () {
        $('.trippleGridContainer').fadeIn(1000).removeClass('hidden');
    }, 600)
    setTimeout(function () {
        $('.one').fadeIn(1000).removeClass('hidden');
    }, 900)
    setTimeout(function () {
        $('.two').fadeIn(1000).removeClass('hidden');
    }, 900)
    setTimeout(function () {
        $('.containerContent').fadeIn(1000).removeClass('hidden');
    }, 900)
    setTimeout(function () {
        $('.three').fadeIn(1000).removeClass('hidden');
    }, 900)
    setTimeout(function () {
        $('.four').fadeIn(1000).removeClass('hidden');
    }, 900)
    setTimeout(function () {
        $('.faqs').fadeIn(1000).removeClass('hidden');
    }, 900)
    setTimeout(function () {
        $('.last').fadeIn(1000).removeClass('hidden');
    }, 900)
    setTimeout(function () {
        $('#copyright').fadeIn(1000).removeClass('hidden');
    }, 900)

    $(".accordion_head").click(function() {
        if ($('.accordion_body').is(':visible')) {
          $(".accordion_body").slideUp(300);
          $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
          $(this).next(".accordion_body").slideUp(300);
          $(this).children(".plusminus").text('+');
        } else {
          $(this).next(".accordion_body").slideDown(300);
          $(this).children(".plusminus").text('-');
        }
    });
    
  $('.customer-logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });


    
});