/* Game variables */
var start = new Date().getTime();  
var bestTime = false;
var clickReady = false;

/* Cached elements */
var backgroundElement = document.getElementById("background");
var timeTakenElement = document.getElementById("timeTaken");
var bestTimeElement = document.getElementById("bestTime");
var placeholderElement = document.getElementById("placeholder")

placeholderElement.innerHTML = "wait for green" 

function makeGreenAppear(){
  backgroundElement.style.backgroundColor = "green";
  start = new Date().getTime();
  clickReady = true;
}

function appearAfterDelay(){
  setTimeout(makeGreenAppear, Math.random() * 6000);
}

appearAfterDelay();

backgroundElement.onclick = function() {
  
  if(!clickReady){
    placeholderElement.innerHTML = "clicked too soon!" 
    backgroundElement.style.backgroundColor = "blue";
  } else {
    placeholderElement.innerHTML = "clicked" 
    backgroundElement.style.backgroundColor = "blue";
  }
}