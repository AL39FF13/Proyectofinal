// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
   $('#B_Beep').tap(function(){
    navigator.notification.beep(1);
  });
 },false); //deviceready
}); 



