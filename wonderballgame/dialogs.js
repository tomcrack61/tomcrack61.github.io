//dialogs
const winDialogImg = new Image();
winDialogImg.src = 'dialogmarie/Slide4.PNG';

const gameOverDialogImg = new Image();
gameOverDialogImg.src = 'dialogmarie/Slide1.PNG';

const gameOver3DialogImg = new Image();
gameOver3DialogImg.src = 'dialogmarie/Slide2.PNG';

const welcomeDialogImg = new Image();
welcomeDialogImg.src = 'dialogmarie/Slide3.PNG';

function animateDialog(dialogImg){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(dialogImg, 0, 0, 2959, 1881, 10,10,canvas.width, canvas.height);
  dialogTime +=1;
  if(dialogTime > 200){
    dialogTime = 0;
    goToMap();
  }
}

function winDialog(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(winDialogImg, 0, 0, 2607, 1898, 10,10,canvas.width, canvas.height);
}
