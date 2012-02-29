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
    
    /**
    * Gets the directions, from the user's current location, to the address that 
    * will be specified by us (to the Ruby conference)
    */
    $("#get-directions").click(function() {
        initGeolocation();
        //make map visible
        $("#map-canvas").css("display","block");
    });
});