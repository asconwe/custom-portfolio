function categoryHover() {
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

function sendRequest(self) { 
  const id = self.data('page');
  console.log(id);
  $('#' + id).submit();
}