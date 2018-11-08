$(document).on('turbolinks:load', function() {

// 1. Foundation
// --------------------

$(document).foundation();

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});

// if call was fired by turbolinks
if (event.originalEvent.data.timing.visitStart) { 
  $('.page-content')
    .addClass('animated fadeIn')
    .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
      $('.page-content').removeClass('animated');
    });
}else{
  $('.page-content').removeClass('hide')
} 

});