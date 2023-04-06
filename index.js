// looks for button
let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");

let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");

let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");
//event functions
let redLight = function () {
  stopLight.classList.toggle("stop");
};
let yellowLight = function () {
  slowLight.classList.toggle("slow");
};
let greenLight = function () {
  goLight.classList.toggle("go");
};
//event listeners
stopButton.addEventListener("click", redLight);
slowButton.addEventListener("click", yellowLight);
goButton.addEventListener("click", greenLight);

function handleMouseEntered(event) {
  console.log(`Entered ${event.target.textContent} button`);
}

function handleMouseExit(event) {
  console.log(`Left ${event.target.textContent} button`);
}

stopButton.addEventListener("mouseenter", handleMouseEntered);
slowButton.addEventListener("mouseenter", handleMouseEntered);
goButton.addEventListener("mouseenter", handleMouseEntered);

stopButton.addEventListener("mouseleave", handleMouseExit);
slowButton.addEventListener("mouseleave", handleMouseExit);
goButton.addEventListener("mouseleave", handleMouseExit);

document.body.addEventListener("click", function (event) {
  if (event.target === stopButton) {
    if (stopLight.classList.contains("stop")) {
      console.log(`${event.target.textContent} bulb on`);
    } else {
      console.log(`${event.target.textContent} bulb off`);
    }
  }
  if (event.target === slowButton) {
    if (slowLight.classList.contains("slow")) {
      console.log(`${event.target.textContent} bulb on`);
    } else {
      console.log(`${event.target.textContent} bulb off`);
    }
  }
  if (event.target === goButton) {
    if (goLight.classList.contains("go")) {
      console.log(`${event.target.textContent} bulb on`);
    } else {
      console.log(`${event.target.textContent} bulb off`);
    }
  }
});
