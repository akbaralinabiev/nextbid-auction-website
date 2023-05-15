// $(document).ready(function() {
//   // Check the screen width on page load
//   if ($(window).width() > 650) {
//     // Add scroll event listener
//     $(window).scroll(function() {
//       var scrollTop = $(this).scrollTop();
//       var pixelsToMove = scrollTop / 15;
//       $("#hero, .intro").css("background-position", "top " + (35 - pixelsToMove) + "% right 0");
//     });
//   }
  
//   // Check the screen width on window resize
//   $(window).resize(function() {
//     if ($(window).width() > 650) {
//       // Add scroll event listener
//       $(window).scroll(function() {
//         var scrollTop = $(this).scrollTop();
//         var pixelsToMove = scrollTop / 15;
//         $("#hero, .intro").css("background-position", "top " + (35 - pixelsToMove) + "% right 0");
//       });
//     } else {
//       // Remove scroll event listener
//       $(window).off("scroll");
//     }
//   });
// });
