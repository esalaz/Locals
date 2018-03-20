$(document).ready(function(){

    $('select').material_select();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();

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
});
