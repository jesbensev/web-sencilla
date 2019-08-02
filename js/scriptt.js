$(document).ready(function(){

$(window).scroll(function(){
  scroll = $(window).scrollTop();

  if ($(window).width() > 480) {
    if (scroll > 100) {
      $(".menu").css({"background":"#fff"});
      $(".menu").css({"padding":"5px 0"});
      $(".menu").addClass("shadow");
      $("nav ul li a").css({"color":"#30374b"});
      $(".logo").css({"color":"#000"});
    } else {
      $(".menu").css({"background":"transparent"});
      $(".menu").css({"padding":"20px 0"});
      $(".menu").removeClass("shadow");
      $("nav ul li a").css({"color":"#fff"});
      $(".logo").css({"color":"#fff"});
    }
  }

  if ($(window).width() < 480) {
    if (scroll > 100) {
      $(".menu").css({"background":"#fff"});
      $(".menu").css({"padding":"5px 0"});
      $(".menu").addClass("shadow");
      $("nav ul li a").css({"color":"#30374b"});
      $(".logo").css({"color":"#000"});
    } else {
      $(".menu").css({"background":"transparent"});
      $(".menu").css({"padding":"20px 0"});
      $(".menu").removeClass("shadow");
      $("nav ul li a").css({"color":"#fff"});
      $(".logo").css({"color":"#fff"});
    }
  }



})



if ($(window).width() < 500) {
  $('.menu-icon').on('click', function() {
    $('nav').slideToggle();
  })
}





})
