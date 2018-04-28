var game = document.getElementById('game');
function isPlaying(audio) { return !audio.paused; }


function print(id) {
    //#information
    //Display the onformation of the location
    var elem = document.getElementById('information');
    elem.innerHTML = "";
    elem.classList.remove("hidden")
    var infoElem = document.createElement('div');
    infoElem.innerHTML = pointsOfIntrest[id].information;
    var imageElem = document.createElement('img');
    imageElem.src = pointsOfIntrest[id].image;
    elem.appendChild(imageElem);
    elem.appendChild(infoElem);
    var map = document.getElementById('map')
    imageElem.addEventListener('click', function () {
      elem.classList.add("hidden")
    })
  }
