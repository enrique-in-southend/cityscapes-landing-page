// When the menu button is click then open the nav menu
$('#menu-button').click(function() {
     $(this).toggleClass('change');
     $('.nav-links').toggleClass('nav-open');
});

/* If the window is resized and the class change has already been
applied, then toggle it to avoid an issue with the menu button disappearing */
$(window).resize(function() {
     if ($(window).width() > 768) {
          console.log($(window).width());
          if ($('.nav-links').hasClass('nav-open')) {
               $('#menu-button').toggleClass('change');
               $('.nav-links').toggleClass('nav-open');
          }
     }
});
