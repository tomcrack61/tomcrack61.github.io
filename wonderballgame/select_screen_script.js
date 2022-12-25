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

const welcomeDialogImg = new Image();
welcomeDialogImg.src = 'dialogmarie/Slide3.PNG';

function dialog(){
  dialogTime +=1;
  if(dialogTime > 200){
    animate();
  }
  requestAnimationFrame(dialog);
}

function handleBtn(){
  if(collision(l1Btn, mouse) && mouse.clicked){
    window.location.assign("./world.html");
  }
  else if(collision(l2Btn, mouse) && mouse.clicked){
    window.location.assign("./poolWorld.html");
  }
  else if(collision(l3Btn, mouse) && mouse.clicked){
    window.location.assign("./forestWorld.html");
  }
  else if(collision(storeBtn, mouse) && mouse.clicked){
    window.location.assign("./store.html");
  }
}

function animate(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(startScreenImg, 0, 0, 1300, 900, 10,10,canvas.width, canvas.height);

  ctx.strokeStyle='blue';
  ctx.strokeRect(l1Btn.x, l1Btn.y, l1Btn.width, l1Btn.height);
  ctx.strokeRect(l2Btn.x, l2Btn.y, l2Btn.width, l2Btn.height);
  ctx.strokeRect(l3Btn.x, l3Btn.y, l3Btn.width, l3Btn.height);
  ctx.strokeRect(storeBtn.x, storeBtn.y, storeBtn.width, storeBtn.height);
  //ctx.drawImage(catalogBtn.img, 0, 0, 200, 200, catalogBtn.x, catalogBtn.y, catalogBtn.width, catalogBtn.height);

  ctx.fillStyle='black';
  ctx.font = '20px Orbitron';
  ctx.fillText('Feli! This is your game, click a world to start', 120, 80);

  handleBtn();
  requestAnimationFrame(animate);
}

audioEl = document.getElementById("menuAudio");
audioEl.src = "assets/menusong.mp3";
var audioPlayer = document.getElementById("menuAudio");
audioPlayer.src = "assets/mapsong.mp3";
canvasPosition = canvas.getBoundingClientRect();
ctx.clearRect(0,0, canvas.width, canvas.height);
ctx.drawImage(welcomeDialogImg, 0, 0, 2959, 1881, 10,10,canvas.width, canvas.height);
dialog();
