if (typeof(Storage) !== "undefined") {
  if (!localStorage.coinCounter) {
    localStorage.setItem("coinCounter", 0);
  }
  if (!localStorage.currentLevel) {
    localStorage.setItem("currentLevel", 0)
  }
}else{
  console.log("Storage Not Supported")
}


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
canvas.width= 900;
canvas.height = 600;

let canvasPosition = canvas.getBoundingClientRect();

const game = {
  state: "initDialog",
  curr_level: 1
}

//mouse
const mouse ={
  x: undefined,
  y: undefined,
  width: 0.1,
  height: 0.1,
  clicked: false,
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

canvas.addEventListener('mousedown', function(e){
  mouse.clicked = true;
});

canvas.addEventListener('mouseup', function(e){
  mouse.clicked = false;
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
  audioPlayer.src = "assets/mapsong.mp3";
}

function selectionSettings(){
  var audioEl = document.getElementById("audio");
  audioEl.src = "assets/menusong.mp3";
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

function goToGame(){
  audioEl = document.getElementById("audio");
  if(game.curr_level == 3) audioEl.src = "assets/camp.mp3";
  else if(game.curr_level == 2) audioEl.src = "assets/poolworld.mp3";
  else audioEl.src = "assets/worldsong.mp3";
  game.state = "play";
}

function goToStore(){  var audioPlayer = document.getElementById("audio");
  audioPlayer.src = "assets/Pick of the store.mp3";

  initStoreCards();
  game.state = "store";
}
