jQuery(document).ready(function($){
$('surprise').hide().removeClass('hide');
$('.mumble').on({
     'click': function(){
         $('surprise').fadeIn(600);
         }
 });
});
