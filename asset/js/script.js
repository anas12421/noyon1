$(window).scroll(function(){
  if($(window).scrollTop() > 50){
    $(".menu").addClass("kata")
  }else{
    $(".menu").removeClass("kata")
  }
  
})

$(function () {
  'use strict';


  var navoff = $('.main_manu').offset().top;

  $(window).scroll(function () {

    var scrolling = $(this).scrollTop();

    if (scrolling > navoff) {
      $('.main_manu').addClass('manu_fixed')
    } else {
      $('.main_manu').removeClass('manu_fixed')
    }

  });


  var navoff = $('.img_manu').offset().top;

  $(window).scroll(function () {

    var scrolling = $(this).scrollTop();

    if (scrolling > navoff) {
      $('.img_manu').addClass('img_fix')
    } else {
      $('.img_manu').removeClass('img_fix')
    }

  });


});