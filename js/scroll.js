$(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var pixelsToMove = scrollTop / 12;
      $("#hero").css("background-position", "top " + (35 - pixelsToMove) + "% right 0");
    });
  });
  