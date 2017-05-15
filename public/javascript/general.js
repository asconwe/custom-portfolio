function categoryHover() {
  var symbol;
    // Indicate hovered button with equals sign
  $('.button').hover(function () { // on hover-in
    if ($(window).width() < 550) {
      // Do something here on small screens
    } else {
      symbol = $(this).children().html();
      if (symbol !== '=') {
        $(this).children().html('&ndash;');
      }
    }
  }, function () {
    if ($(window).width() < 550) { // on hover-out
      // Do something here on small screens
    } else {
      if (symbol !== '=') {
        $(this).children().html(symbol);
      }
    }
  });
}

function symbolOnClick(callback) {
  
  var symbol;
  $('.button').on('click', function () {
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
    callback(activeButton.data('page'));
  });
}

function sendRequest(id) { 
  console.log(id);
  $('#' + id).submit();
}