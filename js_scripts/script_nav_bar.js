var block_show = null;
 
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('#headerID').offset().top;
	var eh = $('#headerID').outerHeight();
	
	if (et >= wt && et + eh <= wh + wt){
		if (block_show == null || block_show == false) {
			console.log("Visible");
      $(document).ready(function(){
        $(".sideBarAmin").removeClass("active");			
      });
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			console.log("Hidden");
      $(".sideBarAmin").addClass("active");
		}
		block_show = false;
	}
}
 
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});