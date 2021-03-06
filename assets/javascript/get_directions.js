
//http://groups.google.com/group/google-maps-js-api-v3/browse_thread/thread/0c28ecbdb92e9e23
 function initGeolocation()
 {
    if(navigator.geolocation)
    {
     // Call getCurrentPosition with success and failure callbacks
     navigator.geolocation.getCurrentPosition( success, fail );
    }
   else
    {
        alert("Sorry, your browser does not support geolocation services.");
    }
 }

 var directionDisplay;
 var directionsService = new google.maps.DirectionsService();
 var map;

 function success(position) 
 {
    //Show map
   $("#map-canvas").css("display","block");
    directionsDisplay = new google.maps.DirectionsRenderer();
    coords = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

    var myOptions = 
    {
        zoom:12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: coords
    }
	  
    map = new google.maps.Map(document.getElementById("map-canvas"),myOptions);
    directionsDisplay.setMap(map);
	calcRoute();
}

function calcRoute() {
   var start = coords;
   var end = new google.maps.LatLng(44.47749, -73.21992);
   var request = {
     origin:start,
     destination:end,
     travelMode: google.maps.TravelMode.DRIVING
   };
   directionsService.route(request, function(result, status) {
       if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
       }
   });
}

function fail()
{
    // Could not obtain location
    alert('Failed to retreive your location.');
} 