$(document).ready(function () {

  const titleAnimation = {
    frames: [
      'August Conwel -',
      'August Conwe --',
      'August Conw --',
      'August Con ---',
      'August Co ---',
      'August C ----',
      'Augus C ----',
      'Augu C -----',
      'Aug C -----',
      'Au C ------',
      'A C ------',
      'A C ------',
      'A C ------'
    ], animateTitle: function animateTitle() {
      const animationSpeed = 20;
      let index = 0;
      var animateTitleInterval = setInterval(function () {
        console.log('interal', index);
        $('.title').html(titleAnimation.frames[index]);
        index++;
      }, animationSpeed)
      setTimeout(function () {
        console.log('set Timout');
        clearInterval(animateTitleInterval);
      }, animationSpeed * titleAnimation.frames.length);
    }
  }

  categoryHover();
  
  symbolOnClick(function(activeButtonId){
    // Animate the title section
    titleAnimation.animateTitle();
    // Animate the welcome page box
    $('.welcome').animate({
      'margin-left': 0
    }, 300, function(){
      sendRequest(activeButtonId); 
    }); 
  });

});