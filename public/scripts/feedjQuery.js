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
        content:$('#erric'),
        position:$('#erric').offset().top
      };
      var hunter={
        content:$('#hunter'),
        position:$('#hunter').offset().top
      };
      var terrel={
        content:$('#terrel'),
        position:$('#terrel').offset().top
      };
      var okay={
        content:$('#okay'),
        position:$('#okay').offset().top
      };
      console.log(erric);
      $(document).scroll(function() {
        x=1.7;
  var y = $(this).scrollTop();
    if(y >=erric.position /x){

      erric.content.addClass('halim');
    }
    if(y >=hunter.position /x){
      hunter.content.addClass('halim');
    }
    if(y >=terrel.position /x){
      terrel.content.addClass('halim');
    }
    if(y >=okay.position /x){
      okay.content.addClass('halim');
    }
  });
});
