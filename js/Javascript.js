// Nav bar 
$('.handle').on('click', function(){
$('nav ul').toggleClass('showing');
});

$('.clicklogos').on('click', function(){
$('h1').toggleClass('showtext');
});

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}