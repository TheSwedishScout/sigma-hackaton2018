var game = document.getElementById('game');
function isPlaying(audio) { return !audio.paused; }


function print(id) {
    //#information
    //Display the onformation of the location
    var elem = document.getElementById('information');
<<<<<<< HEAD
    var infoElem = document.createElement('div');
    infoElem.innerText = pointsOfIntrest[id].information;
=======
    elem.innerHTML = "";
    elem.classList.remove("hidden")
    var infoElem = document.createElement('div');
    infoElem.innerHTML = pointsOfIntrest[id].information;
>>>>>>> ea6b58d72aa75555fa3ec25514dfd4c8bfae0f9e
    var imageElem = document.createElement('img');
    imageElem.src = pointsOfIntrest[id].image;
    elem.appendChild(imageElem);
    elem.appendChild(infoElem);
<<<<<<< HEAD
}
=======
    var map = document.getElementById('map')
    imageElem.addEventListener('click', function () {
      elem.classList.add("hidden")
    })
  }
>>>>>>> ea6b58d72aa75555fa3ec25514dfd4c8bfae0f9e
