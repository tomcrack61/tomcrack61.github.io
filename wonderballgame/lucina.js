const luzselectionImg = new Image();
luzselectionImg.src = 'wonderballs/luz selection.png';

const wonderballluzneutral = new Image();
wonderballluzneutral.src = 'wonderballs/luz neutral.png';
wonderballTypes.push(wonderballluzneutral);

const wonderballluzproy = new Image();
wonderballluzproy.src = 'wonderballs/luzproy.png';

const neutral = 1;
const agachada = 2;
const especial = 3;
const hurting = 4;
const descending = 5;
const landing = 6;

const luzcard = {
  img: wonderballluzneutral,
  cost: 50,
  defense: 5.0,
  power: 45,
  health: 10000,
  type: lucina,
  projectile_img :  wonderballluzproy,
  projectile_type: straightpath,
  shootingFrames : 0,
  restingFrames : 6,
  shootFrame : 1
}
allTypes.push(luzcard);

const luzagachada = new Image();
luzagachada.src = 'wonderballs/luzagachada.png';

const luzdescending = new Image();
luzdescending.src = 'wonderballs/luz descending.png';

const luzlanding = new Image();
luzlanding.src = 'wonderballs/luz landing.png';

const luzhurting = new Image();
luzhurting.src = 'wonderballs/luz hurting.png';

const luzespecial = new Image();
luzespecial.src = 'wonderballs/luzespecial.png';

class LucinaWonderball extends Wonderball {
  constructor(x,y) {
    super(x,y);
    this.state=1;
    this.speed = 3;
    this.hurtingCount = 0;
    this.special = 0;

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
    this.neutralimg = cards[choosenDefender].card.img;
    this.neutralshootingFrames = cards[choosenDefender].card.shootingFrames;
    this.neutralrestingFrames = cards[choosenDefender].card.restingFrames;
    this.neutralshootFrame = cards[choosenDefender].card.shootFrame;



    this.especialimg = luzespecial;
    this.especialshootingFrames = 7;
    this.especialrestingFrames = 1;
    this.especialshootFrame = 1;

    this.agachadaimg = luzagachada;
    this.agachadaFrames = 4;
    this.agachadaFrames = 1;
    this.agachadashootFrame = 2;

    this.landingimg = luzlanding;
    this.landingshootingFrames = 7;
    this.landingrestingFrames = 1;
    this.landingshootFrame = 1;

    this.descendingimg = luzdescending;
    this.descendingshootingFrames = 0;
    this.descendingrestingFrames = 2;
    this.descendingshootFrame = 1;

    this.hurtingimg = luzhurting;
    this.hurtingshootingFrames = 1;
    this.hurtingrestingFrames = 2;
    this.hurtingshootFrame = 0;

  }

  changeState(state){
    this.state = state;
    this.shooting = false;
    this.power = this.maxPower;
    if(state == neutral){
      this.wonderballType = this.neutralimg;
      this.shootingFrames = this.neutralshootingFrames;
      this.restingFrames = this.neutralrestingFrames;
      this.shootFrame = this.neutralshootFrame;

    }else if(state==agachada){
      this.wonderballType = this.agachadaimg;
      this.shootingFrames = this.agachadashootingFrames;
      this.restingFrames = this.agachadarestingFrames;
      this.shootFrame = this.agachadashootFrame;
    }else if(state==hurting){
      this.wonderballType = this.hurtingimg;
      this.shootingFrames = this.hurtingshootingFrames;
      this.restingFrames = this.hurtingrestingFrames;
      this.shootFrame = this.hurtingshootFrame;

    }else if(state==descending){
      this.wonderballType = this.descendingimg;
      this.shootingFrames = this.descendingshootingFrames;
      this.restingFrames = this.descendingrestingFrames;
      this.shootFrame = this.descendingshootFrame;
    }else if(state==landing){
      this.wonderballType = this.landingimg;
      this.shootingFrames = this.landingshootingFrames;
      this.restingFrames = this.landingrestingFrames;
      this.shootFrame = this.landingshootFrame;
    }else if(state==especial){
      this.wonderballType = this.especialimg;
      this.shootingFrames = this.especialshootingFrames;
      this.restingFrames = this.especialrestingFrames;
      this.shootFrame = this.especialshootFrame;
      this.power = this.maxPower*3;
      this.shooting=true;
    }
  }

  enemyOnRow(onRow){
    this.shooting = true;
  }

  enemyAttacking(attack, health){
    super.enemyAttacking(attack);
    this.changeState(hurting);
    this.hurtingCount = 0;
  }

  doSpecial(){
    super.doSpecial();
    this.special = 100;
    this.changeState(especial);
  }

  update() {
    super.update();
    if(this.special > 0){
      this.wonderballType = this.especialimg;
      if(--this.special == 0){
        this.changeState(neutral);
      }
      this.shooting = true;
      this.shootNow = true;
    }

    if (this.state==neutral) {
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
    else if(this.state == hurting){
      if(this.hurtingCount++ >=2){
        this.changeState(neutral);
        this.hurtingCount = 0;
      }
    }
  }
}
