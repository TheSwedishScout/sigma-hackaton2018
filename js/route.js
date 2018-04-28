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
  var routeToRender = {
    // origin: poiArray[0],
    // destination: poiArray[poiArray.length - 1],
    // waypoints: function() {
    //   arrayToReturn = [];
    //   for (i = 1; i < poiArray.length - 1; i++) {
    //     arrayToReturn.push({
    //       location: poiArray[i],
    //       stopover: false
    //     })
    //     return arrayToReturn
    //   }
    // }

  origin: 'Chicago, IL',
  destination: 'Los Angeles, CA',
  waypoints: [
    {
      location: 'Joplin, MO',
      stopover: false
    },{
      location: 'Oklahoma City, OK',
      stopover: true
    }],
  provideRouteAlternatives: false,
  travelMode: 'DRIVING',
  drivingOptions: {
    departureTime: new Date(/* now, or future date */),
    trafficModel: 'pessimistic'
  },
  unitSystem: google.maps.UnitSystem.METRIC

  };

  directionsService.route(routeToRender)
}
