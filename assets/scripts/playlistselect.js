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
         $('#playcontainer').css("background-image", "url(/assets/images/trees.jpg)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/0BVu2oWTxFZn5PQ45CyggY';
         $('#playlistname').text("Ronin");
         $('#playlistdesc').text("There's only one influence for this playlist - Nujabes' masterpiece soundtrack for the Anime Samurai Champloo. Filled with Jazzy & Lo-Fi hip hop tunes this playlist is perfect for times you need to focus and breathe. Laid-back and contemplative, this playlist should leave you feeling like a stoic ronin, mentally equipped to deal with any obstacle in your day. Rest in Peace Jun Seba.");
         $('#playlistdesc2').text("Relaxed ◆ Meditative ◆ Jazzy ◆ Hip Hop ◆ Chillhop ◆ Lofi ◆ Nujabes ◆ J Dilla");
         }, delayinms);
     }
 });
 
$('.playlist3').on({
     'click': function(){         
         $("#playcontainer").fadeOut(500);
         setTimeout(function() {
         $('#playcontainer').fadeIn(600);
         $('#playcontainer').css("background-image", "url(/assets/images/train.png)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/1L34aYB5zty8ScDfiKX8XB';
         $('#playlistname').text("The Golden Era");
         $('#playlistdesc').text("This one doesn't really need a description, it's a playlist dedicated to my first love; hip hop. Although it's still something that's contested, the golden era of hip hop to me was the 90s. You had hardcore east coast MC's, the southern kings with their own flavour, and the west coast gangster rappers all putting out genre defining albums. By no means comprehensive, this playlist should have your head nodding while giving you a history lesson into one of the most important musical genres of our time. Also: Jay Z we need your music on Spotify.");
         $('#playlistdesc2').text("90's Hip Hop");
         }, delayinms);
     }
 });


$('.playlist4').on({
     'click': function(){
         setTimeout(function() {
         $('#playcontainer').fadeIn(600);
         $('#playcontainer').css("background-image", "url(/assets/images/Imagine.png)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/5VwsZirfundAy17W4HRUXE';
         $('#playlistname').text("Legendary");
         $('#playlistdesc').text("A short playlist that embodies victory. You know the feeling when you overcome a seemingly impossible task, or are generally just slaying your day... this playlist is that feeling. Play loud and walk tall. Pro-tip: Spotify radio for this playlist is pretty great.");
         $('#playlistdesc2').text("Badass ◆ Rock ◆ Hip Hop ◆ Alternative ◆ Funk");
         }, delayinms);
     }
 });


$('.playlist5').on({
     'click': function(){         
         $("#playcontainer").fadeOut(500);
         setTimeout(function() {
         $('#playcontainer').fadeIn(600);
         $('#playcontainer').css("background-image", "url(/assets/images/canal.jpg)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/2oihvk73zA86hVMVCsaOfI';
         $('#playlistname').text("Shade");
         $('#playlistdesc').text("The soft glow of candlelight or filament light bulbs. A collection of R&B made for dark starry nights. I'm not an R&B head at all, this is just what I like to listen to.");
         $('#playlistdesc2').text("Noir ◆ RnB ◆ Trap ◆ Contemporary ◆ Dark");
         }, delayinms);
     }
 });


$('.playlist6').on({
     'click': function(){         
         $("#playcontainer").fadeOut(500);
         setTimeout(function() {
         $('#playcontainer').fadeIn(600);
         $('#playcontainer').css("background-image", "url(/assets/images/shibuya.png)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/6UdQGBCwiK5X6yNXQWn3hI';
         $('#playlistname').text("Need for Speed - Remixed");
         $('#playlistdesc').text("An alternative version of the Need for Speed: Payback soundtrack, including some high-octane classics from previous entries in the franchise and a few fresh favourites. Expect this to be updated with future need for speed titles. Fast and furious, this is an essential playlist for midnight cruises around the city.");
         $('#playlistdesc2').text("Racing ◆ Drum and Bass ◆ Electro House ◆ Metal ◆ Hip Hop ◆ Rock ◆ Dubstep");
         }, delayinms);
     }
 });
    
$('.playlist7').on({
     'click': function(){         
         $("#playcontainer").fadeOut(500);
         setTimeout(function() {
         $('#playcontainer').fadeIn(600);
         $('#playcontainer').css("background-image", "url(/assets/images/playstation.png)");
         iframe.src='https://open.spotify.com/embed/user/parm1der/playlist/6yV4JlDaLkx7gMhf9sG7bk';
         $('#playlistname').text("WipEout Omega Collection");
         $('#playlistdesc').text("Swapping out asphalt for Anti-gravity race tracks and boost panels, this is a different kind of racing playlist. WipEout is one of my favourite gaming franchises; high-speed, destructive and slick. This playlist is to accompany those adrenaline filled races with a perfect thumping bass soundtrack. Thanks to Studio Liverpool for crafting such incredible games and thanks to The Design Republic for being an endless source of inspiration in the design space.");
         $('#playlistdesc2').text("Racing ◆ Future ◆ Drum and Bass ◆ Electro ◆ Bass ◆ Neuro ◆ Tech ◆ Dubstep");
         }, delayinms);
     }
 });
});


