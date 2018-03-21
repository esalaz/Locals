$(document).ready(function(){


    $('select').material_select();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();

    // this is for the header to scroll and stop and the nav
    $.fn.followTo = function (pos) {
    var $this = this;
    var $window = $(window);

    $window.scroll(function (e) {
      if ($window.scrollTop() > pos) {
        $this.css({
          position: 'absolute',
          top: pos
          });
        } else {
            $this.css({
              position: 'fixed',
              top: 0
            });
          }
        });
      };
      $('header.h1').followTo(250);

      var erric={
        content:$('.erric:first'),
        position:$('.erric:first').offset().top
      };

      console.log(erric);
      $(document).scroll(function() {
        x=1.5;
  var y = $(this).scrollTop();
    if(y >=erric.position /x){

      $('.erric').addClass('halim');
    }

  });

      $('#aboutBtn').on('click', function(e){
        $('html,body').animate({
    scrollTop: $("#About").offset().top }, 1000)
      });

});
