var start = new Date().getTime();
var bestTime = 999;


function getRandomColor() {
    var letters = '0123456789ABCDE';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear(){
	var top = Math.random() * 5;
	var left = Math.random() * 800;
	var width = (Math.random() * 250) + 50;
	document.getElementById("shape").style.backgroundColor = getRandomColor();
	document.getElementById("shape").style.top = top + "px";
	document.getElementById("shape").style.left = left + "px";
	document.getElementById("shape").style.width = width + "px";
	document.getElementById("shape").style.height = width + "px";
	document.getElementById("shape").style.display = "block";
	start = new Date().getTime();
}

function appearAfterDelay(){
	setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();



document.getElementById("shape").onclick = function() {
	document.getElementById("shape").style.display = "none";
	var end = new Date().getTime();
	var timeTaken = (end - start) / 1000;
  if (timeTaken > 1.5){
    document.getElementById("timeTaken").style.color = "red";
  } else if (timeTaken >= 1){
    document.getElementById("timeTaken").style.color = "orange";
  } else {
    document.getElementById("timeTaken").style.color = "green";
  }
  document.getElementById("timeTaken").innerHTML = timeTaken + "s";
  
  if (bestTime === 999){
    document.getElementById("bestTime").style.display = "none";
  } else {
    document.getElementById("bestTime").style.display = "unset";
  }
  //update best time if the current time is smaller.
  if (timeTaken < bestTime) {
    bestTime = timeTaken;
  }
  document.getElementById("bestTime").innerHTML = bestTime + "s";
  
  appearAfterDelay();
}

