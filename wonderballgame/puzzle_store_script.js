//monedas
let puzzleStoreCards = [];
let puzzlePieceCost = 500;
let puzzlePiecesIndex = [];

function initPuzzleStoreCards(){
  const width = 100;
  const height = 100;
  puzzleStoreCards=[];
  ppcounter = 8;
  for(let i = 0; i < ppcounter; i++){
      x = (i%cols)*width + (i%cols)*50+25;
      y = Math.floor(i / cols)*(height+90) + 200;
      console.log(y);
      j = Math.floor(Math.random() * allTypes.length);
      puzzleStoreCards.push(new WonderballType(x, y, width, height, allTypes[j], j));
      puzzlePiecesIndex.push(j);
  }
}

function showPuzzleStore(){
  var storedPuzzlePieces = JSON.parse(localStorage.puzzlePieces);
  for(let i = 0; i< puzzleStoreCards.length; i++){
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.fillStyle='black';
    ctx.fillText(storedPuzzlePieces[puzzlePiecesIndex[i]], puzzleStoreCards[i].x+puzzleStoreCards[i].width-25, puzzleStoreCards[i].y+5);
    ctx.strokeRect(puzzleStoreCards[i].x, puzzleStoreCards[i].y-25, puzzleStoreCards[i].width+20, puzzleStoreCards[i].height+50);
    ctx.drawImage(puzzleStoreCards[i].card.img, 0, 0, 340, 367, puzzleStoreCards[i].x, puzzleStoreCards[i].y, puzzleStoreCards[i].width, puzzleStoreCards[i].height);
    ctx.fillRect(puzzleStoreCards[i].x, puzzleStoreCards[i].y+puzzleStoreCards[i].height, puzzleStoreCards[i].width+20, 50);
    ctx.fillStyle = 'gold';
    ctx.font = '20px Orbitron';
    ctx.fillText(puzzlePieceCost, puzzleStoreCards[i].x+puzzleStoreCards[i].width/3, puzzleStoreCards[i].y+puzzleStoreCards[i].height+25);
  }
}

function handlePuzzleStore(){
  for(let i = 0; i< puzzleStoreCards.length; i++){
    if(collision(puzzleStoreCards[i], mouse) && mouse.clicked){
      mouse.clicked=false;
      if(Number(localStorage.coinCounter) >= puzzlePieceCost){
        floatingMessages.push(new FloatingMessage("Buying -500$", mouse.x, mouse.y, 20, 'blue'));
        var storedPuzzlePieces = JSON.parse(localStorage.puzzlePieces);
        console.log(storedPuzzlePieces);
        j = Number(puzzlePiecesIndex[i]);
        storedPuzzlePieces[j] = Number(storedPuzzlePieces[j]) + 1;
        localStorage.coinCounter = Number(localStorage.coinCounter)-puzzlePieceCost;

        //subir nivel
        if(Number(storedPuzzlePieces[j])>=1){
          key = "wonderball"+(j)+"level";
          localStorage[key] = Number(localStorage[key])+1;
          floatingMessages.push(new FloatingMessage("Level Up! Now you are L"+localStorage[key], mouse.x, mouse.y, 20, 'blue'));
          storedPuzzlePieces[j] = 0;
        }


        localStorage.puzzlePieces = JSON.stringify(storedPuzzlePieces);
      }else{
        floatingMessages.push(new FloatingMessage("You need more coins", mouse.x, mouse.y, 20, 'blue'));
      }
    }
  }
  mouse.clicked = false;
}

function animatePuzzleStore(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(coinIcon.img, 0, 0, 100, 100, coinIcon.x, coinIcon.y, coinIcon.height, coinIcon.width);
  ctx.fillStyle='gold';
  ctx.font = '20px Orbitron';
  ctx.fillText(localStorage.coinCounter, coinIcon.x+65, coinIcon.y+20);


  ctx.fillStyle='black';
  ctx.font = '30px Orbitron';
  ctx.fillText("Welcome to the Puzzle Store", 120, 120);

  //Go Button
  ctx.fillStyle='gold';
  ctx.fillRect(selectWorldBtn.x, selectWorldBtn.y, selectWorldBtn.width, selectWorldBtn.height);
  ctx.fillStyle='black';
  ctx.font = '30px Orbitron';
  ctx.fillText(selectWorldBtn.text, selectWorldBtn.x+10, selectWorldBtn.y+35);

  ctx.font = '20px Orbitron';
  ctx.fillText("Go to index" , selectWorldBtn.x+65, selectWorldBtn.y+35);
  if(collision(selectWorldBtn, mouse) & mouse.clicked){
    mouse.clicked = false;
    goToMap();
  }

  showPuzzleStore();
  handlePuzzleStore();
  handleFloatingMessages();
}
