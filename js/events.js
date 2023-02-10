//Directly set on the html element
//<button onclick="console.log(65 );">Another Button</button>
console.log("This is separate js file");
//option 2 addd click function on the html element
//<button onclick="makeRed()">Make red</button>
//will use this many case
function makeRed() {
  document.body.style.backgroundColor = "red";
}
//option 3
// <button id="make-blue">Make Blue</button>

const makeBluebutton = document.getElementById("make-blue");
makeBluebutton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
//option 4

const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}
//4 another one
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});
//option 4 final it is use many times
document
  .getElementById("make-goldenRod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenRod";
  });
