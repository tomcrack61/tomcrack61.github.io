const storeMenuBtn ={
  x: 35,
  y: 10,
  width: 215,
  height: 185
};

const playbtnImg = new Image();
playbtnImg.src = 'resources/star botton.png';

const playAdventureModeBtn ={
  x: 150,
  y: 150,
  width: 300,
  height: 200,
  img_src: playbtnImg,
  img_height: 369,
  img_width: 342,
  current_frame: 0
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
    mouse.clicked=false;
    goToStore();
  }else if(collision(catalogBtn, mouse) && mouse.clicked){
    mouse.clicked=false;
    goToCatalog();
  }
  else if(collision(playAdventureModeBtn, mouse) && mouse.clicked){
    mouse.clicked=false;
    goToMap();
  }
  else if(collision(playAdventureModeBtn, mouse) && mouse.pressed){
    playAdventureModeBtn.current_frame=1;
  }
  else if(!mouse.pressed){
    playAdventureModeBtn.current_frame=0;
  }
}

function animateGeneralMenu(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(startScreenImg, 0, 0, 1300, 900, 10,10,canvas.width, canvas.height);

  //draw buttons temporal
  ctx.strokeRect(storeMenuBtn.x, storeMenuBtn.y, storeMenuBtn.width, storeMenuBtn.height);
  ctx.fillText("Store", storeMenuBtn.x, storeMenuBtn.y);

  ctx.drawImage(playAdventureModeBtn.img_src, playAdventureModeBtn.current_frame*playAdventureModeBtn.img_width, 0, playAdventureModeBtn.img_width, playAdventureModeBtn.img_height, playAdventureModeBtn.x, playAdventureModeBtn.y, playAdventureModeBtn.img_width, playAdventureModeBtn.img_height )

  ctx.strokeRect(catalogBtn.x, catalogBtn.y, catalogBtn.width, catalogBtn.height);
  ctx.fillText("Catalog", catalogBtn.x, catalogBtn.y);

  handlemenuBtn();

}
