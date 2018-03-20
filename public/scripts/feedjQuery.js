$(document).ready(function(){

    $('select').material_select();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();

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
