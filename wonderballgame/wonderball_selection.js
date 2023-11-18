const goButton={
  x: 250,
  y: 550,
  width: 250,
  height: 150,
  text: 'Go!'
};

const backButton={
  x: 80,
  y: 550,
  width: 150,
  height: 150,
  text: '<--'
};

const nextButton={
  x: 550,
  y: 550,
  width: 150,
  height: 150,
  text: '-->'
};

let choosenOnes = [];
let curr_page = 0;

function handleSelection(){
  min = Math.min(12, allTypes.length-curr_page);
  for(let i = 0; i < min; i++){
    if (collision(mouse, allcards[i]) && mouse.clicked && !choosenOnes.includes(i+curr_page)){
      choosenCard = i+curr_page;
      choosenOnes.push(choosenCard);
      mouse.clicked=false;
      if(choosenOnes.length > 6){
        choosenOnes.shift();
      }
    }
  }

  if (collision(mouse, nextButton) && mouse.clicked){
    if(curr_page < Math.max(curr_level,allTypes.length-12)){
      curr_page +=12;
      mouse.clicked=false;
      initAllCards();
    }
  }
  else if (collision(mouse, backButton) && mouse.clicked){
    if(curr_page > 0){
      curr_page -=12;
      mouse.clicked=false;
      initAllCards();
    }
  }
  else if (collision(mouse, goButton) && mouse.clicked){
    if(choosenOnes.length == 6){
      cardAvailable = new Array(choosenOnes.length).fill(75);
      for(let j = 0; j < choosenOnes.length; j++){
        cards.push(new WonderballType(10, j*90, 70, 85, allTypes[choosenOnes[j]],choosenOnes[j]));
        if(allTypes[choosenOnes[j]].type == 'producer') cardAvailable[j]==0;
      }
      mouse.clicked = false;
      playGame = true;
    }else{
      floatingMessages.push(new FloatingMessage("Choose 6 defenders", mouse.x, mouse.y, 20, 'blue'));
    }
  }
}

const cols = 4;

function initAllCards(){
  const width = 200;
  const height = 150;
  allcards=[];
  for(let j = curr_page; j < curr_page+12; j++){
    if(j< allTypes.length){
      i = j - curr_page;
      x = (i%cols)*width + (i%cols)*5+50;
      y = Math.floor(i / cols)*height + (Math.floor(i / cols)*5) + 100;
      allcards.push(new WonderballType(x, y, width, height, allTypes[j]));
    }
  }
}


function animateSelection(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle='black';
  ctx.font = '30px Orbitron';
  //ctx.fillText('Pau & Feli! Welcome to the world!', 15, 30);
  ctx.fillText('Choose your wonderballs for this battle', 15, 30);
  //initAllCards();

  for(let i = 0; i< allcards.length; i++){
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.fillStyle='black';
    bgnImg = selectionImg;
    if(choosenOnes.includes(i+curr_page)){
       bgnImg = selectionChosenImg;
       ctx.fillStyle = 'gold';
     }else if(allcards[i].card.isepic){
        bgnImg = selectionepicImg;
        ctx.fillStyle = 'red';
     }

    //ctx.strokeRect(allcards[i].x, allcards[i].y, allcards[i].width, allcards[i].height);
    ctx.drawImage(bgnImg, 0, 0, 250, 180, allcards[i].x, allcards[i].y-25, allcards[i].width+20, allcards[i].height+50);
    ctx.drawImage(allcards[i].card.img, 0, 0, 340, 367, allcards[i].x, allcards[i].y, allcards[i].width, allcards[i].height);
    ctx.font = '10px Orbitron';
    key = "wonderball"+(i+curr_page)+"level";
    ctx.fillText("L"+localStorage[key], allcards[i].x+allcards[i].width-40, allcards[i].y+15);
    ctx.font = '20px Orbitron';
    ctx.fillText(Math.floor(allcards[i].card.cost), allcards[i].x+allcards[i].width-50, allcards[i].y+allcards[i].height-10);
  }

  //Go Button
  ctx.fillStyle='gold';
  ctx.fillRect(goButton.x, goButton.y, goButton.width, goButton.height);
  ctx.fillStyle='black';
  ctx.font = '30px Orbitron';
  ctx.fillText(goButton.text, goButton.x+20, 590);

  //NExt Button
  ctx.fillStyle='gold';
  ctx.fillRect(nextButton.x, nextButton.y, nextButton.width, nextButton.height);
  ctx.fillStyle='black';
  ctx.font = '30px Orbitron';
  ctx.fillText(nextButton.text, nextButton.x+20, 590);

  //NExt Button
  ctx.fillStyle='gold';
  ctx.fillRect(backButton.x, backButton.y, backButton.width, backButton.height);
  ctx.fillStyle='black';
  ctx.font = '30px Orbitron';
  ctx.fillText(backButton.text, backButton.x+20, 590);

  //events
  handleFloatingMessages();
  handleSelection();
  if(playGame){
    goToGame();
  }
}
