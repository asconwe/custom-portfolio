$(document).ready(function () { 
  
  function addSymbolToActiveSection() {
    const id = $('.inner-content-div').data('page');
    console.log(id)
    $('#' + id + '>h3>.hover-dash').html('=')
  }

  function openContentDiv() { 
    function getWidth(width) {
      if (window.innerWidth < 550) {
        return width
      }
      return width - 200;
    }
    
    let boxWidth = $('.responsive-box').css('width');
    boxWidth = parseInt(boxWidth.slice(0, 3));
    const contentWidth = getWidth(boxWidth);
    console.log(contentWidth);
    $('.content-div').attr('class', 'content-div border visible')
    $('.content-div').animate({ width: contentWidth }, function () {
        console.log('finished animating');
    });
  }

  function closeContentDiv(callback) {
    $('.content-div').animate({ width: 0 }, function () {
      console.log('finished animating');
      callback(callback);   
      $('.content-div').attr('class', 'content-div border invisible')
    });
  }

  addSymbolToActiveSection();
  
  openContentDiv();

  categoryHover();

  symbolOnClick(function (activeButtonId) {
    closeContentDiv(function () {
      sendRequest(activeButtonId)
    })
  });
}) 