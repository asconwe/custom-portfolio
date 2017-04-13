$( document ).ready(function () {
  
  $('.button').click(function () {
    console.log('clicked');
    $('.welcome').animate({
      'margin-left': 0
    }, 200)
  });
  
  
});