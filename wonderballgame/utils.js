if (typeof(Storage) !== "undefined") {
  if (!localStorage.coinCounter) {
    localStorage.setItem("coinCounter", 0);
  }
  localStorage.setItem("coinCounter", 1000);

  if (!localStorage.currentLevel) {
    localStorage.setItem("currentLevel", 0)
  }
  if (!localStorage.jetixBought) {
    localStorage.setItem("jetixBought", 0)
  }
  if (!localStorage.fireGuisanteBought) {
    localStorage.setItem("fireGuisanteBought", 0)
  }
  if (!localStorage.doradaBought) {
    localStorage.setItem("doradaBought", 0)
  }
  if (!localStorage.arqueopterixBought) {
    localStorage.setItem("arqueopterixBought", 0)
  }
  if (!localStorage.lotoBought) {
    localStorage.setItem("lotoBought", 0)
  }
  if (!localStorage.tiragiusantesBought) {
    localStorage.setItem("tiragiusantesBought", 0)
  }
  if (!localStorage.canonbirdBought) {
    localStorage.setItem("canonbirdBought", 0)
  }
  if (!localStorage.arqueopterixBought) {
    localStorage.setItem("arqueopterixBought", 0)
  }if (!localStorage.melonpultacongeladaBought) {
    localStorage.setItem("melonpultacongeladaBought", 0)
  }if (!localStorage.setaovniBought) {
    localStorage.setItem("setaovniBought", 1)
  }



  if (!localStorage.puzzlePieces) {
    var puzzlePieces = Array(100).fill(0);
    localStorage.puzzlePieces = JSON.stringify(puzzlePieces);
  }
}else{
  console.log("Storage Not Supported. Game progress will not be saved")
}


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
canvas.width= 900;
canvas.height = 600;

let canvasPosition = canvas.getBoundingClientRect();

const game = {
  state: "menu",
  curr_level: 1
}

//mouse
const mouse ={
  x: undefined,
  y: undefined,
  width: 0.1,
  height: 0.1,
  clicked: false,
  pressed: false
};

canvas.addEventListener('mousemove', function(e){
  mouse.x = e.x - canvasPosition.left;
  mouse.y = e.y - canvasPosition.top;
});

canvas.addEventListener('touchmove', function(e){
  mouse.x = e.x - canvasPosition.left;
  mouse.y = e.y - canvasPosition.top;
});

canvas.addEventListener('mouseleave', function(e){
  mouse.x = undefined;
  mouse.y = undefined;
});

canvas.addEventListener('touchend', function(e){
  mouse.x = undefined;
  mouse.y = undefined;
  mouse.clicked = false;
});

canvas.addEventListener('touchstart', function(e){
  mouse.clicked = true;
});

canvas.addEventListener('click', function(e){
  mouse.clicked = true;
});

canvas.addEventListener('mousedown', function(e){
  mouse.pressed = true;
});

canvas.addEventListener('mouseup', function(e){
  mouse.pressed = false;
});


function collision(first, second){
  if( !(first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y)
  ){
    return true;
  };
}

window.addEventListener('resize', function(){
  canvasPosition = canvas.getBoundingClientRect();
})

window.addEventListener('orientationchange', (event) => {
  canvasPosition = canvas.getBoundingClientRect();
});

function mapSettings(){
  var audioPlayer = document.getElementById("audio");
  audioPlayer.src = "assets/World map.mp4";
}

function generalMenuSettings(){
  var audioEl = document.getElementById("audio");
  audioEl.src = "assets/startmenusong.mp3";
}

function selectionSettings(){
  var audioEl = document.getElementById("audio");
  audioEl.src = "assets/Choose Your balls - Antiguo egipto.mp4";
}

function goToMap(){
  mapSettings();
  startMap();
  game.state = "map";
}

function goToSelection(){
  selectionSettings();
  initLevel();
  initAllCards();
  game.state = "selection";
}

function goToTemple(){
  alert("In Construction");
}

function goToGame(){
  audioEl = document.getElementById("audio");
  if(game.curr_level == 3) audioEl.src = "assets/First Wave - Antiguo egipto.mp4";
  else if(game.curr_level == 2) audioEl.src = "assets/First Wave - Antiguo egipto.mp4";
  else audioEl.src = "assets/worldsong.mp3";
  game.state = "play";
}

function goToStore(){
  var audioPlayer = document.getElementById("audio");
  audioPlayer.src = "assets/Pick of the store.mp3";

  initStoreCards();
  game.state = "store";
}

function goToPuzzleStore(){
  var audioPlayer = document.getElementById("audio");
  audioPlayer.src = "assets/Pick of the store.mp3";

  initPuzzleStoreCards();
  game.state = "puzzleStore";
}

function randn_bm(min, max, skew) {
  let u = 0, v = 0;
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0)
    num = Math.random();
  else{
    num = Math.pow(num, skew) // Skew
    num *= max - min // Stretch to fill range
    num += min // offset to min
  }
  return num
}

function wrapText(text, x, y, maxWidth, fontSize, fontFace){
     var startY=y;
     var words = text.split(' ');
     var line = '';
     var lineHeight=fontSize+2;

     ctx.font=fontSize+" "+fontFace;

     y+=fontSize;

     for(var n = 0; n < words.length; n++) {
       var testLine = line + words[n] + ' ';
       var metrics = ctx.measureText(testLine);
       var testWidth = metrics.width;
       if(testWidth > maxWidth) {
         ctx.fillText(line, x, y);
         line = words[n] + ' ';
         y += lineHeight;
       }
       else {
         line = testLine;
       }
     }
     ctx.fillText(line, x, y);
   }
