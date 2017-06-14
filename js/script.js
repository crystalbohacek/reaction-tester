var reactionTester = {
  /* Game variables */
  start: null,
  bestTime: false,

  /* Cached elements */
  circleElement: document.getElementById("shape"),
  timeTakenElement: document.getElementById("timeTaken"),
  bestTimeElement: document.getElementById("bestTime"),

  /* Functions */

  getRandomColor: function() {
      var letters = '0123456789ABCDE';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
        //creates a random selection of letters and numbers to create a hex color
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  },

  makeCircleAppear: function(){
    //choose a random location for the circle within certain parameters
  	var top = Math.random() * 5;
  	var left = Math.random() * 800;
  	var width = (Math.random() * 250) + 50;

  	reactionTester.circleElement.style.backgroundColor = reactionTester.getRandomColor();
  	reactionTester.circleElement.style.top = top + "px";
  	reactionTester.circleElement.style.left = left + "px";
  	reactionTester.circleElement.style.width = width + "px";
  	reactionTester.circleElement.style.height = width + "px";
  	reactionTester.circleElement.style.display = "block";
  
  	reactionTester.start = new Date().getTime();
  },

  appearAfterDelay: function (){
  	setTimeout(reactionTester.makeCircleAppear, Math.random() * 2000);
  }

}

reactionTester.appearAfterDelay();

reactionTester.circleElement.onclick = function() {
  reactionTester.circleElement.style.display = "none";

  var end = new Date().getTime();
  var timeTaken = (end - reactionTester.start) / 1000;
  //display different colors where it says "your time":
  if (timeTaken > 1.5){
    reactionTester.timeTakenElement.style.color = "red";
  } else if (timeTaken >= 1){
    reactionTester.timeTakenElement.style.color = "orange";
  } else {
    reactionTester.timeTakenElement.style.color = "green";
  }

  reactionTester.timeTakenElement.innerHTML = timeTaken + "s";

    //if no best time (ie start of the game), do not display the "best time" element:
  if (!reactionTester.bestTime){
    reactionTester.bestTimeElement.style.display = "none";
    reactionTester.bestTime = timeTaken;
  } else {
    //display the best time element when a time exists:
    reactionTester.bestTimeElement.style.display = "unset";
    //update best time when it's less than the saved best time.
    if (timeTaken < reactionTester.bestTime) {
      reactionTester.bestTime = timeTaken;
    }
  }
  
  reactionTester.bestTimeElement.innerHTML = reactionTester.bestTime + "s";

  reactionTester.appearAfterDelay();
}

var rt = new reactionTester();

rt.makeCircleAppear();
