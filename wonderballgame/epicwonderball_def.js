const allEpicWonderballs = [];
const allEpicWonderballsTypes = [];

const jetixproy = new Image();
jetixproy.src = 'wonderballs/jetixproy.png';

const wonderball53 = new Image();
wonderball53.src = 'wonderballs/jetix transformaition1.png';
allEpicWonderballsTypes.push(wonderball53);

const wonderball53v = new Image();
wonderball53v.src = 'wonderballs/jetixtransformaition2.png';
const wonderball53c = new Image();
wonderball53c.src = 'wonderballs/jetixtransfromaition3.png';
const wonderball53d = new Image();
wonderball53d.src = 'wonderballs/jetixtransformaition4.png';

const card53 = {
  img: wonderball53,
  imgv: wonderball53v,
  imgc: wonderball53c,
  imgd: wonderball53d,
  coinsPrice:10000,
  cost: 300,
  defense: 5,
  power: 120,
  health: 345,
  type: jetix,
  projectile_img: jetixproy,
  projectile_type: straightpath,
  shootingFrames : 1,
  restingFrames : 2,
  shootFrame: 3,
  shootingFramesv : 2,
  restingFramesv : 3,
  shootFramev: 5,
  shootingFramesc : 4,
  restingFramesc : 3,
  shootFramec: 7,
  shootingFramesd : 5,
  restingFramesd : 4,
  shootFramed: 9,
  isepic:true,
  storagekey:"jetixBought"
}
if(Number(localStorage.jetixBought)==0){
  allEpicWonderballs.push(card53);
}else{
  allTypes.push(card53);
}


const lanzaguisantesdefuegoproy = new Image();
lanzaguisantesdefuegoproy.src = 'wonderballs/lanzagisantes de fuegoproy.png';

const wonderball54 = new Image();
wonderball54.src = 'wonderballs/lanzaguisantes de fuego.png';
allEpicWonderballsTypes.push(wonderball54);

const card54 = {
  img: wonderball54,
  coinsPrice: 5000,
  cost: 175,
  defense: 0.15,
  power: 23,
  health: 300,
  type: distanceshoot,
  projectile_img: lanzaguisantesdefuegoproy,
  projectile_type: straightpath,
  shootingFrames : 2,
  restingFrames : 2,
  shootFrame: 4,
  isepic:true,
  storagekey: "fireGuisanteBought"
}
if(Number(localStorage.fireGuisanteBought)==0){
  allEpicWonderballs.push(card54);
}else{
  allTypes.push(card54);
}

const wonderball55 = new Image();
wonderball55.src = 'wonderballs/florecimiento dorado.png';
wonderballTypes.push(wonderball55);

const card55 = {
  img: wonderball55,
  coinsPrice: 20000,
    cost: 0,
  defense: 1206,
  power: 234,
  health: 450,
  type:producer,
  shootingFrames : 1,
  restingFrames : 2,
  rechargeFrames: 1,
  shootFrame:3,
  isepic:true,
  storagekey: "doradaBought"
}
if(Number(localStorage.doradaBought)==0){
  allEpicWonderballs.push(card55);
}else{
  allTypes.push(card55);
}
