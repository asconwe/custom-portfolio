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
      'AC -------'
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

  var symbol;
  $('.button').click(function () {
    const activeButton = $(this);
    symbol = '=';
    for (let i = 0; i < 3; i++) {
      //remove any underlines or equal signs indicating active button
      $('.button').eq(i).children().html('');
      $('.button').eq(i).css('border-bottom', 'none');
    }
    if ($(window).width() < 550) {
      // On small screens, move the buttons to the top by giving them css classes
      $('.welcome').attr('class', 'welcome through');
      $('.button').attr('class', 'button through');
      // Give the active button a border
      activeButton.css('border-bottom', 'solid 1px white');
    } else {
      activeButton.children().html(symbol);
    }
    // Animate the title section
    titleAnimation.animateTitle();
    // Animate the welcome page box
    $('.welcome').animate({
      'margin-left': 0
    }, 250, function () {
      sendRequest(activeButton);
    });
  });

  

});