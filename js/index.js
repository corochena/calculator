$(document).ready(function() {
  $('button').on('click', function(e) {
    switch (e.target.textContent) {
      case "AC":
        $("#display").html('0');
        break;
      case "CE":
        $("#display").html($('#display').text().slice(0,-1));
        break;
      case "=":
        $("#display").html(eval($('#display').text()));
        break;
      default:
        $("#display").html($('#display').text() + e.target.textContent);
    }
  });
});