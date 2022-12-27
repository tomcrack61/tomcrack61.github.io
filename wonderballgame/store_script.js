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

let storeCards = [];

function initStoreCards(){
  const width = 200;
  const height = 300;
  storeCards=[];
  for(let i = 0; i < allEpicWonderballsTypes.length; i++){
      x = (i%cols)*width + (i%cols)*5+50;
      y = Math.floor(i / cols)*height + (Math.floor(i / cols)*5) + 100;
      storeCards.push(new WonderballType(x, y, width, height, allEpicWonderballsTypes[i]));
  }
}

function showStore(){
  for(let i = 0; i< storeCards.length; i++){
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.fillStyle='black';
    bgnImg = selectionImg;
    if(choosenOnes.includes(i+curr_page)){
       bgnImg = selectionChosenImg;
       ctx.fillStyle = 'gold';
     }
    //ctx.strokeRect(allcards[i].x, allcards[i].y, allcards[i].width, allcards[i].height);
    ctx.drawImage(bgnImg, 0, 0, 250, 180, allcards[i].x, allcards[i].y-25, allcards[i].width+20, allcards[i].height+50);
    ctx.drawImage(allcards[i].card.img, 0, 0, 340, 367, allcards[i].x, allcards[i].y, allcards[i].width, allcards[i].height);
    ctx.font = '20px Orbitron';
    ctx.fillText(Math.floor(allcards[i].card.cost), allcards[i].x+allcards[i].width-50, allcards[i].y+allcards[i].height-10);
  }
}

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

  showStore();
}
