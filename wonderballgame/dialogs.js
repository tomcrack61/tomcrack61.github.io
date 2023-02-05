//dialogs
const winDialogImg = new Image();
winDialogImg.src = 'dialogmarie/Slide4.PNG';

const gameOverDialogImg = new Image();
gameOverDialogImg.src = 'dialogmarie/Slide1.PNG';

const gameOver3DialogImg = new Image();
gameOver3DialogImg.src = 'dialogmarie/Slide2.PNG';

const welcomeDialogImg = new Image();
welcomeDialogImg.src = 'dialogmarie/Slide3.PNG';

const marcyImg = new Image();
marcyImg.src = 'dialogmarie/marcy.PNG';

let dialogs = [];
dialogs.push("Necesitarás a los girasoles y los lanzaguisantes para defenderte de glitch");
dialogs.push("Vaya, aprendiste a usar los girasoles!");

function animateDialog(dialogImg){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(dialogImg, 0, 0, 2959, 1881, 10,10,canvas.width, canvas.height);
  dialogTime +=1;
  if(dialogTime > 200){
    dialogTime = 0;
    goToMap();
  }
}

function animateMarcyDialog(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(marcyImg, 350, 0, 1066, 568, 10,10,canvas.width, canvas.height);
  ctx.fillStyle='black';
  dialogText = dialogs[game.curr_level%dialogs.length];
  wrapText(dialogText, 500, 80, 320, 18, 'Orbitron');
  dialogTime +=1;
  if(dialogTime > 200){
    dialogTime = 0;
    goToSelection();
  }
}

function winDialog(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(winDialogImg, 0, 0, 2607, 1898, 10,10,canvas.width, canvas.height);
}
