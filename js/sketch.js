let myShipImage,
  laser,
  laserImage,
  laserSound,
  menuMusic,
  myShip,
  myExhaust1,
  shipY,
  shipX,
  axisX,
  axisY,
  shipAxisPoint;

let angle = 90;
let radius = 70;
let gameStarted = false;
let lasers = [];
let myExhausts = [
  "images/myShip/Exhaust/image1.png",
  "images/myShip/Exhaust/image2.png",
  "images/myShip/Exhaust/image3.png",
  "images/myShip/Exhaust/image4.png"
];

function preload() {
  myShipImage = loadImage("images/myShip/ship.png");
  laserImage = loadImage("images/laser.png");
  laserSound = loadSound("sounds/laser.mp3");
  menuMusic = loadSound("sounds/menuMusic.ogg")
  myExhausts = myExhausts.map(img => loadImage(img));
}

function setup() {
  angleMode(DEGREES);
  imageMode(CENTER);
  masterVolume(0.4)
  createCanvas(windowWidth, windowHeight);
  shipY = height - 300;
  shipX = width / 2;
  axisX = shipX;
  axisY = shipY + radius / 2;

  shipAxisPoint = createVector(shipX - radius, shipY);
  //  menuMusic.play()
  myShip = new Ship(shipX, shipY, radius, radius, 0, shipAxisPoint);
}

function draw() {
  clear();

  lasers.forEach(laser => {
    laser.shoot();

  })

 

  myShip.show();
  if (gameStarted) {
    myShip.startPosition();
    // menuMusic.pause();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  myShip = new Ship(shipX, shipY, radius, radius, 0, shipAxisPoint);
}

function startGame() {
  gameStarted = true;
  btn.style.display = "none";
  title.style.display = "none";
}

function mousePressed() {
  if (gameStarted) {
    laserSound.play()
    let laser = new Laser(axisX, height - 100);
    lasers.push(laser);
  }
  
}

// const rotator = () => {
//   // let rad = mouseX
//   let x = 900;
//   let y = 100;
//   let x1 = axisX;

//   point(x, y);
//   let top = dist(x1, y, x, y);
//   let right = dist(axisX, axisY, x, y);
//   let left = dist(axisX, axisY, x1, y);

//   let r = left + right - top;

//   // console.log(r)

//   point(x1, y);

//   // console.log(left)

//   stroke(255, 0, 140);
//   strokeWeight(10);

//   //  myShip.rotate(r)
// };
