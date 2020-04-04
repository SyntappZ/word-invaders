class Word {
  constructor(pos, word, speed, id) {
    this.id = id;
    this.padding = 15
    this.x = pos.x;
    this.y = pos.y - (this.padding + 40);
    this.word = word;
    this.speed = speed;
    this.background = color(10, 48, 40 , 150);
    this.fontColor = 255
    this.fontSize = 16
    this.radius = 2;
  }

  show() {
    let box = font.textBounds(this.word, this.x, this.y, this.fontSize);
    
    fill(this.background)
    noStroke();
    rect(box.x, box.y, box.w + this.padding + 10, box.h + this.padding, this.radius);
    fill(this.fontColor);
    noStroke();

    textFont(font);
    textSize(this.fontSize);
    textAlign(CENTER, CENTER)
    text(this.word, this.x + (this.padding + 10) /2, this.y + this.padding /2);
    
  }
  fall() {
    this.y += this.speed;
  
  }
}
