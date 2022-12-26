canvasPosition = canvas.getBoundingClientRect();
ctx.clearRect(0,0, canvas.width, canvas.height);

//monedas
const coinIcon ={
  x: 15,
  y: 15,
  width: 60,
  height: 60,
  active: false,
  img: coinImg
};


const backBtnImg = new Image();
backBtnImg.src = 'resources/coins.png';

const selectWorldBtn ={
  x: canvas.height-100,
  y: 15,
  width: 60,
  height: 60,
  active: false,
  text: "<--"
};

function animateStore(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(coinIcon.img, 0, 0, 100, 100, coinIcon.x, coinIcon.y, coinIcon.height, coinIcon.width);
  ctx.fillStyle='gold';
  ctx.font = '20px Orbitron';
  ctx.fillText(localStorage.coinCounter, coinIcon.x+65, coinIcon.y+20);


  ctx.fillStyle='black';
  ctx.font = '30px Orbitron';
  ctx.fillText("Welcome to the Store", 200, 100);

  //Go Button
  ctx.fillStyle='gold';
  ctx.fillRect(selectWorldBtn.x, selectWorldBtn.y, selectWorldBtn.width, selectWorldBtn.height);
  ctx.fillStyle='black';
  ctx.font = '30px Orbitron';
  ctx.fillText(selectWorldBtn.text, selectWorldBtn.x+10, selectWorldBtn.y+35);

  ctx.font = '20px Orbitron';
  ctx.fillText("Go to index" , selectWorldBtn.x+65, selectWorldBtn.y+35);
  if(collision(selectWorldBtn, mouse) & mouse.clicked){
    mapSettings();
    game.state = "map";
  }
}
