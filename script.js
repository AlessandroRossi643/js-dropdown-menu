$('.menu_item').mouseenter(function(){
  $(this).children('.dropdown_menu').addClass('aperto');
});

$('.menu_item').mouseleave(function(){
  $(this).children('.dropdown_menu').removeClass('aperto');
});
