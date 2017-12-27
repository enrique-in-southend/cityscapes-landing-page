// Function for fading in and out the nav bar
$(function() {
     $(window).scroll(function() {
          var $this = $(window);

          if($this.scrollTop() > 100) {
               $('#main-nav').addClass('fixed-nav');
          } else {
               $('#main-nav').removeClass('fixed-nav');
          }
     });
});
