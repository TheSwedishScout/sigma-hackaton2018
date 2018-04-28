/*---------------------------------------
|---_____----------__--__-______--_____--|
|--/ ____|---/\---|  \/  |  ____|/ ____|-|
|-| |-------/  \--| \  / | |__  | (___---|
|-| |-|_ |-/ /\ \-| |\/| |  __|--\___ \--|
|-| |__| |/ ____ \| |--| | |____-____) |-|
|--\_____/_/----\_\_|--|_|______|_____/--|
----------------------------------------*/
var game = document.getElementById('game');
function isPlaying(audio) { return !audio.paused; }


function print(id) {
    //#information
    //Display the onformation of the location
    var elem = document.getElementById('information');
    var infoElem = document.createElement('div');
    infoElem.innerText = pointsOfIntrest[id].information;
    var imageElem = document.createElement('img');
    imageElem.src = pointsOfIntrest[id].image;
    elem.appendChild(imageElem);
    elem.appendChild(infoElem);
}
