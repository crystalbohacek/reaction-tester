/* Game variables */
var start = new Date().getTime();  
var bestTime = false;
var clickReady = false;

/* Cached elements */
var backgroundElement = document.getElementById("background");
var bestTimeElement = document.getElementById("bestTime");
var placeholderElement = document.getElementById("placeholder")

placeholderElement.innerHTML = "wait for green" 

function makeGreenAppear(){
  backgroundElement.style.backgroundColor = "green";
  start = new Date().getTime();
//clickReady means that it was clicked correctly while green, not while red. 
  clickReady = true;
}

function appearAfterDelay(){
  setTimeout(makeGreenAppear, Math.random() * 5000);
}

appearAfterDelay();

backgroundElement.onclick = function() {
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;  
  
  //display "clicked too soon" if it is clicked while still red
  if(!clickReady){
    placeholderElement.innerHTML = "clicked too soon!" 
    backgroundElement.style.backgroundColor = "blue";
  } else {
  //if it is clicked correctly, display the time and blue background.
    placeholderElement.innerHTML = "Your time: " + timeTaken + "s" 
    backgroundElement.style.backgroundColor = "blue";
  }
  
  //if clicked when green but there is no best time, set a best time.
  if(clickReady && !bestTime){
    bestTimeElement.style.dispay = "none";
    bestTime = timeTaken;
  } else if (clickReady) {
    bestTimeElement.innerHTML = bestTime + "s";
    bestTimeElement.style.display = "unset";
  //set a new best time if it is smaller than the last:
    if (timeTaken < bestTime) {
      bestTime = timeTaken;
    }
  }
  clickReady = false;
}