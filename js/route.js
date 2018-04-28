// -- route.js --
// -- This file contains functions for plotting a route

// När man klickar på en prick kommer newLine() att köras. Den ritar ett streck från den givna punkten till användarens
// finger tills användaren släpper eller rör en annan punkt. I det andra fallet solidifieras strecket och är kvar på skärmen.
// Man kan ångra ett streck genom att klicka på det vilket highlightar och välja "radera".


// -- Testvars --
  var poiArray = [
    {lat: 57.784668, lng: 14.159639}, // Matchstickmuseum
    {lat: 57.781601, lng: 14.144533}, // Birdmuseum
    {lat: 57.782459, lng: 14.163478} // Mange Dubbel L:s minnesmäre

  ]
// -- End of Testvars --

// var lineArray = []

// function renderRoute() {
//   var routeToRender = new google.maps.Polyline({
//     path: poiArray,
//     geodisc: true,
//     strokeColor: '#FF0000',
//     strokeOpacity: 1.0,
//     strokeWeight: 2
//
//   })

function renderRoute(directionsService, directionsDisplay) {
// -- I wish this worked --
  // waypts = [];
  // for (i = 1; i < poiArray.length - 1; i++) {
  //   waypts.push({
  //     location: poiArray[i].value,
  //     stopover: true,
  //   });
  // var routeToRender = {
  //   origin: poiArray[0],
  //   destination: poiArray[poiArray.length - 1],
  //   waypoints: waypts
  //   }
// -- End of I wish this worked

// --- Test code ---
  var routeToRender = {
  origin: {lat: 57.784668, lng: 14.159639}, // Matchstickmuseum
  destination: {lat: 57.781601, lng: 14.144533}, // Birdmuseum
  waypoints: [
    {
      location: {lat: 57.782459, lng: 14.163478}, // Magne L.L. staue
      stopover: true
    },
    {
      location: {lat:57.781988, lng: 14.159574}, // Sofiakyrkan
      stopover: true
    }
  ],
  provideRouteAlternatives: false,
  travelMode: 'WALKING',
  unitSystem: google.maps.UnitSystem.METRIC
// --- End of test code ---
  }

  directionsService.route(routeToRender, function(response, status) {
    console.log("Starting directionsService.route()")
    if (status == google.maps.DirectionsStatus.OK) {
      console.log("status OK");
      directionsDisplay.setDirections(response);
      console.log("Status OK OK");
    } else {
      console.log("Fan, nu blev det fel. Kolla i route.js, något gick fel med directionsService.route() ")
    }
  })
}
