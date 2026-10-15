//smt
let x = 0;
let y = 200;
let img;
let sound;
let angle = 0;
let cTrans = 0;
let sOrange;
let sYellow;
let sColor;

async function setup() {
  createCanvas(900, 900);
  sOrange = color('orange');
  sYellow = color('yellow');
  background(0, 0, 0);
  img = await loadImage('media/oia-uia.gif');
  sound = await loadSound('media/lobotomy-sound-effect.mp3');
  
}

function draw() {
  background(0, 0, 0);
  fill('gray');
  rect(x, y, 100, 50);
  fill('purple');
  //the 20 at the end rounds the square out
  square(20, y, 55, 20);
  x += 2;
  if (x > width) {
    x = 0;
  }
  y += 2;
  if (y > height) {
    y = 0;
  }
  //First color orange, second is yellow and cTrans is the overall transformation between both of the colors
  sColor = lerpColor(sOrange, sYellow, cTrans);
  //changes the gradient towards the other color
  cTrans = cTrans + 0.02;
  //resets the color back to orange because its goes from 0 to 1, 0 being orange and 1 being yellow
  if (cTrans > 1) {
    cTrans = 0;
  }
  fill(sColor);
  ellipse(520, 400, 350, 350);
  //translate at where the ellipse is positioned at to anchor it
  translate(520, 400);
  //Rotates the object around anchor at an angle
  rotate(angle);
  image(img, 200, -50, 100, 100);
  angle += 0.1;

}

//headset warning
function mousePressed() {
  sound.play();
}