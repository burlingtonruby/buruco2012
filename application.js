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
	var linkSelected=$("#link-selected");
	var triangle=linkSelected[0].getContext("2d");
	triangle.fillStyle="#FF0000";
	triangle.strokeStyle="#FF0000";

	triangle.moveTo(10,10);
	triangle.lineTo(40,10);
	triangle.lineTo(25,30);
	triangle.lineTo(10,10);

	triangle.fill();
	triangle.stroke();
	
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
	$('.top-btn').click(function(){
		$("#link-selected").css("left","100px");
	});
	
	
	/*
	* Creates a sliding effect when user clicks the 'More' button 
	* needed because when the screen gets to a mobile device size
	* the links in the BTV section take up too much room
	*/
	$("#more-btn").mouseover(function() {
		$(this).css("cursor","pointer");
	});
	$("#more-btn").toggle(function() {
		$("#btn-txt").html("LESS");
		$(this).css("left","120px");
		$(this).css("text-align","center");
		$("#additional-links").css("left","10px");
	}, function() {
		$("#btn-txt").html("MORE");
		$(this).css("left","-20px");
		$("#additional-links").css("left","-150px");
	});
	
	/* 
	* Smooth scrolling 
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
