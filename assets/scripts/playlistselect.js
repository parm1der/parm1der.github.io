var iframe = document.getElementById('change-playlist');
var playcontent = document.getElementById('playcontainer');
var delayinms = 550; 

jQuery(document).ready(function($){
$('#playcontainer').hide().removeClass('hide');

$('.playlist1').on({
     'click': function(){
         $("#playcontainer").fadeOut(500);  
         setTimeout(function() {
         $('#playcontainer').fadeIn(600);
         $('#playcontainer').css("background-image", "url(/assets/images/athena.png)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/3RrpfmjhZbjWtBtQYqJUTn';
         $('#playlistname').text("future IMPERFECT / CYBERPUNK dystopia");
         $('#playlistdesc').text("Trenchcoats, heavy rain, cityscapes sprinkled with neon, glitches in cyberspace and a light dusting of 80's pop culture. These are all calling cards of the breakout sci-fi genre we call Cyberpunk and the theme of my favourite playlist. I didn't go the typical retrowave route with this one (though there are a few songs in there) but rather heavy, dark and moody electronic driven sounds. Ghost in the Shell meets Neuromancer. Look forward to playing this when exploring CD Projekt Red's blockbuster game, Cyberpunk 2077.");
         $('#playlistdesc2').text("Moody ◆ Electronic ◆ Ambient ◆ Drum n Bass ◆ Trap ◆ Soundtrack");
         }, delayinms);
     }
 });
 
$('.playlist2').on({
     'click': function(){
         $("#playcontainer").fadeOut(500);
         setTimeout(function() {
         $('#playcontainer').fadeIn(600);
         $('#playcontainer').css("background-image", "url(/assets/images/canal.jpg)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/0BVu2oWTxFZn5PQ45CyggY';
         $('#playlistname').text("Ronin");
         $('#playlistdesc').text("There's only one influence for this playlist - Nujabes' masterpiece soundtrack for the Anime Samurai Champloo. Filled with Jazzy & Lo-Fi hip hop tunes this playlist is perfect for times you need to focus and breathe. Laid-back and contemplative, this playlist should leave you feeling like a stoic ronin, mentally equipped to deal with any obstacle in your day. Rest in Peace Jun Seba.");
         $('#playlistdesc2').text("");
         }, delayinms);
     }
 });
 
$('.playlist3').on({
     'click': function(){         
         $("#playcontainer").fadeOut(500);
         setTimeout(function() {
         $('#playcontainer').fadeIn(600);
         $('#playcontainer').css("background-image", "url(/assets/images/canal.jpg)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/2oihvk73zA86hVMVCsaOfI';
         $('#playlistname').text("Shade");
         $('#playlistdesc').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed. Vulputate ut pharetra sit amet. Viverra nam libero justo laoreet sit amet cursus sit amet. Ut diam quam nulla porttitor massa id. Feugiat sed lectus vestibulum mattis. Rhoncus aenean vel elit scelerisque. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Eu feugiat pretium nibh SHADE ipsum consequat nisl vel. Nunc mi ipsum faucibus vitae. Vel orci porta non pulvinar. Tincidunt augue interdum velit euismod in pellentesque massa. Condimentum lacinia quis vel eros donec ac odio tempor orci. Vulputate mi sit amet mauris commodo. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Libero nunc consequat interdum varius sit amet. Ultrices sagittis orci a scelerisque. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.");
         $('#playlistdesc2').text("");
         }, delayinms);
     }
 });


$('.playlist4').on({
     'click': function(){
         setTimeout(function() {
         $('#playcontainer').fadeIn(600);
         $('#playcontainer').css("background-image", "url(/assets/images/720air.jpg)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/5VwsZirfundAy17W4HRUXE';
         $('#playlistname').text("Legendary");
         $('#playlistdesc').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus faucibus ornare suspendisse sed. Vulputate ut pharetra sit amet. Viverra nam libero justo laoreet sit amet cursus sit amet. Ut diam quam nulla porttitor massa id. Feugiat sed lectus vestibulum mattis. Rhoncus aenean vel elit scelerisque. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Eu feugiat pretium nibh LEGENDARY ipsum consequat nisl vel. Nunc mi ipsum faucibus vitae. Vel orci porta non pulvinar. Tincidunt augue interdum velit euismod in pellentesque massa. Condimentum lacinia quis vel eros donec ac odio tempor orci. Vulputate mi sit amet mauris commodo. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Libero nunc consequat interdum varius sit amet. Ultrices sagittis orci a scelerisque. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.");
         $('#playlistdesc2').text("");
         }, delayinms);
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


