$( document ).ready(function () {
  var symbol;
  var atWelcome = true;
  
  function addSectionToDom (sectionName) {
    var contentDiv = $('<div>');
    contentDiv.attr('id', sectionName + '-container');
    contentDiv.attr('class', 'content-div');
  }
  
  function display(sectionName, sectionType) {
    
  }
  
  function animateOpen (sectionName) {
    
  }
  
  $('.button').click(function () {
    var dashes;
    var dashArr = [];
    var activeButton = $(this);
    var sectionName = activeButton.attr('id');
    symbol = ':';
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
        addSectionToDom(sectionName);
        display(sectionName, 'drawer');
        animateOpen(sectionName);
        display(sectionName, 'content');
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
    }
  });
  $('.button>h3').hover(function () {
    if ($(window).width() < 550) { 

    } else {
      symbol = $(this).children().html();
      if (symbol !== ':') { 
        $(this).children().html('-');
      }
    }
  }, function () {
    if ($(window).width() < 550) { 
      
    } else {
      if (symbol !== ':') {  
        $(this).children().html(symbol);
      }
    }
  });
  
  
});