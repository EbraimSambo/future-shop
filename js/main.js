    $(document).ready(function(){


$('.fa-bars').click(function(){
  $(this).toggleClass('fa-times');
  $('.navbar').toggleClass('nav-toggle');
});

$(window).on('load scroll',function(){
  $('.fa-bars').removeClass('fa-times');
  $('.navbar').removeClass('nav-toggle');
  

  if($(window).scrollTop() > 30){

    $('.header').css({'background':'#7c3c79','box-shadow':'cc'});
  }else{
    $('.header').css({'background':'none','box-shadow':'none'});
  }
});


});

