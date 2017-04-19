$( document ).ready(function () {
  var symbol;
  var atWelcome = true;
  
  function addSectionToDomAndAnimate (sectionName) {
    var contentDiv = $('<div>');
    contentDiv.attr('id', 'drawer-' + sectionName);
    contentDiv.attr('class', 'content-div invisible');
    $('.responsive-box').append(contentDiv);
    makeVisible(sectionName);
    animateOpen();
  }
  
  function makeVisible(sectionName) {
    $('#drawer-' + sectionName).attr('class', 'content-div border visible');
  }
  
  function animateOpen () {
    $('.content-div').animate({'right': '0px'}, 200);
  }
  
  function animateCloseAndRemove(callback, param) {
    var height = $('.content-div').css('height');
    $('.content-div').css('height', height);
    $('.content-div').animate({'top': '200%'}, 200, 'swing', function () {
      removeFromDom();
      setTimeout(function () {
        callback(param)
      }, 200);
    });
  }
  
  function removeFromDom () {
    $('.content-div').remove();
  }
  
  $('.button').click(function () {
    var dashes;
    var dashArr = [];
    var activeButton = $(this);
    var sectionName = activeButton.attr('id');
    symbol = '=';
    for (var i = 0; i < 3; i++) {
      $('.button').eq(i).children().children().html('');
      $('.button').eq(i).css('border-bottom', 'none');
    }
    if ($(window).width() < 550) {
      $('.welcome').attr('class', 'welcome through');
      $('.button').attr('class', 'button through');
      $(this).css('border-bottom', 'solid 1px white');
    } else {
      $(this).children().children().html(symbol);
    }
    if (atWelcome) {  
      // Animate the welcome page box
      $('.welcome').animate({
        'margin-left': 0
      }, 200, function () {
        addSectionToDomAndAnimate(sectionName);
        makeVisible(sectionName, 'drawer');
        animateOpen(sectionName);
      });
      // Animate the title section
      var animateDashesInterval = setInterval(function(){
        dashes = $('#dashes').html();
        dashArr = dashes.split('');
        if (dashArr.length > 5) {
          dashArr.shift();
          dashes = dashArr.join('');
          $('#dashes').html(dashes);
        } else {
          clearInterval(animateDashesInterval);
        }
      }, 20);
      atWelcome = false;
    } else {
      animateCloseAndRemove(addSectionToDomAndAnimate, sectionName);
    }
  });
  $('.button>h3').hover(function () {
    if ($(window).width() < 550) { 

    } else {
      symbol = $(this).children().html();
      if (symbol !== '=') { 
        $(this).children().html('&ndash;');
      }
    }
  }, function () {
    if ($(window).width() < 550) { 
      
    } else {
      if (symbol !== '=') {  
        $(this).children().html(symbol);
      }
    }
  });
  
  
});