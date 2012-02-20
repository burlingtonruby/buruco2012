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
	
	
	/**
	* This variable are used to keep track of the active link.
	* They are used with the updateSliderResize() function to 
	* determine the position of the sliding red triangle when
	* the browser window is resized. Possible choices include:
	* Logo, Speakers, Schedule, Sponsors, Tickets, and BTV. The
	* Default value is Logo.
	*/
	var currentLink = "Logo";
	
	//Selects the currentLink variable
	$('.links').click(function(){
		switch($(this).attr("id"))
		{
			case "speakers-link":
				currentLink = "Speakers";
				break;
				
			case "schedule-link":
				currentLink = "Schedule";
				break;
			
			case "sponsors-link":
				currentLink = "Sponsors";
				break;
				
			case "tickets-link":
				currentLink = "Tickets";
				break;
				
			case "btv-link":
				currentLink = "BTV";
				break;
		}
	});
	$('.top-btn').click(function(){
		currentLink = "Logo";
	});
	
	/*************************************
	Updates the slider when the browser
	size is changed, based on the
	currentLink variable and window size.
	**************************************/
	var updateSliderResize = function()
	{
		//Stores the browser window size
		var windowSize = $(window).width();
		$('.speaker-title').html(windowSize);
		
		switch(currentLink)
		{
			case "Logo":
				if(windowSize <= 558) { 
					$("#link-selected").css("left","55px"); 
				}
				else if(windowSize <= 683) { 
					$("#link-selected").css("left","71px"); 
				}
				else if(windowSize <= 733) { 
					$("#link-selected").css("left","86px"); 
				}
				else { 
					$("#link-selected").css("left","100px"); 
				}
				break;
				
			case "Speakers":
				if(windowSize <= 558) { 
					$("#link-selected").css("left","157px");
				}
				else if(windowSize <= 583) { 
					$("#link-selected").css("left","162px");
				}
				else if(windowSize <= 633) { 
					$("#link-selected").css("left","160px");
				}
				else if(windowSize <= 658) { 
					$("#link-selected").css("left","165px");
				}
				else if(windowSize <= 683) { 
					$("#link-selected").css("left","191px");
				}
				else if(windowSize <= 733) { 
					$("#link-selected").css("left","216px");
				}
				else if(windowSize <= 833) { 
					$("#link-selected").css("left","244px");
				}
				else if(windowSize <= 858) { 
					$("#link-selected").css("left","255px");
				}
				else if(windowSize <= 883) { 
					$("#link-selected").css("left","280px");
				}
				else if(windowSize <= 908) { 
					$("#link-selected").css("left","300px");
				}
				else if(windowSize <= 983) { 
					$("#link-selected").css("left","338px");
				}
				else { 
					$("#link-selected").css("left","414px");
				}
				break;
				
			case "Schedule":
				if(windowSize <= 558) { 
					$("#link-selected").css("left","252px");
				}
				else if(windowSize <= 583) { 
					$("#link-selected").css("left","262px");
				}
				else if(windowSize <= 633) { 
					$("#link-selected").css("left","269px");
				}
				else if(windowSize <= 658) { 
					$("#link-selected").css("left","282px");
				}
				else if(windowSize <= 683) { 
					$("#link-selected").css("left","306px");
				}
				else if(windowSize <= 733) { 
					$("#link-selected").css("left","336px");
				}
				else if(windowSize <= 833) { 
					$("#link-selected").css("left","365px");
				}
				else if(windowSize <= 858) { 
					$("#link-selected").css("left","393px");
				}
				else if(windowSize <= 883) { 
					$("#link-selected").css("left","425px");

				}
				else if(windowSize <= 908) { 
					$("#link-selected").css("left","445px");
				}
				else if(windowSize <= 983) { 
					$("#link-selected").css("left","482px");
				}
				else { 
					$("#link-selected").css("left","560px");
				}
				break;
				
			case "Sponsors":
				if(windowSize <= 558) { 
					$("#link-selected").css("left","348px");
				}
				else if(windowSize <= 583) { 
					$("#link-selected").css("left","368px");
				}
				else if(windowSize <= 633) { 
					$("#link-selected").css("left","378px");
				}
				else if(windowSize <= 658) { 
					$("#link-selected").css("left","405px");
				}
				else if(windowSize <= 683) { 
					$("#link-selected").css("left","428px");
				}
				else if(windowSize <= 733) { 
					$("#link-selected").css("left","455px");
				}
				else if(windowSize <= 833) { 
					$("#link-selected").css("left","485px");
				}
				else if(windowSize <= 858) { 
					$("#link-selected").css("left","530px");
				}
				else if(windowSize <= 883) { 
					$("#link-selected").css("left","575px");
				}
				else if(windowSize <= 908) { 
					$("#link-selected").css("left","600px");
				}
				else if(windowSize <= 983) { 
					$("#link-selected").css("left","636px");
				}
				else { 
					$("#link-selected").css("left","712px");
				}
				break;
				
			case "Tickets":
				if(windowSize <= 558) { 
					$("#link-selected").css("left","435px");
				}
				else if(windowSize <= 583) { 
					$("#link-selected").css("left","465px");
				}
				else if(windowSize <= 633) { 
					$("#link-selected").css("left","478px");
				}
				else if(windowSize <= 658) { 
					$("#link-selected").css("left","514px");
				}
				else if(windowSize <= 683) { 
					$("#link-selected").css("left","538px");
				}
				else if(windowSize <= 733) { 
					$("#link-selected").css("left","564px");
				}
				else if(windowSize <= 833) { 
					$("#link-selected").css("left","595px");
				}
				else if(windowSize <= 858) { 
					$("#link-selected").css("left","660px");
				}
				else if(windowSize <= 883) { 
					$("#link-selected").css("left","714px");
				}
				else if(windowSize <= 908) { 
					$("#link-selected").css("left","730px");
				}
				else if(windowSize <= 983) { 
					$("#link-selected").css("left","770px");
				}
				else { 
					$("#link-selected").css("left","845px");
				}
				break;
				
			case "BTV":
				if(windowSize <= 558) { 
					$("#link-selected").css("left","498px");
				}
				else if(windowSize <= 583) { 
					$("#link-selected").css("left","532px");
				}
				else if(windowSize <= 633) { 
					$("#link-selected").css("left","553px");
				}
				else if(windowSize <= 658) {
					$("#link-selected").css("left","597px");
				}
				else if(windowSize <= 683) { 
					$("#link-selected").css("left","624px");
				}
				else if(windowSize <= 733) { 
					$("#link-selected").css("left","650px");
				}
				else if(windowSize <= 833) { 
					$("#link-selected").css("left","678px");
				}
				else if(windowSize <= 858) { 
					$("#link-selected").css("left","755px");
				}
				else if(windowSize <= 883) { 
					$("#link-selected").css("left","816px");
				}
				else if(windowSize <= 908) { 
					$("#link-selected").css("left","834px");
				}
				else if(windowSize <= 983) { 
					$("#link-selected").css("left","873px");
				}
				else { 
					$("#link-selected").css("left","946px");
				}
				break;
		}
	};
		
	/*************************************
	Updates the slider when the user clicks
	on a link on the top nav bar. It
	calls the updateSliderResize() method
	to get the proper positioning for the
	red triangle slider
	**************************************/
	$('.links').click(function(){
		updateSliderResize();
	});
	$('.top-btn').click(function(){
		updateSliderResize();
	});
	
	/* Changes location of triangle based on browser size */
	$(window).resize(function () { 
		updateSliderResize();
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
