const storeMenuBtn ={
  x: 35,
  y: 10,
  width: 215,
  height: 185
};

const playAdventureModeBtn ={
  x: 150,
  y: 150,
  width: 300,
  height: 200
};

const catalogBtn ={
  x: 1000,
  y: 10,
  width: 215,
  height: 185
};

//catalogo
const startScreenImg = new Image();
startScreenImg.src = 'assets/startscreen.png';

function handlemenuBtn(){
  if(collision(storeMenuBtn, mouse) && mouse.clicked){
    goToStore();
  }else if(collision(catalogBtn, mouse) && mouse.clicked){
    goToCatalog();
  }
  else if(collision(playAdventureModeBtn, mouse) && mouse.clicked){
    goToMap();
  }
}

function animateGeneralMenu(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(startScreenImg, 0, 0, 1300, 900, 10,10,canvas.width, canvas.height);

  //draw buttons temporal
  ctx.strokeRect(storeMenuBtn.x, storeMenuBtn.y, storeMenuBtn.width, storeMenuBtn.height);
  ctx.fillText("Store", storeMenuBtn.x, storeMenuBtn.y);

  ctx.strokeRect(playAdventureModeBtn.x, playAdventureModeBtn.y, playAdventureModeBtn.width, playAdventureModeBtn.height);
  ctx.fillText("Play Adventure", playAdventureModeBtn.x, playAdventureModeBtn.y);

  ctx.strokeRect(catalogBtn.x, catalogBtn.y, catalogBtn.width, catalogBtn.height);
  ctx.fillText("Catalog", catalogBtn.x, catalogBtn.y);

  handlemenuBtn();
}
