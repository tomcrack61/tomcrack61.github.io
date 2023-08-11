class WonderballType{
  constructor(x, y, width, height, card, key ){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.card = card;
    this.key = key; //to get level
  }
}

// projectiles
function createProjectile(x,y,power,img, type, venom, store){
  if(type==straightpath){
    store.push(new StraightPathProjectile(x,y,power,img, venom));
  }
  else if(type==arcpath){
    store.push(new ArcPathProjectile(x,y,power,img, venom));
  }
  else if(type == randompath){
    store.push(new RandomPathProjectile(x,y,power,img, venomproj));
  }
  else if(type == penetratingproj){
    store.push(new PenetratingProjectile(x,y,power,img, venom));
  }
  else if(type == nutrientproj){
    store.push(new NutrientProjectile(x,y,power,img));
  }
  else if(type == timestopproj){
    store.push(new TimeStopProjectile(x,y,power,img, venom));
  }
  else if(type == teledirected){
    store.push(new TeleDirectedProjectile(x,y,power,img));
  }
  else if(type == bouncing){
    store.push(new BouncingProjectile(x,y,power,img));
  }
  else {
    store.push(new Projectile(x,y,power,img, venom));
  }
}

class Projectile{
  constructor(x,y, power, img, venom){
    this.x = x;
    this.y = y;
    this.originaly = y;
    this.width = 10;
    this.height = 10;
    this.power = power;
    this.speed = 5;
    this.speedy = 0;
    this.img = img;
    this.venom = venom;
    //if(this.img.length > 0) this.speedy = -1;
  }

  update(){
    this.x += this.speed;
    this.y += this.speedy;
  }

  attack(enemy){
    enemy.health -= this.power;
    if(this.venom){
      enemy.empoison(this.power, 10000);
    }
  }

  destroy(){
    return true;
  }

  getType(){
    return noType;
  }

  draw(){
    if(this.img.length == 0){
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
      ctx.fill();
    }else{
      ctx.drawImage(this.img[0], 0, 0, 100, 100, this.x, this.y-30, this.width*5, this.height*5 );
    }
  }

}

class BouncingProjectile extends Projectile{
  constructor(x,y, power, img, venom){
    super(x,y,power,img, venom);
  }

  update(){
    super.update();
  }
  destroy(){
    if(this.speedy == 0) this.speedy = -5;
    this.speedy *= -1;
    this.speed *= 1;
    return false;
  }

  getType(){
    return bouncing;
  }

  draw(){
    super.draw();
  }
}

class TeleDirectedProjectile extends Projectile{
  constructor(x,y, power, img, venom){
    super(x,y,power,img, venom);
    this.target = enemies[enemies.length-1]
  }

  update(){
    this.speedy = 0.05*( this.target.y - this.y);
    this.speedx = 0.05*( this.target.x - this.x);
    super.update();
  }
  destroy(){
    return true;
  }

  getType(){
    return teledirected;
  }

  draw(){
    super.draw();
  }
}

class ArcPathProjectile extends Projectile{
  constructor(x,y, power, img, venom){
    super(x,y,power,img, venom);
    this.speed = 5;
    this.speedy = -0.5;
  }

  update(){
    super.update();
    if (this.originaly-this.y > 30) this.speedy *= -1;
    if (this.y == this.originaly) this.speedy = 0;
  }
  destroy(){
    return true;
  }

  getType(){
    return arcpath;
  }

  draw(){
    super.draw();
  }
}

class StraightPathProjectile extends Projectile{
  constructor(x,y, power, img, venom){
    super(x,y,power,img, venom);
  }

  update(){
    super.update();
  }
  destroy(){
    return true;
  }
  getType(){
    return straightpath;
  }

  draw(){
    super.draw();
  }
}

class RandomPathProjectile extends Projectile{
  constructor(x,y, power, img, venom){
    super(x,y,power,img, venom);
  }
  update(){
    let xRandom = Math.random() * (1 - (-1)) - 1;
    this.x += xRandom*this.speed;
    let yRandom = Math.random() * (1 - (-1)) - 1;
    this.y += yRandom * this.speedy;
  }
  getType(){
    return randompath;
  }
}

class PenetratingProjectile extends StraightPathProjectile{
  constructor(x,y, power, img, venom){
    super(x,y,power,img, venom);
    this.speed = 10;
    this.speedy = 0;
  }
  update(){
    super.update();
  }
  destroy(){
    this.x = this.x + 100;
    return false;
  }
  getType(){
    return penetratingproj;
  }
}

class TimeStopProjectile extends StraightPathProjectile{
  constructor(x,y, power, img, venom){
    super(x,y,power,img, venom);
    this.speedy = 0;
    this.speed = 1;
    this.count = 0;
    this.destroyNow = false;
  }

  attack(enemy){
    this.speed = -0.01;
    if(this.count == 0){
      enemy.movement = 0.1;
      super.attack(enemy);
      if(enemy.health <= 0){
        this.destroyNow = true;
      }
    }else if (this.count >123){
      enemy.movement = enemy.speed;
    }
  }

  update(){
    super.update();
  }
  destroy(){
    if(this.count++ <= 125 && !this.destroyNow){
      return false;
    }else{
      return true;
    }
  }

  getType(){
    return timestopproj;
  }

  draw(){
    super.draw();
  }
}


class NutrientProjectile extends Projectile{
  constructor(x,y, power, img){
    super(x,y,power,img, false);
    this.speed = 3;
    this.speedy = -0.25;
  }
  update(){
    super.update();
  }
  destroy(){
    super.destroy();
  }
  getType(){
    return nutrientproj;
  }
}


class ManualShootObjective{
  constructor(power, img, owner){
    this.x = mouse.x;
    this.y = mouse.y;
    this.height=20;
    this.width=20;
    this.power = power;
    this.img = img;
    this.owner = owner;
  }
  update(){
    this.x = mouse.x;
    this.y = mouse.y;
  }
  attack(enemy){
      enemy.health-=this.power;
   }

  destroy(){
    this.owner.projectileDestroyed();
    return true;
  }

  getType(){
    return noType;
  }

  draw(){
    if(this.img.length == 0){
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
      ctx.fill();
    }else{
      ctx.drawImage(this.img[0], 0, 0, 340, 367, this.x, this.y-30, this.width*5, this.height*5 );
    }
  }
}

function createWonderball(type, gridPositionX, gridPositionY){
  if (type == producer) return new ProducerWonderball(gridPositionX, gridPositionY);
  else if ( type==timedshoot) return new TimedShootWonderball(gridPositionX, gridPositionY);
  else if ( type == distanceshoot) return new DistanceWonderball(gridPositionX, gridPositionY);
  else if ( type == contactshoot) return new ContactWonderball(gridPositionX, gridPositionY);
  else if ( type == general) return new DoudisGeneral(gridPositionX, gridPositionY);
  else if ( type == manualshoot) return new ManualAttackWonderball(gridPositionX, gridPositionY);
  else if (type == teamwork) return new TeamworkWonderball(gridPositionX, gridPositionY, true);
  else if (type == trap) return new TrapWonderball(gridPositionX, gridPositionY);
  else if (type == instant) return new InstantWonderball(gridPositionX, gridPositionY);
  else if (type == jetix) return new JetixWonderball(gridPositionX, gridPositionY);
  else if (type == multiattack) return new MultiAttackWonderball(gridPositionX, gridPositionY);
  else if (type == lucina) return new LucinaWonderball(gridPositionX, gridPositionY);
  else return new Wonderball(gridPositionX, gridPositionY);
}


// Wonderballs
class Wonderball{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = cellSize - cellGap *2;
    this.height = cellSize - cellGap *2;
    this.shooting = false;
    //check level
    this.key = cards[choosenDefender].key;
    this.level = Number(localStorage[key]);
    console.log("level"+this.level)

    //set up wonderball
    this.health = cards[choosenDefender].card.health;
    this.maxDefense = cards[choosenDefender].card.defense;
    this.defense = cards[choosenDefender].card.defense;
    this.shooting = false;

    this.spriteWidth = 340;
    this.spriteHeight = 367;

    this.img = cards[choosenDefender].card.img;

    this.wonderballType = cards[choosenDefender].card.img;
    this.frameX = 0;

    this.shootingFrames = cards[choosenDefender].card.shootingFrames;
    this.restingFrames = cards[choosenDefender].card.restingFrames;

    this.minFrame = 0;
    this.maxFrame = this.shootingFrames+this.restingFrames;

    this.maxPower = cards[choosenDefender].card.power*this.level;
    this.power = cards[choosenDefender].card.power*this.level;

    this.venom = 'venom' in cards[choosenDefender].card;
  }

  draw(){
    ctx.fillStyle = 'white';
    ctx.fillStyle='gold';
    ctx.font = '20px Orbitron';
    ctx.fillText(Math.floor(this.health), this.x+15, this.y+30);
    ctx.drawImage(this.wonderballType, this.frameX*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }

  doSpecial(){

  }

  enemyOnRow(onRow){

  }

  enemyAttacking(attack, health){
    this.health -= attack;
  }

  update(){
    if(frame % 10 == 0 ){
      if(this.frameX < this.maxFrame-1 ) this.frameX++;
      else this.frameX = this.minFrame;
    }


  }
}

class TrapWonderball extends Wonderball{
  constructor(x,y){
    super(x,y);
    this.timer = 500;
    this.animation = 0;
    this.rechargeFrames = cards[choosenDefender].card.rechargeFrames;
    this.defeatedEnemies = 0;
  }
  draw(){
    super.draw();
  }

  enemyAttacking(attack, health){
    this.defeatedEnemies++;
    if(this.defeatedEnemies % 3 == 0){
      return false;
    }else {
      return true;
    }
  }

  update(){
    if(this.animation < this.restingFrames){
      if(frame % 120 == 0){
        this.animation+=2;
      }
      this.minFrame = this.animation;
      this.maxFrame = this.animation+1;
    }else{
      this.minFrame = this.restingFrames;
      this.maxFrame = this.restingFrames + this.rechargeFrames;
    }


    super.update();

  }
}

class ProducerWonderball extends Wonderball{
  constructor(x,y){
    super(x,y);
    this.timer = 500;
    this.maxProduce = cards[choosenDefender].card.power;
    this.produce = cards[choosenDefender].card.power;
    this.life = 0;
    this.product_img = cards[choosenDefender].card.product_img;
  }
  draw(){
    super.draw();
  }

  doSpecial(){
    super.doSpecial();
    resources.push(new Resource(this.x+15, this.y+15, this.produce, this.product_img));
    resources.push(new Resource(this.x+15, this.y+15, this.produce, this.product_img));
    resources.push(new Resource(this.x+15, this.y+15, this.produce, this.product_img));
  }

  update(){
    super.update();

    if(powerUps[1].active){
      this.produce = this.maxProduce + 20;
    }else{
      this.produce = this.maxProduce;
    }

    if(this.life% this.timer == 0){
      resources.push(new Resource(this.x+15, this.y+15, this.produce, this.product_img));
    }
    this.life++;
  }
}

class AttackerWonderball extends Wonderball{
  constructor(x,y){
    super(x,y);
    this.shooting = false;
    this.shootNow = false;
    this.shootFrame = cards[choosenDefender].card.shootFrame;
    this.projectiles = [];
    if(cards[choosenDefender].card.projectile_img != null){
      this.projectiles.push(cards[choosenDefender].card.projectile_img);
    }
    this.type = cards[choosenDefender].card.type;
    if('specialimg' in cards[choosenDefender].card)
      this.specialimg = cards[choosenDefender].card.specialimg;
    if('specialframes' in cards[choosenDefender].card)
        this.specialframes = cards[choosenDefender].card.specialframes;
    this.special = 0;
  }
  draw(){
    super.draw();
  }

  doSpecial(){
    super.doSpecial();
    this.special = 100;
  }

  enemyOnRow(onRow){

  }

  enemyAttacking(attack, health){
    this.health -= attack;
  }

  update(){
    super.update();
    if(this.special > 0){
      if(this.specialimg){
        this.wonderballType = this.specialimg;
        this.minFrame = 0;
        this.maxFrame = this.specialframes;
      }
      this.shooting = true;
      this.shootNow = true;
      if(--this.special == 0){
        this.wonderballType = this.img;
      }

    }else{
      if(this.shooting){
        this.minFrame = this.restingFrames;
        this.maxFrame = this.restingFrames + this.shootingFrames;
      }else{
        this.minFrame = 0;
        this.maxFrame = this.restingFrames;
      }

      if(powerUps[1].active){
        this.defense = this.maxDefense +this.maxDefense*2;
        this.power = this.maxPower + this.maxPower * 0.2;
      }else{
        this.defense = this.maxDefense;
        this.power = this.maxPower;
      }

      if(frame%10 == 0 && this.frameX == this.shootFrame) this.shootNow = true;
    }
  }
}

class ManualAttackWonderball extends AttackerWonderball{
  constructor(x,y){
    super(x,y);
    this.chargingTime = 0;
    this.charging = false;
    this.resting = true;
    this.shooting = false;
  }

  enemyAttacking(attack, health){
    super.enemyAttacking(attack);
    this.shooting = true;
  }

  projectileDestroyed(){
    this.shooting = false;
    this.charging = true;
  }

  update(){
    super.update();

    if(collision(mouse, this) && this.resting && mouse.clicked){
      projectiles.push(new ManualShootObjective(this.power, this.projectiles, this));
      this.shooting = true;
      this.resting = false;
      this.minFrame = 2;
      this.maxFrame = 3;
    }

    if(this.charging){
      this.minFrame = 1;
      this.maxFrame = 2;
      this.chargingTime++;
      if(this.chargingTime==100){
        this.resting = true;
        this.charging = false;
        this.chargingTime = 0;
      }
    }

    if(this.resting){
      this.minFrame=0;
      this.maxFrame=1;
    }
  }

}



class DistanceWonderball extends AttackerWonderball{
  constructor(x,y){
    super(x,y);
    this.projectileType = cards[choosenDefender].card.projectile_type;
  }

  enemyOnRow(onRow){
    if(this.shooting == false && onRow){
      this.frameX = this.restingFrames;
      this.shooting = true;
    }
    if(!onRow){
      this.shooting = false;
    }
  }

  enemyAttacking(attack, health){
    super.enemyAttacking(attack);
    if(this.shooting = false){
      this.frameX = this.restingFrames;
      this.shooting = true;
    }
  }

  update(){
    super.update();



    if (this.shooting && this.shootNow){

      if (this.power<20) {
        createProjectile(this.x + 70, this.y + 30, this.power, this.projectiles,this.projectileType, this.venom, projectiles);
        createProjectile(this.x + 70, this.y + 30, this.power, this.projectiles,this.projectileType, this.venom, projectiles);
    }

        let prob = Math.random();
        let th = 10/this.power;
        let powerprob = randn_bm(0,1, th);
        if(this.projectileType == timestopproj){
          th = 0.1;
        }
        if(powerprob < prob) {
          if(this.projectileType==nutrientproj){
            createProjectile(this.x + cellSize+10, this.y + 30, this.power, this.projectiles,this.projectileType, false, nutrients);
          }else{
            createProjectile(this.x + 70, this.y + 30, this.power, this.projectiles,this.projectileType,this.venom, projectiles);
          }
          this.shooting = false;
          this.frameX = 1;
        }
        this.shootNow = false;
    }
  }
}

class SupportWonderball extends DistanceWonderball{
  draw(){
    ctx.fillStyle='gold';
    ctx.font = '20px Orbitron';
    ctx.fillText(Math.floor(this.health), this.x+15, this.y+30);
    ctx.drawImage(this.wonderballType, this.frameX*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
}

class ContactWonderball extends AttackerWonderball{
  constructor(x,y){
    super(x,y);
  }

  enemyOnRow(onRow){

  }

  enemyAttacking(attack, health){
    super.enemyAttacking(attack);
    this.shooting = true;
  }

  update(){
    super.update();
    if(this.shooting){
      this.shooting = false;
    }
  }
}

class MultiAttackWonderball extends AttackerWonderball{
  constructor(x,y){
    super(x,y);
    this.projectileType = cards[choosenDefender].card.projectile_type;
    this.number_projectiles = cards[choosenDefender].card.number_projectiles;
    this.projectile_types=[];
    this.projectile_types.push(this.projectileType);
    this.projectile_images = [];
    this.projectile_images.push(this.projectiles);
    for(let i = 1; i < this.number_projectiles; i++){
      let name = "projectile_type_" + i;
      this.projectile_types.push(cards[choosenDefender].card[name]);
      name = "projectile_img_" + i;
      let image = [];
      image.push(cards[choosenDefender].card[name]);
      this.projectile_images.push(image);
    }
    this.currentProjectile = 0;
    this.projectileType = this.projectile_types[this.currentProjectile];
  }

  enemyOnRow(onRow){
    this.shooting = true;
  }

  enemyAttacking(attack, health){
    super.enemyAttacking(attack);
    this.shooting = true;
  }

  update(){
    super.update();

    if (this.shooting && this.shootNow){
        let prob = Math.random();
        let th = this.power/100;
        let powerprob = randn_bm(0,1, th);
        if(this.projectileType == timestopproj){
          th = 0.1;
        }
        if(powerprob < prob) {
          if(this.projectileType==nutrientproj){
            createProjectile(this.x + cellSize+10, this.y + 30, this.power, this.projectiles,this.projectileType, false, nutrients);
          }else{
            createProjectile(this.x + 70, this.y + 30, this.power, this.projectiles,this.projectileType, this.venom, projectiles);
          }
          this.currentProjectile = Math.floor(Math.random() * this.number_projectiles);
          this.projectileType = this.projectile_types[this.currentProjectile];
          this.projectiles = this.projectile_images[this.currentProjectile];
        }
        this.shootNow = false;
    }
  }

}

class DoudisGeneral extends ContactWonderball{
  constructor(x,y){
    super(x,y);
    this.defeatedEnemies = 0;
    this.origX = x;
    this.origY = y;
  }

  enemyAttacking(attack, health){
    super.enemyAttacking(attack, health);
    if(health - this.defense <= 0){
      this.defeatedEnemies += 1;
      this.defense *= 1.05;
      this.health += 15;
      this.height += cellSize/2;
      this.width += cellSize/2;
      this.x -= cellSize/4;
      this.y -= cellSize/4;
    }
  }

  draw(){
    ctx.fillStyle='gold';
    ctx.font = '20px Orbitron';
    ctx.fillText(Math.floor(this.health), this.origX+15, this.origY+30);
    ctx.drawImage(this.wonderballType, this.frameX*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.origX, this.origY, cellSize - cellGap *2, cellSize - cellGap *2);
  }
}

class TimedShootWonderball extends AttackerWonderball{
  constructor(x,y){
    super(x,y);
  }

  enemyOnRow(onRow){
    this.shooting = onRow;
  }

  update(){
    super.update();

    if(this.shooting && !this.shootNow){
      this.minFrame = 1;
      this.maxFrame = 1;
      this.shootNow = true;
    }
    else if(this.shootNow){
      this.minFrame = 2;
      this.maxFrame = this.shootingFrames;
      this.shootTimer ++;
    }
    if(this.shootNow && this.shootTimer == 10){
      this.shootNow = false;
      this.shootTimer = 0;
      this.minFrame = 0;
      this.maxFrame = this.restingFrames;
    }
  }
}

class InstantWonderball extends Wonderball{
  constructor(x,y){
    super(x,y);
    this.timer = 500;
    this.animation = 0;
    this.defeatedEnemies = 0;
    this.origx = this.x;
    this.origy = this.y;
    this.origwidth = this.width;
    this.origheight = this.height;
  }

  draw(){
    super.draw();
  }

  enemyAttacking(attack, health){
    super.enemyAttacking(attack,health);
  }

  update(){
    super.update();

    if(this.timer == 0){
      this.health = 0;
    }

    if(this.shootNow){
      this.frameX = this.shootFrame;
      this.minFrame = this.shootFrame;
      this.maxFrame = this.shootFrame;
      this.x = this.origx-3*cellSize;
      this.y = this.origy-3*cellSize;
      this.height = 6*cellSize;
      this.width = 6*cellSize;
      this.timer = 0;
    }else if(this.animation < this.restingFrames && !this.shootNow){
      if(frame % 120 == 0){
        this.animation+=1;
      }
      this.minFrame = this.animation;
      this.maxFrame = this.animation+1;
    }else{
      this.minFrame = this.restingFrames;
      this.maxFrame = this.restingFrames + this.shootingFrames;
      this.shootNow = true;
    }
  }

}

class TeamworkWonderball extends DistanceWonderball{
  constructor(x,y, shoot){
    super(x,y);
    this.type_selected = choosenDefender;
    this.wonderballShoot = shoot;
  }

  enemyOnRow(onRow){
    this.shooting = true;
  }

  enemyAttacking(attack, health){
    super.enemyAttacking(attack);
    this.shooting = true;
  }

  update(){
    super.update();

      if(this.wonderballShoot == true){
        let selected = choosenDefender;
        choosenDefender = this.type_selected;
        wonderballs.push(new TeamworkWonderball(this.x+3*cellSize, this.y, false));
        choosenDefender = selected;
        this.wonderballShoot = false;
      }
  }
}
class JetixWonderball extends Wonderball {
  constructor(x,y) {
    super(x,y);
    this.state=1;
    this.speed = 3;

    //projectile
    this.shooting = false;
    this.shootNow = false;
    this.shootFrame = cards[choosenDefender].card.shootFrame;
    this.projectiles = [];
    if(cards[choosenDefender].card.projectile_img != null){
      this.projectiles.push(cards[choosenDefender].card.projectile_img);
    }
    this.type = cards[choosenDefender].card.type;

    //Transformations
    this.t0img = cards[choosenDefender].card.img;
    this.t0shootingFrames = cards[choosenDefender].card.shootingFrames;
    this.t0restingFrames = cards[choosenDefender].card.restingFrames;
    this.t0shootFrame = cards[choosenDefender].card.shootFrame;

    this.t1img = cards[choosenDefender].card.imgv;
    this.t1shootingFrames = cards[choosenDefender].card.shootingFramesv;
    this.t1restingFrames = cards[choosenDefender].card.restingFramesv;
    this.t1shootFrame = cards[choosenDefender].card.shootFramev;

    this.t2img = cards[choosenDefender].card.imgc;
    this.t2shootingFrames = cards[choosenDefender].card.shootingFramesc;
    this.t2restingFrames = cards[choosenDefender].card.restingFramesc;
    this.t2shootFrame = cards[choosenDefender].card.shootFramec;

  }

  enemyOnRow(onRow){
    this.shooting = true;
  }

  enemyAttacking(attack, health){
    super.enemyAttacking(attack);
    if(this.state ==1){
      this.state = 2;
      this.shooting = true;
      this.wonderballType = this.t1img;
      this.shootingFrames = this.t1shootingFrames;
      this.restingFrames = this.t1restingFrames;
      this.shootFrame = this.t1shootFrame;
    }

    if(this.health < 50){
      if(this.state != 3){
        this.state = 3;
        this.health = 350;
        this.wonderballType = this.t2img;
        this.shootingFrames = this.t2shootingFrames;
        this.restingFrames = this.t2restingFrames;
        this.shootFrame = this.t2shootFrame;
        this.frameX = this.shootFrame;
        this.venom = true;
        this.defense = 5000;
      }
    }
  }

  update() {
    super.update();
    if(this.state == 3){
      this.x = this.x+this.speed;
      if(this.x > canvas.width || this.x < 0){
        this.health = 0;
      }
    }
    if (this.state==1 || this.state ==3) {
      if(powerUps[1].active){
        this.defense = this.maxDefense +this.maxDefense*2;
        this.power = this.maxPower + this.maxPower * 0.2;
      }else{
        this.defense = this.maxDefense;
        this.power = this.maxPower;
      }

      if(frame%10 == 0 && this.frameX == this.shootFrame){
        createProjectile(this.x + 70, this.y + 30, this.power, this.projectiles,this.projectileType, false, projectiles);
      }
    }
    else if(this.state == 2){
      this.shooting = false;
    }
  }
}
