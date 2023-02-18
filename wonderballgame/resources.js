//pausa
const pauseImg = new Image();
pauseImg.src = 'resources/pause.png';

const pauseBtn ={
  x: 7*90,
  y: canvas.height-100,
  width: 85,
  height: 70,
  active: false,
  paused: false,
  img: pauseImg
};

powerUps = [];
powerUpsTime = [];
//pala
const shovelImg = new Image();
shovelImg.src = 'resources/palacolor.png';

const shovel ={
  x: 30,
  y: canvas.height-50,
  width: 40,
  height: 40,
  active: false,
  img: shovelImg
};
powerUps.push(shovel);
powerUpsTime.push(0);

//Gema de agua
const watergemImg = new Image();
watergemImg.src = 'resources/gemaAgua.png';

const watergem ={
  x: 80,
  y: canvas.height-50,
  width: 40,
  height: 40,
  active: false,
  img: watergemImg
};

powerUps.push(watergem);
powerUpsTime.push(1000);

//monedas
const coinImg = new Image();
coinImg.src = 'resources/coins.png';

const coins ={
  x: 130,
  y: canvas.height-50,
  width: 40,
  height: 40,
  active: false,
  img: coinImg
};

//Gema especial
const gemImg = new Image();
gemImg.src = 'resources/gema especial.png';

let gemsObtained = 0;

const gem ={
  x: 250,
  y: canvas.height-50,
  width: 40,
  height: 40,
  active: false,
  img: gemImg
};
