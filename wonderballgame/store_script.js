if (typeof(Storage) !== "undefined") {
  if (!localStorage.coinCounter) {
    localStorage.setItem("coinCounter", 0)
  }
}else{
  console.log("Storage Not Supported")
}

canvasPosition = canvas.getBoundingClientRect();
ctx.clearRect(0,0, canvas.width, canvas.height);

//monedas
const coinImg = new Image();
coinImg.src = 'resources/coins.png';

const coins ={
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

function animate(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(coins.img, 0, 0, 100, 100, coins.x, coins.y, coins.height, coins.width);
  ctx.fillStyle='gold';
  ctx.font = '20px Orbitron';
  ctx.fillText(localStorage.coinCounter, coins.x+65, coins.y+20);


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
    window.location.assign("./index.html");
  }

  requestAnimationFrame(animate);
}

animate();
