let myShipImage,
  laser,
  font,
  laserImage,
  laserSound,
  menuMusic,
  myShip,
  myExhaust1,
  currentWord,
  currentShipTarget,
  wrongLetterSound;

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
let enemyExplosion = [
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_000.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_004.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_005.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_008.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_009.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_010.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_013.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_014.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_015.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_016.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_019.png",
  "images/enemyShips/Ship2_Explosion/Ship2_Explosion_021.png",
];

let hitExplosion = [
  "images/enemyShips/hitExplosion/shot4_exp2.png",
  "images/enemyShips/hitExplosion/shot4_exp3.png",
  "images/enemyShips/hitExplosion/shot4_exp4.png",
  "images/enemyShips/hitExplosion/shot4_exp5.png",
  "images/enemyShips/hitExplosion/shot4_exp6.png",
  "images/enemyShips/hitExplosion/shot4_exp7.png",
  "images/enemyShips/hitExplosion/shot4_exp8.png",
];

function preload() {
  myShipImage = loadImage("images/myShip/ship.png");
  enemyShipImage = loadImage("images/enemyShips/Ship2.png");
  myExhausts = myExhausts.map((img) => loadImage(img));
  enemyExplosion = enemyExplosion.map((img) => loadImage(img));
  hitExplosion = hitExplosion.map((img) => loadImage(img));
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
  myShip = new Ship(width / 2, height - 300, radius, radius);

  //  menuMusic.play()
}

function draw() {
  clear();

  lasers.forEach((laser) => {
    laser.show();

    laser.shoot(currentShipTarget);
    // myShip.turn(laser.angle);
  });

  //  myShip.rotate(rotation)

  myShip.show();

  if (gameStarted) {
    myShip.startPosition();

    enemyShips.forEach((ship) => {
      ship.show();
      ship.fall();
      ship.collisionDetection(lasers);
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
  loadWave();
}

function mousePressed() {}

function shootLaser() {
  if (gameStarted) {
    laserSound.play();
    let laser = new Laser(myShip.pos);
    lasers.push(laser);
  }
}

function keyPressed() {
  currentList.forEach((word, i) => {
    let firstLetter = word[0];
    if (key === firstLetter && !currentWord) {
      currentWord = words[i];
      currentShipTarget = enemyShips[i].pos;
    }
  });

  if (currentWord) {
    wordRemover(currentWord, key);
  }
}

function empty() {}

function wordRemover(word, key) {
  word.fontColor = color(39, 224, 64);
  word.background = color(0, 0, 0, 200);

  if (key === word.word[0]) {
    shootLaser();
    word.word = word.word.slice(1);
  } else {
    wrongLetterSound.play();
  }
  if (word.word.length < 1) {
    currentWord = null;
    return;
  }
}

function loadWave() {
  let wordAmount = 3 + wave;
  words = [];
  enemyShips = [];

  currentList = randomWords(type);

  for (let i = 0; i < wordAmount; i++) {
    let ship = new EnemyShip(i);
    let word = new Word(ship.pos, currentList[i], ship.speed, i);
    words.push(word);
    enemyShips.push(ship);
  }
  wave++;
}

function collisionDetection(arr) {
  if (currentShipTarget) {
    // arr.forEach((laser, i) => {
    //   let dist = currentShipTarget.dist(laser.pos);
    //   if (dist < 5) {
    //     arr.splice(i, 1);
    //   }
    //   laserHit()
    // });
  }
}

// function laserHit() {
//   let i = 0, animationSpeed = 0.1
//     let index = floor(i) % hitExplosion.length;

//     image(hitExplosion[index], currentShipTarget.x, currentShipTarget.y, 80, 80);

//     i += animationSpeed;

// }

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
