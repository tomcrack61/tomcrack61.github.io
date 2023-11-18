const storeMenuBtnImg = new Image();
storeMenuBtnImg.src = 'resources/shop botton.png';

const storeMenuBtn ={
  x: 35,
  y: 10,
  img_src: storeMenuBtnImg,
  width: 120,
  height:135,
  img_width: 342,
  img_height: 369,
  current_frame: 0
};

const playbtnImg = new Image();
playbtnImg.src = 'resources/star botton.png';

const playAdventureModeBtn ={
  x:150,
  y: 150,
  width: Math.floor(canvas.width/2),
  height: Math.floor(canvas.height/3),
  img_src: playbtnImg,
  img_height: 369,
  img_width: 342,
  current_frame: 0
};

const optionsBtnImg = new Image();
optionsBtnImg.src = 'resources/options botton.png';

const optionsBtn ={
  x: canvas.width - 200,
  y: canvas.height - 300,
  width:  Math.floor(canvas.width/4),
  height:  Math.floor(canvas.width/4),
  img_src: optionsBtnImg,
  img_height: 369,
  img_width: 342,
  current_frame: 0
};


const catalogBtn ={
  x: canvas.width - 200,
  y: 10,
  width:  Math.floor(canvas.width/3),
  height:  Math.floor(canvas.height/3)
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
  else if(collision(optionsBtn, mouse) && mouse.clicked){
    mouse.clicked=false;

  }
  else if(collision(playAdventureModeBtn, mouse) && mouse.pressed){
    playAdventureModeBtn.current_frame=1;
  }
  else if(collision(storeMenuBtn, mouse) && mouse.pressed){
    storeMenuBtn.current_frame=1;
  }
  else if(collision(optionsBtn, mouse) && mouse.pressed){
    optionsBtn.current_frame=1;
  }
  else if(!mouse.pressed){
    playAdventureModeBtn.current_frame=0;
    storeMenuBtn.current_frame=0;
    optionsBtn.current_frame = 0;
  }
  else{
    mouse.clicked = false;
  }
}

function animateGeneralMenu(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(startScreenImg, 0, 0, 1300, 900, 10,10,canvas.width, canvas.height);

  //draw buttons temporal
  ctx.drawImage(storeMenuBtn.img_src, storeMenuBtn.current_frame*storeMenuBtn.img_width, 0, storeMenuBtn.img_width, storeMenuBtn.img_height, storeMenuBtn.x, storeMenuBtn.y, storeMenuBtn.width, storeMenuBtn.height);
  ctx.fillText("Store", storeMenuBtn.x, storeMenuBtn.y);

  ctx.drawImage(playAdventureModeBtn.img_src, playAdventureModeBtn.current_frame*playAdventureModeBtn.img_width, 0, playAdventureModeBtn.img_width, playAdventureModeBtn.img_height, playAdventureModeBtn.x, playAdventureModeBtn.y, playAdventureModeBtn.width, playAdventureModeBtn.height )

  ctx.strokeRect(catalogBtn.x, catalogBtn.y, catalogBtn.width, catalogBtn.height);
  ctx.fillText("Catalog", catalogBtn.x, catalogBtn.y);

  ctx.drawImage(optionsBtn.img_src, optionsBtn.current_frame*optionsBtn.img_width, 0, optionsBtn.img_width, optionsBtn.img_height, optionsBtn.x, optionsBtn.y, optionsBtn.width, optionsBtn.height )

  handlemenuBtn();
}
