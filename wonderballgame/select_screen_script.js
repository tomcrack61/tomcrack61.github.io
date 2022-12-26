if (typeof(Storage) !== "undefined") {
  if (!localStorage.passedLevels) {
    localStorage.setItem("passedLevels", 0)
  }
}

//catalogo
const catalogImg = new Image();
catalogImg.src = 'assets/world_choose.png';

let dialogTime = 0;

let l1Btn ={
  x: 750,
  y: 485,
  width: 49,
  height: 47,
  active: true,
};

let l2Btn ={
  x: 700,
  y: 492,
  width: 45,
  height: 45,
  active: false
};

let l3Btn ={
  x: 615,
  y: 465,
  width: 45,
  height: 45,
  active: false
};

const storeBtn ={
  x: 35,
  y: 10,
  width: 215,
  height: 185
};

//catalogo
const startScreenImg = new Image();
startScreenImg.src = 'assets/map.jpg';

function handleBtn(){
  if(collision(l1Btn, mouse) && mouse.clicked && l1Btn.active){
    game.curr_level = 1;
    goToSelection();
  }
  else if(collision(l2Btn, mouse) && mouse.clicked  && l2Btn.active){
    game.curr_level = 2;
    goToSelection();
  }
  else if(collision(l3Btn, mouse) && mouse.clicked  && l3Btn.active ){
    game.curr_level = 3;
    goToSelection();
  }
  else if(collision(storeBtn, mouse) && mouse.clicked){
    game.state = "store";
  }
}

function startMap(){
  if(Number(localStorage.currentLevel) > 2){
    l3Btn.active = true;
  }
  if(Number(localStorage.currentLevel) > 1){
    l2Btn.active = true;
  }
  if(Number(localStorage.currentLevel) > 0){
    l1Btn.active = true;
  }
}

function animateMap(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(startScreenImg, 0, 0, 1300, 900, 10,10,canvas.width, canvas.height);

  ctx.strokeStyle='blue';
  ctx.strokeRect(l1Btn.x, l1Btn.y, l1Btn.width, l1Btn.height);
  if(l2Btn.active) ctx.strokeRect(l2Btn.x, l2Btn.y, l2Btn.width, l2Btn.height);
  if(l3Btn.active) ctx.strokeRect(l3Btn.x, l3Btn.y, l3Btn.width, l3Btn.height);
  ctx.strokeRect(storeBtn.x, storeBtn.y, storeBtn.width, storeBtn.height);
  //ctx.drawImage(catalogBtn.img, 0, 0, 200, 200, catalogBtn.x, catalogBtn.y, catalogBtn.width, catalogBtn.height);

  ctx.fillStyle='black';
  ctx.font = '20px Orbitron';
  ctx.fillText('Feli! This is your game, click a world to start', 120, 80);

  handleBtn();
}
