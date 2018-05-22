$(document).foundation();

// 1. Animate on Scroll
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


$('[data-curtain-menu-button]').click(function(){
  $('body').toggleClass('curtain-menu-open');
})