
      var map; //skapa en variable att spara kartan i, skaar den utanför då den behövs i flera olika funktioner
      var draws = 0; //en variabel som sparar värdet på hur många gånger som positionen hämtats
      var myCirkel;  // en variabel att spara den utritade positionen för att nolla den gamla innan en ny skapas
      var wpid;

      var pointsOfIntrest = [
        {
          name: "Match museum",
          center: {lat: 57.784632, lng: 14.159612},
          //57.780455, 14.17203357.784632, 14.159612
          storlek: 100,
          played: 0000000000000,
<<<<<<< HEAD
          information: "mdjn jvh wedsjkh sd vjksl jsd lsd jklas hnsd fjösdln asndj najö fajsl dnan fas fkda fnjkadö lsd fadfa",
          image: "images/hat.png",
          game: function (info){print(info)}
=======
          information: "The matchstick museum is hot this year.<br> Opening hours: 11-15",
          image: "images/matchstickmuseum.jpg",
          game: function (info){print(info)}
        },
        {
          name: "Birdmuseum",
          center: {lat: 57.781601, lng: 14.144533},
          storlek: 100,
          played: 0000000000000,
          information: "The bird museum is flying high.<br> Opening hours: 11-17",
          image: "images/birdmuseum.jpg",
          game: function (info){print(info)}
        },
        {
          name: "Sofiakyrkan",
          center: {lat: 57.781988, lng: 14.159574},
          //57.780455, 14.17203357.784632, 14.159612
          storlek: 100,
          played: 0000000000000,
          information: "God is everywhere.<br> Opening hours: until gods kingdom comes",
          image: "images/sofiakyrkan.jpg",
          game: function (info){print(info)}
        },
        {
          name: "Staty till minne av Magnus Ladulås tupplur",
          center: {lat: 57.782459, lng: 14.163478},
          //57.780455, 14.17203357.784632, 14.159612
          storlek: 100,
          played: 0000000000000,
          information: "Mange Double L softar.<br> Opening hours: Never, the barn is locked",
          image: "images/mange.jpg",
          game: function (info){print(info)}
        },
>>>>>>> ea6b58d72aa75555fa3ec25514dfd4c8bfae0f9e

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
<<<<<<< HEAD
      pointsOfIntrest[i].game(i); //I is the position in the list
      
=======
      pointsOfIntrest[i].game(i);

>>>>>>> ea6b58d72aa75555fa3ec25514dfd4c8bfae0f9e
    }

  }


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

<<<<<<< HEAD

      // style generated on https://snazzymaps.com/
=======
>>>>>>> ea6b58d72aa75555fa3ec25514dfd4c8bfae0f9e
      styles: [
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-1"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "weight": "1.00"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.text",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
<<<<<<< HEAD
      //styles: [{"featureType": "all","elementType": "geometry","stylers": [{"color": "#f6fb00"}]},{"featureType": "all","elementType": "labels.text","stylers": [{"visibility": "off"}]},{"featureType": "all","elementType": "labels.text.fill","stylers": [    {"gamma": 0.01    },    {"lightness": 20    }]},{"featureType": "all","elementType": "labels.text.stroke","stylers": [    {"saturation": -31    },    {"lightness": -33    },    {"weight": 2    },    {"gamma": 0.8    }]},{"featureType": "all","elementType": "labels.icon","stylers": [    {"visibility": "off"    }]},{"featureType": "landscape","elementType": "geometry","stylers": [    {"lightness": 30    },    {"saturation": 30    },    {"color": "#000000"    }]},{"featureType": "poi","elementType": "geometry","stylers": [    {"saturation": 20    }]},{"featureType": "poi","elementType": "labels.text","stylers": [    {"visibility": "off"    }]},{"featureType": "poi.park","elementType": "geometry","stylers": [    {"lightness": 20    },    {"saturation": -20    }]},{"featureType": "road","elementType": "geometry","stylers": [    {"lightness": 10    },    {"saturation": -30    }]},{"featureType": "road","elementType": "geometry.stroke","stylers": [    {"saturation": 25    },    {"lightness": 25    }]},{"featureType": "road","elementType": "labels.text","stylers": [    {"visibility": "off"    }]},{"featureType": "water","elementType": "all","stylers": [    {"lightness": -20    }]}]
=======
>>>>>>> ea6b58d72aa75555fa3ec25514dfd4c8bfae0f9e
    });


    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the storlek.
    for (var location in pointsOfIntrest) {
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
      (function (locationCircle, location ) {
        var infowindow = new google.maps.InfoWindow({
          content: "This is a proof of concept!",
          map: map

        })

        google.maps.event.addListener(locationCircle, 'mouseover', function() {
          var x = event.clientX;     // Get the horizontal coordinate
          var y = event.clientY;     // Get the vertical
          var infocard = document.getElementById('hoverInfo');
          infocard.innerHTML = '<h3>'+pointsOfIntrest[location].name+'</h3><p>'+pointsOfIntrest[location].information+"</p>";
          infocard.style.left = x+"px";
          infocard.style.top = y+"px";
          infocard.style.display = "block";
          infocard.addEventListener('mouseout', function () {
            infocard.style.display = "none";

          })
                // infowindow.open(map, locationCircle);
            });

            // assuming you also want to hide the infowindow when user mouses-out
            google.maps.event.addListener(locationCircle, 'mouseout', function() {
              var infocard = document.getElementById('hoverInfo');
              infocard.style.display = "none";

                // infowindow.close();
            });
        // Add the circle for this city to the map.

        google.maps.event.addListener(locationCircle, 'click', function() {
          console.log("Click on location no:" + location);
          pointsOfIntrest[location].game(location);
          //infoWindow.open(map, this);
        });
      }(locationCircle, location))
    }
    myLocation();

    directionsDisplay.setMap(map);
    directionsDisplay.setOptions({suppressMarkers: true});
    renderRoute(directionsService, directionsDisplay);
  }
}

function create(i, locationCircle) {
  debugger
  return function (i, locationCircle) {
    debugger;
    google.maps.event.addListener(locationCircle, 'click', function() {
      console.log("Click on location no:" + location);
      pointsOfIntrest[location].game(location);
    });

  }
}
