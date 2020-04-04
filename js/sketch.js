let myShipImage,
  laser,
  font,
  laserImage,
  laserSound,
  menuMusic,
  myShip,
  myExhaust1,
  shipY,
  shipX,
  axisX,
  axisY,
  shipAxisPoint,
  currentWord,
  wrongLetterSound

let enemyShips = [];
let words = [];
let wave = 1;
let type = "words";
let currentList = [];

let angle = 90;
let radius = 70;
let gameStarted = false;
let lasers = [];
let rotation = 0;
let myExhausts = [
  "images/myShip/Exhaust/image1.png",
  "images/myShip/Exhaust/image2.png",
  "images/myShip/Exhaust/image3.png",
  "images/myShip/Exhaust/image4.png",
];

function preload() {
  myShipImage = loadImage("images/myShip/ship.png");
  enemyShipImage = loadImage("images/enemyShips/Ship2.png");
  myExhausts = myExhausts.map((img) => loadImage(img));
  laserImage = loadImage("images/laser.png");
  laserSound = loadSound("sounds/laser.mp3");
  wrongLetterSound = loadSound("sounds/click.mp3");
  menuMusic = loadSound("sounds/menuMusic.ogg");
  font = loadFont("fonts/Baloo_Chettan_2/BalooChettan2-Medium.ttf");
}

function setup() {
  angleMode(DEGREES);
  imageMode(CENTER);
  masterVolume(0.4);
  createCanvas(windowWidth, windowHeight);
  shipY = height - 300;
  shipX = width / 2;
  axisX = shipX;
  axisY = shipY + radius / 2;

  shipAxisPoint = createVector(shipX - radius, shipY);
  //  menuMusic.play()
  myShip = new Ship(shipX, shipY, radius, radius, shipAxisPoint);
}

function draw() {
  clear();

  lasers.forEach((laser) => {
    laser.update();
    laser.shoot();
    // laser.rotate(rotation)
  });

  //  myShip.rotate(rotation)

  myShip.show();
  myShip.turn();
  if (gameStarted) {
    myShip.startPosition();

    enemyShips.forEach((ship) => {
      ship.show();
      ship.fall();
    });

    words.forEach((word) => {
      word.show();
      word.fall();
    });
    
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
  loadWave()
}

function mousePressed() {
 
}

function shootLaser() {
  if (gameStarted) {
    laserSound.play();
    let laser = new Laser(myShip.pos, myShip.heading);
    lasers.push(laser);
    
  }
}

function keyReleased() {
  myShip.setRotation(0);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    myShip.setRotation(-1);
  }
  if (keyCode === RIGHT_ARROW) {
    myShip.setRotation(1);
  }

  currentList.forEach((word, i) => {
    let firstLetter = word[0];
    if (key === firstLetter && !currentWord) {
      
      currentWord = words[i];
    }
  });

  if (currentWord) {
    wordRemover(currentWord, key);
  }
}

function empty() {

}

function wordRemover(word, key) {
  word.fontColor = color(39, 224, 64);
  word.background = color(0, 0, 0, 200);

  if (key === word.word[0]) {
    shootLaser()
    word.word = word.word.slice(1);
  }else{
    wrongLetterSound.play()
  }
  if (word.word.length < 1) {
    currentWord = null;
    return;
  }
}

function loadWave() {

  console.log(wave)
  
    let wordAmount = 3 + wave;
    words = [];
    enemyShips = [];

    currentList = randomWords(type);

    for (let i = 0; i < wordAmount; i++) {
      let x = random(20, width - 20);
      let y = random(-400, 0);
      let ship = new EnemyShip(x, y, i);
      let word = new Word(ship.pos, currentList[i], ship.speed, i);
      words.push(word);
      enemyShips.push(ship);
    }
    wave++;
  
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

// const fetchWords = async () => {
//   const url = ''
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)

// }
