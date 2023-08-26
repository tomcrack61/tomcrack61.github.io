if (typeof(Storage) !== "undefined") {
  if (!localStorage.passedLevels) {
    localStorage.setItem("passedLevels", 0)
  }
}

//catalogo
const catalogImg = new Image();
catalogImg.src = 'assets/world_choose.png';

lvlButtons = [];

let l1Btn ={
  x: 750,
  y: 485,
  width: 49,
  height: 47,
  active: true,
};
lvlButtons.push(l1Btn);

let l2Btn ={
  x: 700,
  y: 492,
  width: 45,
  height: 45,
  active: false
};
lvlButtons.push(l2Btn);

let l3Btn ={
  x: 645,
  y: 487,
  width: 45,
  height: 45,
  active: false
};
lvlButtons.push(l3Btn);

let l4Btn ={
  x: 615,
  y: 465,
  width: 45,
  height: 45,
  active: false
};
lvlButtons.push(l4Btn);
let l5Btn ={
  x: 560,
  y: 455,
  width: 45,
  height: 45,
  active: false
};
lvlButtons.push(l5Btn);

let l6Btn ={
  x: 520,
  y: 450,
  width: 45,
  height: 45,
  active: false
};
lvlButtons.push(l6Btn);

let l7Btn ={
  x: 470,
  y: 435,
  width: 45,
  height: 45,
  active: false
};
lvlButtons.push(l7Btn);

let l8Btn ={
  x: 450,
  y: 395,
  width: 45,
  height: 45,
  active: false
};
lvlButtons.push(l8Btn);

let l9Btn ={
  x: 442,
  y: 375,
  width: 45,
  height: 45,
  active: false
};
lvlButtons.push(l9Btn);

let temploBtn = {
  x: 450,
  y: 10,
  width: 250,
  height: 200,
  active: true
}
const storeBtn ={
  x: 35,
  y: 10,
  width: 215,
  height: 185
};

//catalogo
const mapImg = new Image();
mapImg.src = 'assets/map.jpg';

function handleBtn(){
  if(collision(storeBtn, mouse) && mouse.clicked){
    goToStore();
  }else if(collision(temploBtn, mouse) && temploBtn.active && mouse.clicked){
    goToTemple();
  }
  else{
    for(let i = 0; i<lvlButtons.length; i++){
      if(collision(lvlButtons[i], mouse) && mouse.clicked && lvlButtons[i].active){
        game.curr_level = i+1;
        game.state = "dialogMarcy"
        //goToSelection();
      }
    }
  }
}

function startMap(){
  for(let i = 0; i<lvlButtons.length; i++){
    if(Number(localStorage.currentLevel) > i){
      lvlButtons[i].active = true;
    }
  }
  if(Number(localStorage.currentLevel) > 10){
    temploBtn.active = true;
  }
}

function animateMap(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(mapImg, 0, 0, 1300, 900, 10,10,canvas.width, canvas.height);

  ctx.strokeStyle='blue';
  for(let i = 0; i<lvlButtons.length; i++){
    if(lvlButtons[i].active) ctx.strokeRect(lvlButtons[i].x, lvlButtons[i].y, lvlButtons[i].width, lvlButtons[i].height);
  }
  if(temploBtn.active) ctx.strokeRect(temploBtn.x, temploBtn.y, temploBtn.width, temploBtn.height);
  ctx.strokeRect(storeBtn.x, storeBtn.y, storeBtn.width, storeBtn.height);
  //ctx.drawImage(catalogBtn.img, 0, 0, 200, 200, catalogBtn.x, catalogBtn.y, catalogBtn.width, catalogBtn.height);

  ctx.fillStyle='black';
  ctx.font = '20px Orbitron';
  ctx.fillText('Choose a level', 120, 80);

  handleBtn();
}
