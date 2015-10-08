$(document).ready(function(){
   
	// function to show portfolio overlays on hover

var timer;
var delay = 1000;

$(".item").hover(function(){
    // on mouse in, start a timeout
    timer = setTimeout(function() {
        // do your stuff here
        $(this).find(".overlayText").stop(true,true).slideDown("500");
    },function(){
        $(this).find(".overlayText").stop(true,true).slideUp("500");    
    }, delay);
}, function() {
    // on mouse out, cancel the timer
    clearTimeout(timer);
});

//my overlay function
   $(".item").hover(function(){
        $(this).find(".overlayText").stop(true,true).slideDown("500");
    },function(){
        $(this).find(".overlayText").stop(true,true).slideUp("500");    
    }); //overlay function end


}); // document ready end