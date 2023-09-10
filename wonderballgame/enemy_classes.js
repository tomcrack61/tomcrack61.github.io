class Enemy{
  constructor(verticalPosition, enemyType){
    this.x = canvas.width;
    this.y = verticalPosition;
    this.width = cellSize - cellGap*2;
    this.height = cellSize - cellGap*2;
    this.img = enemyType.img;
    this.speed = Math.random() * enemyType.speedFactor + 0.4;
    this.movement = this.speed;
    this.health = enemyType.maxHealth*enemiesPowerBoost;
    this.maxHealth = enemyType.maxHealth;
    this.attack = this.health / 500;
    this.venom = 0;
    this.venomTimer = 0;

    this.frameX = 0;
    this.minFrame = 0;
    this.maxFrames = enemyType.framesStart;
    this.spriteWidth = 340;
    this.spriteHeight = 367;

    this.card = enemyType;
  }
  update(){
    this.x -= this.movement;

    if(frame % 10 == 0){
      this.frameX++;
      if(this.frameX >= this.maxFrames) this.frameX = 0;
      this.health -= this.venom;
    }

    if(this.health <= 0.7*this.maxHealth){
      this.minFrame = this.card.frameBadHealth;
      this.maxFrames = this.minFrame+this.card.framesBadHealth;
      this.frameX = this.minFrame;
    }
  }
  draw(){
    ctx.fillStyle='gold';
    ctx.font = '20px Orbitron';
    ctx.fillText(Math.floor(this.health), this.x+15, this.y+30);
    ctx.drawImage(this.img, this.frameX*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    if(this.venom > 0){
      ctx.drawImage(venomEffectImg, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
  }

  empoison(venom, timer){
    this.venom = venom;
    this.venomTimer = timer;
  }

  wonderballAttacking(defense, health){
    this.health -= defense;
    if((health - this.attack) > 0){
      this.movement = 0;
    }else{
      this.movement = this.speed;
    }
  }
}
