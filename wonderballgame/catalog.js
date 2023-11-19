canvasPosition = canvas.getBoundingClientRect();
ctx.clearRect(0,0, canvas.width, canvas.height);


let catalog_page = 0;
const totalTypes = 15;

let typeCards = [];
let selectedWonderball = 0;

let counter = 0;
let animationFrame = 0;

const typesButton = {
  x:50,
  y: 15,
  width: 320,
  height: 40*totalTypes,
  options: ['producer', 'distanceshoot','defenser', 'contactshoot','timedshoot','general','manualshoot','support','teamwork','instant', 'trap', 'jetix', 'multiattack'],
  selected: 0,
  closed: true
}

const catalog = {
  x:25,
  y: Math.floor(2*canvas.height/3),
  width: canvas.width,
  height:Math.floor(canvas.height/3)
}

const backBtn = {
  x:canvas.width - 70,
  y: 15,
  width: 50,
  height:40,
  img: '<- Back'
}

initCards();

function initCards(){
  typeCards = [];
  console.log('init cards');

  for(let i = 0; i< allTypes.length; i++){
    if(allTypes[i].type == typesButton.selected){
      typeCards.push(allTypes[i]);
    }
  }
}

function showWonderballProperties(){
  ctx.strokeStyle = 'black';
  let description = 'NO description available';
  if(typeCards[selectedWonderball].desc){
    description = typeCards[selectedWonderball].desc;
  }
  description += '. Power: ' + typeCards[selectedWonderball].power;
  description += '. Cost: ' + typeCards[selectedWonderball].cost;

  wrapText(description, 50, 100, 300, 20, 'Orbitron' );
}

function showCatalog(){
  //ctx.fillStyle = 'green';
  let x = 25;
  let y = Math.floor(2*canvas.height/3);
  //ctx.fillRect(x, y, canvas.width, Math.floor(canvas.height/3)) ;
  let min = Math.min(25, typeCards.length-catalog_page);
  for(let i = 0; i< min; i++){
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.fillStyle='black';

    crdX = x + (i %10) * 70;
    crdY = y + Math.floor(i/10) *40;
    //ctx.strokeRect(allcards[i].x, allcards[i].y, allcards[i].width, allcards[i].height);
    ctx.drawImage(typeCards[i].img, 0, 0, 340, 367, crdX, crdY, 70, 40);
  }

  ctx.fillStyle = 'yellow';
  ctx.fillRect(backBtn.x, backBtn.y, backBtn.width, backBtn.height);
  ctx.fillStyle = 'black';
  ctx.fillText(backBtn.img, backBtn.x, backBtn.y + 20, backBtn.width, backBtn.height);
}


function showSelectedWonderball(){
  ctx.fillStyle = 'blue';
  ctx.drawImage( typeCards[selectedWonderball].img, animationFrame*340, 0, 340, 367, Math.floor(canvas.width/2), 15,  Math.floor(canvas.width/2),  Math.floor(canvas.height/2));

  showWonderballProperties();
}

function showTypeSelectionButton(){
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  if(typesButton.closed){
    initCards();
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
  ctx.fillText(typesButton.options[typesButton.selected], typesButton.x+5, typesButton.y+20);
}

function openTypeSelection(){
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.strokeRect(typesButton.x, typesButton.y, typesButton.width, typesButton.height);
  ctx.fillRect(typesButton.x, typesButton.y, typesButton.width, typesButton.height);

  //letters
  ctx.fillStyle = 'black';
  ctx.font = '20px Orbitron';

  for(let i = 0; i < typesButton.options.length; i++){
      ctx.fillText(typesButton.options[i], typesButton.x+5, typesButton.y+20+40*i);
  }
}


function handleTypeSelectionButton(){
  if (collision(mouse, typesButton)){
      let choice = Math.floor((mouse.y - 5- typesButton.y)/40);
      if(typesButton.closed && choice == 0 && mouse.clicked){
        typesButton.closed = false;
        mouse.clicked = false;
      }else if(!typesButton.closed && mouse.clicked){
        //collision with options
        typesButton.selected = choice;
        typesButton.closed = true;
        selectedWonderball = 0;
        mouse.clicked=false;
      }
  }else if(collision(backBtn, mouse) &&  mouse.clicked){
    mouse.clicked = false;
    game.state = 'menu';
  }
}

function handleWonderballCatalogSelection(){
  console.log("handling wonderball catalog");
  if (mouse.clicked && collision(catalog, mouse)){
    var row = Math.floor((mouse.y - catalog.y)/40);
    var column = Math.floor((mouse.x - catalog.x)/70);
    var selected = row*10+column;

    if(selected < typeCards.length){
      selectedWonderball = selected;
    }
    mouse.clicked = false;
  }

}

function animateCatalog(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  counter++;
  if(counter%10 == 0){
      animationFrame= (animationFrame+1)%(typeCards[selectedWonderball].restingFrames+typeCards[selectedWonderball].shootingFrames);
  }

  showSelectedWonderball();
  showTypeSelectionButton();
  showCatalog();

  handleTypeSelectionButton();
  handleWonderballCatalogSelection();
}
