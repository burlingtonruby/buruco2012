$(document).ready(function() {
  $('.nav').noisy({
      intensity: 0.9,
      size: 100,
      opacity: 0.08,
      monochrome: false
  });

  $('body').noisy({
      intensity: 0.9,
      size: 100,
      opacity: 0.08,
      monochrome: false
  });
  
	/* Draws triangle (above selected href in .nav) for canvas element */
	var c=document.getElementById("link-selected");
	var ctx=c.getContext("2d");
	ctx.fillStyle="#FF0000";
	ctx.strokeStyle="#FF0000";

	ctx.moveTo(10,10);
	ctx.lineTo(40,10);
	ctx.lineTo(25,30);
	ctx.lineTo(10,10);

	ctx.fill();
	ctx.stroke();
	
	/* Changes location of triangle based on what link is active */
	$('.links').click(function(){
		switch($(this).attr("id"))
		{
			case "speakers-link":
				$("#link-selected").css("left","414px");
				break;
				
			case "schedule-link":
				$("#link-selected").css("left","560px");
				break;
				
			case "sponsors-link":
				$("#link-selected").css("left","712px");
				break;
				
			case "tickets-link":
				$("#link-selected").css("left","845px");
				break;
				
			case "btv-link":
				$("#link-selected").css("left","946px");
				break;
		}	
	});
	
	/* Smooth scrolling 
	* https://github.com/kswedberg/jquery-smooth-scroll
	*/
	$('.links, .top-btn').click(function() {
	  $.smoothScroll({
		//scrollElement: $('div.scrollme'),
		scrollTarget: $(this).attr("href"),
		offset: -80
	});
	return false;
});

});
