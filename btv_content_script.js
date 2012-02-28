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
    * http://groups.google.com/group/google-maps-js-api-v3/browse_thread/thread/0c28ecbdb92e9e23
    */
    $("#get-directions").click(initGeolocation);
    var initGeolocation = function(event) {
        event.preventDefault();
        if(navigator.geolocation)
        {
            // Call getCurrentPosition with success and failure callbacks
            navigator.geolocation.getCurrentPosition( success, fail );
        }
        else
        {
            alert("Sorry, your browser does not support geolocation services.");
        }
    };

    var directionDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map = $("#map-canvas");    //Stores div element that will display the map

    var success = function(position) {
      directionsDisplay = new google.maps.DirectionsRenderer();
      coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        
      var myOptions = 
	  {
        zoom:12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: coords
      }
	  
      map = new google.maps.Map(map, myOptions);
      directionsDisplay.setMap(map);
	  calcRoute();
    };

    var calcRoute = function() {
      var start = coords;
      var end = new google.maps.LatLng(44.477752, -73.208875);  //Using dummy address for now
      var request = {
        origin:start,
        destination:end,
        travelMode: google.maps.TravelMode.DRIVING
      };
      alert('success1');
      directionsService.route(request, function(result, status) {
      alert('success');
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
        }
      });
    };

    var fail = function()
    {
        // Could not obtain location
    }; 

});