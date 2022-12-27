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
  for(let i = 0; i < allEpicWonderballs.length; i++){
      x = (i%cols)*width + (i%cols)*50+25;
      console.log(x);
      y = Math.floor(i / cols)*height + (Math.floor(i / cols)*5) + 200;
      storeCards.push(new WonderballType(x, y, width, height, allEpicWonderballs[i]));
  }
}

function showStore(){
  for(let i = 0; i< storeCards.length; i++){
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.fillStyle='black';
    ctx.strokeRect(storeCards[i].x, storeCards[i].y-25, storeCards[i].width+20, storeCards[i].height+50);
    ctx.drawImage(storeCards[i].card.img, 0, 0, 340, 367, storeCards[i].x, storeCards[i].y, storeCards[i].width, storeCards[i].height);
    ctx.fillRect(storeCards[i].x, storeCards[i].y+storeCards[i].height, storeCards[i].width+20, 50);
    ctx.fillStyle = 'gold';
    ctx.font = '20px Orbitron';
    ctx.fillText(Math.floor(storeCards[i].card.coinsPrice), storeCards[i].x+storeCards[i].width/3, storeCards[i].y+storeCards[i].height+25);
  }
}

function handleStore(){
  for(let i = 0; i< storeCards.length; i++){
    if(collision(storeCards[i], mouse) && mouse.clicked){
      if(Number(localStorage.coinCounter) >= storeCards[i].card.coinsPrice){
        if(Number(localStorage.getItem(storeCards[i].card.storagekey)) > 0){
          floatingMessages.push(new FloatingMessage("You already own this wonderball", mouse.x, mouse.y+25, 35, 'black'));
        }
        else{
          allTypes.push(allEpicWonderballs[i]); //Add the original card, not the WonderballType object
          floatingMessages.push(new FloatingMessage("New wonderball added!", mouse.x, mouse.y, 35, 'green'));
          localStorage.coinCounter = Number(localStorage.coinCounter)-storeCards[i].card.coinsPrice;
          floatingMessages.push(new FloatingMessage("-coins", mouse.x, mouse.y+25, 35, 'gold'));
          storeCards.splice(i,1);
          allEpicWonderballs.splice(i,1);
          i--;
          localStorage.setItem(storeCards[i].card.storagekey,1);
        }
      }else{
        floatingMessages.push(new FloatingMessage("You need more coins", mouse.x, mouse.y, 20, 'blue'));
      }
    }
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
  handleStore();
  handleFloatingMessages();
}
