canvasPosition = canvas.getBoundingClientRect();
ctx.clearRect(0,0, canvas.width, canvas.height);

//catalogo
const catalogImg = new Image();
//catalogImg.src = 'assets/world_choose.png';

let catalog_page = 0;
const totalTypes = 6;

const typesButton = {
  x:50,
  y: 15,
  width: 320,
  height: 40*totalTypes,
  options: ['producer', 'distanceshoot','contactshoot','instant','manualshoot','teamwork'],
  selected: 'producer',
  closed: true
}


function showCatalog(){
  for(let i = 0; i< allCards.length; i++){
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

function showTypeSelectionButton(){
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  if(typesButton.closed){
    closeTypeSelection();
  }else{
    openTypeSelection();
  }

}

function closeTypeSelection(){
  ctx.strokeRect(typesButton.x, typesButton.y, typesButton.width, 40);
  ctx.fillRect(typesButton.x, typesButton.y, typesButton.width, 40);
  //triangle dropdown
  ctx.beginPath();
  ctx.moveTo(typesButton.x+typesButton.width-19,typesButton.y+5);
  ctx.lineTo(typesButton.x+typesButton.width-5,typesButton.y+5);
  ctx.lineTo(typesButton.x+typesButton.width-12,typesButton.y+ 38);
  ctx.lineTo(typesButton.x+typesButton.width-19,typesButton.y+5);
  ctx.stroke();

  //letters
  ctx.fillStyle = 'black';
  ctx.font = '20px Orbitron';
  ctx.fillText(typesButton.selected, typesButton.x+5, typesButton.y+20);
}

function openTypeSelection(){
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.strokeRect(typesButton.x, typesButton.y, typesButton.width, 40);
  ctx.fillRect(typesButton.x, typesButton.y, typesButton.width, typesButton.height);

  //letters
  ctx.fillStyle = 'black';
  ctx.font = '20px Orbitron';

  for(let i = 0; i < typesButton.options.length; i++){
      ctx.fillText(typesButton.options[i], typesButton.x+5, typesButton.y+20+40*i);
  }
}


function handleTypeSelectionButtion(){
  if (collision(mouse, typesButton)){
      let choice = Math.floor((mouse.y - 5- typesButton.y)/40);
      console.log(choice)
      console.log((mouse.y))
      if(typesButton.closed && choice == 0 && mouse.clicked){
        typesButton.closed = false;
        mouse.clicked = false;
      }else if(!typesButton.closed && mouse.clicked){
        //collision with options
        typesButton.selected = typesButton.options[choice];
        typesButton.closed = true;
        mouse.clicked=false;
      }
  }

}

function animateCatalog(){
  ctx.clearRect(0,0, canvas.width, canvas.height);

  showTypeSelectionButton();
  handleTypeSelectionButtion();
}
