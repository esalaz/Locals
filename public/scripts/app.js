console.log('yoooo')

//jQuery is required to run this code
app.use(express.static(path.join(__dirname, 'client')));
$( document ).ready(function() {
    $('select').material_select();
});


function openMe(inside) {
  var i, content;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  document.getElementById(inside).style.display = "block";
}
