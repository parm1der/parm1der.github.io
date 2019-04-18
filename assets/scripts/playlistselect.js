jQuery(document).ready(function($){

$('.playlist1').on({
     'click': function(){
         $('#change-image').attr('src','/assets/images/720air.jpg');
     }
 });
 
$('.playlist2').on({
     'click': function(){
         $('#change-image').attr('src','/assets/images/athena.png');
     }
 });
 
$('.playlist3').on({
     'click': function(){
         $('#change-image').attr('src','/place3.jpg');
     }
 });
 
$('.playlist4').on({
     'click': function(){
         $('#change-image').attr('src','/place4.jpg');
     }
 });


$('.playlist5').on({
     'click': function(){
         $('#change-image').attr('src','/place5.jpg');
     }
 });


$('.playlist6').on({
     'click': function(){
         $('#change-image').attr('src','/place6.jpg');
     }
 });
});