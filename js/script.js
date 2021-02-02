$(function () {

  // TOPへの画像切替
  $('.top-btn').each(function () {

    let img_off = $(this).attr('src');
    let img_on = $(this).attr('src').replace('img/top-btn', 'img/top-btn-hover');

    $(this).hover(
      function () {
        $(this).attr('src', img_on);
      },
      function () {
        $(this).attr('src', img_off);
      }
    );
  });


  // ヘッダーの色変更
  $(window).scroll(function () {
    var $profile = $('.profile').offset().top;
    var $scroll = $(this).scrollTop();
    if ($scroll >= $profile) {
      $('header').css('background-color', '#CCCCFF');
    } else { $('header').css('background-color', 'white'); }
    if ($scroll >= 60) {
      $('.top-btn').css('display', 'block');
    } else {
      $('.top-btn').css('display', 'none');
    }
  });


  // 続きを見るの関数
  function viewMoreReset(){
    if($('.hamburger-btn').hasClass('active')) {
      $('.grad-btn').css('z-index', '0');
    } else{$('.grad-btn').css('z-index', '2');}
  };

  // ハンバーガーメニュー
  $('.hamburger-btn').click(function() {
    $(this).toggleClass('active');
    $('.site-menu').toggleClass('is-active');
    viewMoreReset();
  });

  $('.nav-item').click(function() {
    $('.site-menu').removeClass('is-active');
    $('.hamburger-btn').removeClass('active');
    viewMoreReset();
  });


  // タイプアニメーション
  $('.site-concept-en').typed({
    strings: ["With you, For you."],
    typeSpeed: 50,
    startDelay: 2000,
    loop: false,
    showCursor: false
  });


  // スライダーのスマホのみ指定
  function sliderSetting(){
    var width = $(window).width();
    if(width <= 1023){
        $('.slider').not('.slick-initialized').slick({
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipe: true,
          touchMove: true,
        });
    } else {
        $('.slider.slick-initialized').slick('unslick');
    }
  }
  sliderSetting();
  $(window).resize(function(){
      sliderSetting();
  });


});