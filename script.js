//smt
let y = 0;
let img;
let sound;
let angle = 0;
let sOrange = color('orange');
let sYellow = color('yellow');
let sColor;

async function setup() {
  createCanvas(900, 900);
  background(0, 0, 0);
  img = await loadImage('media/oia-uia.gif');
  sound = await loadSound('media/lobotomy-sound-effect.mp3');
  
}

function draw() {
  background(0, 0, 0);
  fill(sColor);
  ellipse(520, 400, 350, 350);
  translate(520, 400);
  rotate(angle);
  image(img, 200, -50, 100, 100);
  angle += 0.1;
}

//headset warning
function mousePressed() {
  sound.play();
}