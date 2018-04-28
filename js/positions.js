/*screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;

if (screen.lockOrientationUniversal("portrait")) {
  // orientation was locked
} else {
  // orientation lock failed
}*/
      var map; //skapa en variable att spara kartan i, skaar den utanför då den behövs i flera olika funktioner
      var draws = 0; //en variabel som sparar värdet på hur många gånger som positionen hämtats
      var myCirkel;  // en variabel att spara den utritade positionen för att nolla den gamla innan en ny skapas
      var wpid;
      var pointsOfIntrest = [

        {
          name: "matchmuseum",
          center: {lat: 57.784632, lng: 14.159612},
          //57.780455, 14.17203357.784632, 14.159612
          storlek: 100,
          played: 0000000000000,
          information: "mdjn jvh wedsjkh sd vjksl jsd lsd jklas hnsd fjösdln asndj najö fajsl dnan fas fkda fnjkadö lsd fadfa",
          image: "../images/hat.png",
          game: function (info){print(info)}

        }
      ];
function distans(myPos, toPos){
  /*
  code to calculate the distance betwene 2 gps cordinates is fetched from
  http://www.movable-type.co.uk/scripts/latlong.html
  and simplified to make me figure out whats hapening
  */
  lng1 = myPos.lng;
  lat1 = myPos.lat;
  lng2 = toPos.lng;
  lat2 = toPos.lat;
  var R = 6371e3; // metres around the equator
  var latitude1 = lat1*(Math.PI / 180); // get latitude in radians
  var latitude2 = lat2*(Math.PI / 180);
  var deltaLatitude = (lat2-lat1)*(Math.PI / 180);
  var deltaLongitude  = (lng2-lng1)*(Math.PI / 180);

  var a = Math.sin(deltaLatitude/2) * Math.sin(deltaLatitude/2) + Math.cos(latitude1) * Math.cos(latitude2) * Math.sin(deltaLongitude /2) * Math.sin(deltaLongitude /2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d;
}
function drawLocation(position){ // draw your location o the map and runs the distans calculations
  var pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  map.setCenter(pos); //centrerar kartan för positionen

  if (draws > 0) {
    myCirkel.setMap(null); // döljer din gamla position
  }
  myCirkel = new google.maps.Circle({
    strokeColor: '#1FD02A',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#1FD02A',
    fillOpacity: 0.35,
    map: map,
    center: pos,
    radius: 10
  });

  var maxDistansToEvent = 160; //Distance from the point of intrest to activate the event
  //var box = document.getElementById("box");
  for (var i = 0; i < pointsOfIntrest.length; i ++ ) {
    if(distans(pos, pointsOfIntrest[i].center) < maxDistansToEvent && ((Date.now() - pointsOfIntrest[i].played) >  600000) ){
      //box.style.background = "#F00"
      //box.innerText = pointsOfIntrest[i].name;
      navigator.geolocation.clearWatch(wpid);
      pointsOfIntrest[i].game(i);

    }
      //console.log(pointsOfIntrest[i].name + " " + distans(pos, pointsOfIntrest[i].center));
      //box.innerText = pointsOfIntrest[2].name + " " + distans(pos, pointsOfIntrest[2].center);
  }

  //console.log(draws);

draws++ // ökar antalet draws som har gjorts
}
function geo_error(error){ // ger medelanden vid errors
  /*
  1 = blocked
  2 = unavalebale
  3 = timeout
  */
  if (error.code === 1) {
    alert('unable to get location')
  }
  if (error.code === 3) {
    alert('Timeout');
  }
}
function myLocation(){ // whit sucsessfully got location
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    var geo_options = {
      enableHighAccuracy: true, //true
      maximumAge        : 30000
    };
    // get position whit parameters above
    wpid=navigator.geolocation.watchPosition(drawLocation,geo_error,geo_options);

  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

}

function init() {
  document.addEventListener("DOMContentLoaded", initMap)
}

function initMap() {
  // Create the map.


  navigator.geolocation.getCurrentPosition(startLocation,geo_error ,{
    enableHighAccuracy: true,
    maximumAge        : 30000,
    timeout           : 2700000
  });
  function startLocation(position) {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    var zoom = 18;

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoom,
      center: pos, // din start position var den fick positionen från första hemtnigen
      mapTypeId: 'roadmap',
      //disableDefaultUI: true,
      //draggable: false,
      scrollwheel: false,
      panControl: false,
      //maxZoom: zoom,
      //minZoom: zoom,


    });


    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the storlek.
    for (var location in pointsOfIntrest) {
      // Add the circle for this city to the map.
      var locationCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: pointsOfIntrest[location].center,
        radius: Math.sqrt(pointsOfIntrest[location].storlek)
      });

      // google.maps.event.addEventListener(locationCircle, 'click', function() {
      //   addToPoiArray(locationCircle.center);
      //   renderRoute();
      // });
    }
    myLocation();
    //document.addEventListener("DOMContentLoaded", myLocation);

    directionsDisplay.setMap(map);
    renderRoute(directionsService, directionsDisplay);
  }
}
