// function drawStickman(x, y, clr, armScale) {
//   // Head
//   ctx.strokeStyle = clr;
//   ctx.lineWidth = 2;

//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, 2 * Math.PI); // 250, 100 (x, y)
//   ctx.stroke();

//   // Torso
//   ctx.beginPath();
//   ctx.moveTo(x, y + 30);
//   ctx.lineTo(x, y + 100);
//   ctx.stroke();

//   // Left leg
//   ctx.beginPath();
//   ctx.moveTo(x, y + 100);
//   ctx.lineTo(x - 25, y + 150);
//   ctx.stroke();

//   //Right Leg
//   ctx.beginPath();
//   ctx.moveTo(x, y + 100);
//   ctx.lineTo(x + 25, y + 150);
//   ctx.stroke();

//   // Left Arm
//   ctx.beginPath();
//   ctx.moveTo(x, y + 60);
//   ctx.lineTo(x - 35, y + 30);
//   ctx.stroke();

//   // Right Arm
//   ctx.beginPath();
//   ctx.moveTo(x, y + 60);
//   ctx.lineTo(x + 35, y + 30);
//   ctx.stroke();
// }

// function getLocationX() {
//   let x = +prompt("Enter a value from 0 to 500");
//   return x;
// }

// Exercise
// Give thge function the ability to chaneg teh colour of the stickman
// Update your function calls to see these stickmen
// Add a scale size to the head

function drawBackground() {
  ctx.fillStyle = "rgb(33, 34, 53)";
  ctx.fillRect(0, 0, 800, 600);

  ctx.fillStyle = "rgb(33, 42, 53)";
  ctx.fillRect(0, 400, 800, 600);

  ctx.fillStyle = "rgb(237, 242, 157)";
  ctx.fillRect(12, 368, 2, 2);
  ctx.fillRect(789, 45, 2, 2);
  ctx.fillRect(625, 267, 2, 2);
  ctx.fillRect(489, 127, 2, 2);
  ctx.fillRect(334, 79, 2, 2);
  ctx.fillRect(372, 188, 2, 2);
  ctx.fillRect(728, 124, 2, 2);
  ctx.fillRect(469, 323, 2, 2);
  ctx.fillRect(84, 27, 2, 2);
  ctx.fillRect(246, 329, 2, 2);
  ctx.fillRect(284, 287, 2, 2);
  ctx.fillRect(123, 167, 2, 2);
  ctx.fillRect(768, 227, 2, 2);
  ctx.fillRect(47, 327, 2, 2);
  ctx.fillRect(566, 190, 2, 2);
  ctx.fillRect(156, 220, 2, 2);
  ctx.fillRect(785, 376, 2, 2);
  ctx.fillRect(604, 80, 2, 2);
}

function drawCloud(clx, cly, clScale) {
  // Cloud
  ctx.fillStyle = "gray";

  ctx.beginPath();
  ctx.arc(
    (clx - 10) * clScale,
    (cly + 30) * clScale,
    60 * clScale,
    0,
    2 * Math.PI
  ); //-10, +30
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx - 45) * clScale,
    (cly + 40) * clScale,
    50 * clScale,
    0,
    2 * Math.PI
  ); //-45, +40
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx - 70) * clScale,
    (cly + 32) * clScale,
    40 * clScale,
    0,
    2 * Math.PI
  ); //-70, +32
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx + 50) * clScale,
    (cly + 40) * clScale,
    50 * clScale,
    0,
    2 * Math.PI
  ); //+50, +40
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx + 90) * clScale,
    (cly + 30) * clScale,
    35 * clScale,
    0,
    2 * Math.PI
  ); //+90, +30
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(clx * clScale, cly * clScale, 40 * clScale, 0, 2 * Math.PI); //origin is 400, 300
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx + 50) * clScale,
    (cly + 10) * clScale,
    38 * clScale,
    0,
    2 * Math.PI
  ); //+50, +10
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx - 50) * clScale,
    (cly + 5) * clScale,
    35 * clScale,
    0,
    2 * Math.PI
  ); //-50, +5
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx + 70) * clScale,
    (cly + 20) * clScale,
    30 * clScale,
    0,
    2 * Math.PI
  ); //+70, +20
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx - 75) * clScale,
    (cly + 25) * clScale,
    30 * clScale,
    0,
    2 * Math.PI
  ); //-75, +25
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx - 10) * clScale,
    (cly + 30) * clScale,
    50 * clScale,
    0,
    2 * Math.PI
  ); //-10, +30
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx - 45) * clScale,
    (cly + 30) * clScale,
    50 * clScale,
    0,
    2 * Math.PI
  ); //-45, +30
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx + 50) * clScale,
    (cly + 30) * clScale,
    50 * clScale,
    0,
    2 * Math.PI
  ); //+50, +30
  ctx.fill();

  ctx.beginPath();
  ctx.arc(
    (clx + 85) * clScale,
    (cly + 25) * clScale,
    35 * clScale,
    0,
    2 * Math.PI
  ); // +85, +25
  ctx.fill();
}

function getClLocationX() {
  let clx = +prompt("Enter a value from 0-800 for a cloud");
  return clx;
}
function getClLocationY() {
  let cly = +prompt("Enter a value from 0-600 for a cloud");
  return cly;
}
function getClScale() {
  let clscale = +prompt("Enter a value to scale for a cloud");
  return clscale;
}

function drawBuildingRow(x, y, c1, c2, scale) {
  //Sidewalk
  ctx.fillStyle = "rgb(72, 75, 84)";
  ctx.fillRect((x - 170) * scale, (y + 140) * scale, 510 * scale, 60 * scale);

  ctx.fillStyle = c1;
  //dark buldings
  ctx.fillRect((x - 160) * scale, (y + 20) * scale, 80 * scale, 170 * scale); //-160, +20
  ctx.fillRect(x * scale, y * scale, 90 * scale, 190 * scale); // origin 500, 410
  ctx.fillRect((x + 150) * scale, (y + 70) * scale, 120 * scale, 120 * scale); //+150, +70

  //Light Buildings
  ctx.fillStyle = c2;
  ctx.fillRect((x - 80) * scale, (y + 40) * scale, 80 * scale, 150 * scale); // -80, +40
  ctx.fillRect((x + 90) * scale, (y - 30) * scale, 60 * scale, 220 * scale); // +90, -30
  ctx.fillRect((x + 260) * scale, (y + 40) * scale, 70 * scale, 150 * scale); // +260, +40

  //Doors
  ctx.fillStyle = "rgb(45, 46, 69)";
  ctx.fillRect((x - 38) * scale, (y + 170) * scale, 10 * scale, 20 * scale); // -38, +170
  ctx.fillRect((x - 52) * scale, (y + 170) * scale, 10 * scale, 20 * scale); // -52, +170

  ctx.fillRect((x + 122) * scale, (y + 170) * scale, 10 * scale, 20 * scale); // +122, +170
  ctx.fillRect((x + 110) * scale, (y + 170) * scale, 10 * scale, 20 * scale); // +110, +170

  ctx.fillRect((x + 284) * scale, (y + 170) * scale, 10 * scale, 20 * scale); // +293, +170
  ctx.fillRect((x + 297) * scale, (y + 170) * scale, 10 * scale, 20 * scale); // +297, +170
}

function getLocationX() {
  let x = +prompt("Enter a value from 0-800 for a row of buildings");
  return x;
}
function getLocationY() {
  let y = +prompt("Enter a value from 0-600 for a row of buildings");
  return y;
}
function getColourOne() {
  let c1 = prompt(
    "Enter a colour name or rgb value for the first building colour, ex. rgb(56, 67, 89), red"
  );
  return c1;
}
function getColourTwo() {
  let c2 = prompt(
    "Enter a second colour or rgb value for the second building colour, ex. rgb(56, 67, 89), red"
  );
  return c2;
}
function getScale() {
  let scale = +prompt("Enter a value to scale for a row of buildings");
  return scale;
}
