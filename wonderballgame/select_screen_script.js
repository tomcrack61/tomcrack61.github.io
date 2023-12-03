//catalogo
//const catalogImg = new Image();
//catalogImg.src = 'assets/world_choose.png';

lvlButtons = [];

let l1Btn ={
  x: 30,
  y: 275,
  width: 49,
  height: 47,
  active: true,
};
lvlButtons.push(l1Btn);

let l2Btn ={
  x: 90,
  y: 295,
  width: 45,
  height: 45,
  active: false
};
lvlButtons.push(l2Btn);

let l3Btn ={
  x: 190,
  y: 320,
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
  width: 120*0.8,
  height: 135*0.8
};

//catalogo
const mapImg = new Image();
mapImg.src = 'assets/map.jpeg';

function handleBtn(){
  if(collision(storeBtn, mouse) && mouse.clicked){
    mouse.clicked = false;
    goToStore();
  }else if(collision(temploBtn, mouse) && temploBtn.active && mouse.clicked){
    mouse.clicked = false;
    goToTemple();
  }
  else if(collision(catalogBtn, mouse) && mouse.clicked){
    mouse.clicked=false;
    goToCatalog();
  }
  else{
    for(let i = 0; i<lvlButtons.length; i++){
      if(collision(lvlButtons[i], mouse) && mouse.clicked && lvlButtons[i].active){
        mouse.clicked = false;
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
  ctx.drawImage(storeMenuBtn.img_src, storeMenuBtn.current_frame*storeMenuBtn.img_width, 0, storeMenuBtn.img_width, storeMenuBtn.img_height, storeMenuBtn.x, storeMenuBtn.y, storeMenuBtn.width*0.8, storeMenuBtn.height*0.8);
  ctx.strokeRect(catalogBtn.x, catalogBtn.y, catalogBtn.width, catalogBtn.height);
//ctx.drawImage(catalogBtn.img, 0, 0, 200, 200, catalogBtn.x, catalogBtn.y, catalogBtn.width, catalogBtn.height);

  handleBtn();
}
