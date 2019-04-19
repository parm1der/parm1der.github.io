var iframe = document.getElementById('change-playlist');
var playcontent = document.getElementById('playcontainer');

jQuery(document).ready(function($){
$('#playcontainer').hide().removeClass('hide');

$('.playlist1').on({
     'click': function(){
         playcontent.style.display = 'block';
         $('#playcontainer').css("background-image", "url(/assets/images/720air.jpg)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/3RrpfmjhZbjWtBtQYqJUTn';
     }
 });
 
$('.playlist2').on({
     'click': function(){
         playcontent.style.display = 'block';
         $('#playcontainer').css("background-image", "url(/assets/images/athena.png)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/0BVu2oWTxFZn5PQ45CyggY';
     }
 });
 
$('.playlist3').on({
     'click': function(){
         playcontent.style.display = 'block';
         $('#playcontainer').css("background-image", "url(/assets/images/PLACEHOLDER)");
         iframe.src='PLACEHOLDER';
     }
 });
 
$('.playlist4').on({
     'click': function(){
         playcontent.style.display = 'block';
         $('#playcontainer').css("background-image", "url(/assets/images/PLACEHOLDER)");
         iframe.src='PLACEHOLDER';
     }
 });


$('.playlist5').on({
     'click': function(){
         playcontent.style.display = 'block';
         $('#playcontainer').css("background-image", "url(/assets/images/PLACEHOLDER)");
         iframe.src='PLACEHOLDER';
     }
 });


$('.playlist6').on({
     'click': function(){
         playcontent.style.display = 'block';
         $('#playcontainer').css("background-image", "url(/assets/images/PLACEHOLDER)");
         iframe.src='PLACEHOLDER';
     }
 });
});


