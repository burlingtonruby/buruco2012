/* Scripts for the BTV sub-section, which
* contains information such as Directions,
* Restaurants, Attractions, Shopping, and
* Lodging.
*/
$(document).ready(function() {

    /* 
	* Smooth scrolling 
	* https://github.com/kswedberg/jquery-smooth-scroll
	*/
	$('#additional-links a').click(function() {
		  $.smoothScroll({
			scrollTarget: $(this).attr("href"),
			offset: -80
		});
		return false;	
	});

});