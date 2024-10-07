/* FUNCTIONS MODULE ASSIGNMENT
Demonstrating knowledge of functions with parameters and return values using the myCanvas
*/

// *** Don't forget to add your graphics and random libraries! ***

// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800; //can choose any size
cnv.height = 600;

// Do not add/remove code from this section:
// ***************************************************
// Global Vars
let mouseX;
let mouseY;

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("X: " + mouseX + "  Y: " + mouseY);
}
// ***************************************************

// drawStickman(100, 100, "pink");
// drawStickman(300, 20, "violet");
// drawStickman(getLocationX(), 200, "green");

drawBackground();

drawCloud(100, 100, 0.9);
drawCloud(650, 160, 1.1);
drawCloud(getClLocationX(), getClLocationY(), getClScale());

drawBuildingRow(150, 320, "rgb(49, 55, 74)", "rgb(55, 60, 79)", 0.9);
drawBuildingRow(500, 360, "rgb(49, 51, 74)", "rgb(55, 57, 79)", 1);
drawBuildingRow(
  getLocationX(),
  getLocationY(),
  getColourOne(),
  getColourTwo(),
  getScale()
);
