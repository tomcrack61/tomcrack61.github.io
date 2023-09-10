//catalogo
let worldBgnImg = new Image();

// global variables
const cellSize = 100;
const cellGap = 3;

const gameGrid = [];
const wonderballs = [];
const enemies = [];
const enemyPositions = [];
const projectiles = [];
const resources = [];
const nutrients = [];
let enemiesInterval = 400;
let enemiesPowerBoost = 1;
let numberOfResources = 1000;
let frame = 0;
let playGame = false;
let gameOver = false;
let score = 0;
let choosenDefender = 0;
let boss = false;

let gameOverCount = 0;

let curr_level = 1;
let level_zombies = curr_level*10+Math.pow(curr_level,2);
let boss_points = 50;
let go_next_levl = false;
let winningScore = level_zombies*10+boss_points;
let givenZombies = 0;


// game board
const controlsBar = {
  width : cellSize,
  height : canvas.width,
};


class Cell {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = cellSize;
    this.height = cellSize;
  }
  draw(){
    if (mouse.x && mouse.y && collision(this, mouse)){
      ctx.strokeStyle = 'blue';
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
}
function createGrid(){
  for (let y = 10; y < canvas.height-cellSize; y+= cellSize ){
    for (let x = cellSize+5; x < canvas.width; x+= cellSize){
      gameGrid.push(new Cell(x,y));
    }
  }
}
createGrid();
function handleGameGrid(){
  for (let i= 0; i < gameGrid.length; i++){
    gameGrid[i].draw();
  }
}

function produceSpecialGem(x,y){
  resources.push(new Resource(x, y, 0, gemImg));
}

function handleSpecialGem(){
  if(collision(mouse, gem)&& mouse.clicked){
    mouse.clicked=false;
    if(gemsObtained>0){
      gem.active = true;
      gemsObtained--;
    }
  }
  ctx.strokeStyle = 'black';
  if(gem.active) ctx.strokeStyle = 'gold';
  ctx.strokeRect(gem.x, gem.y, gem.width, gem.height);
  ctx.drawImage(gem.img, 0, 0, 100, 100, gem.x, gem.y, gem.width, gem.height);
  ctx.drawImage(gem.img, 0, 0, 100, 100, gem.x, gem.y, gem.width, gem.height);
  ctx.fillStyle = 'black';
  ctx.font = '20px Orbitron';
  ctx.fillText(gemsObtained, gem.x+40, gem.y+20);
}

function handleProjectiles(){
  for (let i=0; i< projectiles.length; i++){
    projectiles[i].update();
    projectiles[i].draw();

    for (let j = 0; j < enemies.length; j++){
      if(enemies[j] && projectiles[i] && collision(projectiles[i], enemies[j])){
        p = projectiles[i];
        p.attack(enemies[j]);
        if(p.destroy()){
          projectiles.splice(i, 1);
          i--;
        }
      }
    }

    if ( projectiles[i] && projectiles[i].x > canvas.width -cellSize){
      projectiles.splice(i, 1);
      i--;
    }
  }
}

function handleNutrients(){
  for (let i=0; i< nutrients.length; i++){
    nutrients[i].update();
    nutrients[i].draw();

    for (let j = 0; j < wonderballs.length; j++){
      if(wonderballs[j] && nutrients[i] && collision(nutrients[i], wonderballs[j])){
        wonderballs[j].health += nutrients[i].power;
        p = nutrients[i];
        p.destroy();
        nutrients.splice(i, 1);
        i--;
      }
    }

    if ( nutrients[i] && nutrients[i].x > canvas.width -cellSize){
      nutrients.splice(i, 1);
      i--;
    }

    if ( nutrients[i] && nutrients[i].y < 0 ){
      nutrients.splice(i, 1);
      i--;
    }
  }
}


function handleWonderballs(){
  for (let i=0; i< wonderballs.length; i++){
    wonderballs[i].draw();
    wonderballs[i].update();

    if(enemyPositions.includes(wonderballs[i].y)){
      wonderballs[i].enemyOnRow(true);
    }else{
      wonderballs[i].enemyOnRow(false);
    }

    for (let j=0; j< enemies.length; j++){
      if(wonderballs[i] && collision(wonderballs[i], enemies[j])){
        if(wonderballs[i] instanceof TrapWonderball){
          if(wonderballs[i].enemyAttacking(enemies[j].attack, enemies[j].health)){
            enemies.splice(j, 1);
            j--;
          }
          else{
            enemies[j].x -= cellSize*2;
          }
        }else{
          wonderballs[i].enemyAttacking(enemies[j].attack, enemies[j].health);
          enemies[j].wonderballAttacking(wonderballs[i].defense, wonderballs[i].health);
          if(wonderballs[i].venom == true ){
            enemies[j].empoison(wonderballs[i].power, 2000);
          }
        }
      }
      if(wonderballs[i] && wonderballs[i].health <= 0){
        wonderballs.splice(i, 1);
        i--;
      }
    }
  }
}

cards = [];
let allcards = [];

let cardAvailable = [];

function chooseDefender(){
  ctx.lineWidth = 1;
  for(let i = 0; i< cards.length; i++){
    if (collision(mouse, cards[i]) && mouse.clicked){
      mouse.clicked=false;
      choosenDefender = i;
    }
    ctx.strokeStyle = 'black';
    ctx.globalAlpha = 1 - (cardAvailable[i]%100/100);
    if(i == choosenDefender) ctx.strokeStyle = 'gold';
    ctx.strokeRect(cards[i].x, cards[i].y, cards[i].width, cards[i].height);
    ctx.drawImage(cards[i].card.img, 0, 0, 340, 367, cards[i].x, cards[i].y, cards[i].width, cards[i].height);
    ctx.globalAlpha = 1;
  }
}

function choosePowerUps(){
  ctx.lineWidth = 1;
  for ( let i = 0; i < powerUps.length; i++){
    if(i== 0){
      if (collision(mouse, powerUps[i]) && mouse.clicked && powerUpsTime[i] == 0){
        mouse.clicked=false;
        powerUps[i].active = !powerUps[i].active;
      }
    }
    else{
      if(powerUpsTime[i] > 0){
        powerUpsTime[i]--;
        if(powerUpsTime[i] == 0){
          if ( powerUps[i].active){
            powerUps[i].active = false;
            powerUpsTime[i] = 700;
          }
        }
      }
      if (collision(mouse, powerUps[i]) && mouse.clicked && !powerUps[i].active){
        mouse.clicked=false;
        powerUps[i].active = true;
        powerUpsTime[i] = 1000;
      }
    }


    ctx.strokeStyle = 'black';
    ctx.globalAlpha = 1 - (powerUps[i]%1000/1000);
    if(powerUps[i].active) ctx.strokeStyle = 'gold';
    ctx.strokeRect(powerUps[i].x, powerUps[i].y, powerUps[i].width, powerUps[i].height);
    ctx.drawImage(powerUps[i].img, 0, 0, 100, 100, powerUps[i].x, powerUps[i].y, powerUps[i].width, powerUps[i].height);
    ctx.globalAlpha = 1;
  }

}

function handlePauseBtn(){
  //pauseImg
  if(collision(mouse, pauseBtn)&& mouse.clicked){
    mouse.clicked=false;
    pauseBtn.active = !pauseBtn.active;
  }
  ctx.strokeStyle = 'black';
  if(pauseBtn.active) ctx.strokeStyle = 'gold';
  ctx.strokeRect(pauseBtn.x, pauseBtn.y, pauseBtn.width, pauseBtn.height);
  ctx.drawImage(pauseBtn.img, 0, 0, 100, 100, pauseBtn.x, pauseBtn.y, pauseBtn.width, pauseBtn.height);
}


//Floating messages
const floatingMessages = [];
class FloatingMessage{
  constructor(value, x, y, size, color){
    this.value = value;
    this.x = x;
    this.y = y;
    this.size = size;
    this.lifeSpan = 0;
    this.color = color;
    this.opacity = 1;
  }

  update (){
    this.y += 0.3;
    this.lifeSpan += 1;
    if (this.opacitiy > 0.01) this.opacity -= 0.01;
  }

  draw(){
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.font = this.size + 'px Orbitron';
    ctx.fillText(this.value, this.x, this.y);
    ctx.globalAlpha = 1;
  }
}

function handleFloatingMessages(){
  for (let i=0; i < floatingMessages.length; i++){
    floatingMessages[i].update();
    floatingMessages[i].draw();
    if(floatingMessages[i] && floatingMessages[i].lifeSpan >= 50){
      floatingMessages.splice(i, 1);
      i--;
    }
  }
}
// Enemies


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
    if(health - this.attack > 0){
      this.movement = 0;
    }else{
      this.movement = this.speed;
    }
  }
}

function handleEnemies(){
  for (let i=0; i<enemies.length; i++){
    enemies[i].update();
    enemies[i].draw();
    if(enemies[i].x <0){
      game.state = "gameOver"
      gameOver = true;
      playGame = false;
    }

    if(enemies[i].health <= 0){
      produceSpecialGem(enemies[i].x, enemies[i].y);
      let gainedResources = enemies[i].maxHealth/10;
      floatingMessages.push(new FloatingMessage("+"+gainedResources, enemies[i].x, enemies[i].y, 30, 'black'));
      floatingMessages.push(new FloatingMessage("+"+gainedResources, 250, 50, 30, 'gold'));
      numberOfResources += gainedResources;
      score += gainedResources;
      const findThisIndex = enemyPositions.indexOf(enemies[i].y);
      enemyPositions.splice(findThisIndex, 1);
      enemies.splice(i, 1);
      i--;
    }
  }

  if (frame % enemiesInterval == 0 && !boss){
    let verticalPosition = Math.floor(Math.random()*5) * cellSize + cellGap;
    let type = 0;
    type = Math.floor(Math.random()*(enemyTypes.length-1));
    if (givenZombies >= level_zombies) {
      type = enemyTypes.length-1;
      boss = true;
    }
    enemies.push(new Enemy(verticalPosition, enemyTypes[type]));
    givenZombies += 1;
    enemyPositions.push(verticalPosition);
    if ( enemiesInterval > 150){
      enemiesInterval -= 25;
    }
  }
}
// Resources
const amounts = [20, 30, 40];

class Resource{
  constructor(x,y,amount, img){
    this.x = x;
    this.y = y;
    this.width = cellSize * 0.6;
    this.height = cellSize * 0.6;
    this.amount = amount;
    this.image = img;
  }
  draw(){
    if(this.image == null){
      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      ctx.arc(this.x+50, this.y+50, this.width/2, 0, Math.PI * 2);
      ctx.fill();
    }
    else{
      ctx.drawImage(this.image, 0, 0, 100, 100, this.x, this.y, this.width, this.height);
    }
    ctx.fillStyle = 'black';
    ctx.font = '20px Orbitron';
  }
  update(){
    this.y +=0.1;
  }
}

function handleResources(){
  if(frame%500 === 0 && score < winningScore){
    x = (Math.floor(Math.random()*5)+1)*cellSize;
    y = (Math.floor(Math.random()*5)+1)*cellSize;
    amount = amounts[Math.floor(Math.random()* amounts.length)];

    resources.push(new Resource(x,y,amount, sol));
  }
  for(let i = 0; i < resources.length; i++){
    resources[i].update();
    resources[i].draw();
    if (resources[i] && mouse.x && mouse.y && collision(resources[i], mouse)){
      numberOfResources+=resources[i].amount;
      if(resources[i].amount > 0){
        floatingMessages.push(new FloatingMessage("+"+resources[i].amount, resources[i].x, resources[i].y, 30, 'black'));
        floatingMessages.push(new FloatingMessage("+"+resources[i].amount, 250,50,30,'gold' ));
      }else{
        gemsObtained = Math.min(gemsObtained+1, 4);
      }
      resources.splice(i, 1);
      i--;
    }
  }
}
// Utilities
function handleGameStatus(){
  ctx.fillStyle = 'gold';
  ctx.font = '20px Arial';
  //ctx.fillText('Score: ' + score, 650, 40);
  ctx.fillText('Resources: ' + numberOfResources, 740, 80);
  ctx.fillText('Level: ' + curr_level, 740, 40);
  if (gameOver){
    gameOverCount += 1;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if (gameOverCount == 3){
      gameOverCount = 0;
      ctx.drawImage(gameOver3DialogImg, 0, 0, 2713, 1778, 10,10,canvas.width, canvas.height);
    }
    else{
      ctx.drawImage(gameOverDialogImg, 0, 0, 3200, 2100, 10,10,canvas.width, canvas.height);
    }

  }
  if(enemies.length == 0 && givenZombies >= level_zombies){
    let coinsEarned = 1000;
    if(game.currentLevel%10==0) coinsEarned *= (game.currentLevel/5);
    localStorage.coinCounter = Number(localStorage.coinCounter) + coinsEarned;
    localStorage.currentLevel = Number(localStorage.currentLevel) + 1;
    game.state = "win"
  }
}

canvas.addEventListener('click', function(){
    if(playGame){
      const gridPositionX = mouse.x - (mouse.x % cellSize) + cellGap;
      const gridPositionY = mouse.y - (mouse.y % cellSize) + cellGap;
      if (gridPositionX < cellSize) return;
      if (gridPositionY > canvas.height - cellSize) return;
      for (let i=0; i < wonderballs.length; i++){
        if(wonderballs[i]&&wonderballs[i].x === gridPositionX && wonderballs[i].y === gridPositionY){
          if(powerUps[0].active){ //shovel is active
            numberOfResources += 25;
            floatingMessages.push(new FloatingMessage("+25", mouse.x, mouse.y, 20, 'blue'));
            wonderballs.splice(i, 1);
            powerUps[0].active=false; //make shovel not active
            return;
          }
          else if(gem.active){
            gem.active = false;
            wonderballs[i].doSpecial();
            return; //Return to avoid two wonderballs at the same loation
          }
          else if (cards[choosenDefender].card.type == support){
            let defenderCost = cards[choosenDefender].card.cost;
            if (numberOfResources >= defenderCost){
              if(cardAvailable[choosenDefender]<=0){
                wonderballs.push(new SupportWonderball(gridPositionX, gridPositionY));
              }
              numberOfResources -= defenderCost;
              cardAvailable[choosenDefender]=300;
            }
            return; //Return to avoid two wonderballs at the same loation
          }
          //check other powerUps
        }
      }
      let defenderCost = cards[choosenDefender].card.cost;
      if (numberOfResources >= defenderCost){
        if(cardAvailable[choosenDefender]<=0){
          if(cards[choosenDefender].card.type==support){
            floatingMessages.push(new FloatingMessage("Use a wonderball first", mouse.x, mouse.y, 20, 'blue'));
          }
          else{
            wonderballs.push(createWonderball(cards[choosenDefender].card.type, gridPositionX, gridPositionY));
          }
          numberOfResources -= defenderCost;
          cardAvailable[choosenDefender] = cards[choosenDefender].card.cost*1.5;
          if(cardAvailable[choosenDefender]==0)cardAvailable[choosenDefender]=150;
        }
        else{
          floatingMessages.push(new FloatingMessage("Wait for recharge", mouse.x, mouse.y, 20, 'blue'));
        }
      }else{
        floatingMessages.push(new FloatingMessage("No resources available", mouse.x, mouse.y, 20, 'blue'));
      }
    }
});

function handleCards(){
  for(let i = 0; i< cardAvailable.length; i++){
    if(cardAvailable[i] > 0){
      cardAvailable[i]--;
    }
  }
}

function animateGame(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(worldBgnImg, 0, 0, 3143, 2415, 10,10,canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.85;
  ctx.fillRect(0,0, controlsBar.width, controlsBar.height);

  handlePauseBtn();
  handleGameGrid();
  if(!pauseBtn.active){
    chooseDefender();
    choosePowerUps();
    handleWonderballs();
    handleProjectiles();
    handleEnemies();
    handleResources();
    handleNutrients();
    handleFloatingMessages();
    handleSpecialGem();
  }
  handleGameStatus();
  handleCards();

  // Coins counter
  ctx.drawImage(coins.img, 0, 0, 100, 100, coins.x, coins.y, coins.height, coins.width);4
  ctx.fillStyle='gold';
  ctx.font = '20px Orbitron';
  ctx.fillText(localStorage.coinCounter, coins.x+40, coins.y+20);

  frame++;
}


function initLevel(){
    score = 0;

    numberOfResources = Math.max((5-curr_level)*100, 100);
    boss = false;
    enemies.length = 0;
    resources.length = 0;
    projectiles.length = 0;
    wonderballs.length = 0;

    curr_level = localStorage.currentLevel;
    level_zombies =curr_level*10+Math.pow(curr_level,2);
    winningScore = level_zombies*10+boss_points;
    enemiesPowerBoost = curr_level/2;

    go_next_levl = false;
    playGame = false;
    gameOver = false;
    cards = [];
    cardsAvailable = [];
    if(game.curr_level == 1){
      worldBgnImg.src = 'assets/antiguo egipto.png';
    }

    if(game.curr_level == 2){
      worldBgnImg.src = 'assets/antiguo egipto.png';
    }
    if(game.curr_level == 3){
      worldBgnImg.src = 'assets/antiguo egipto.png';
    }  if(game.curr_level == 5){




        }
}


//animate();
