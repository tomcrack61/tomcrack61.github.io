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
const lotoproy = new Image();
lotoproy.src = 'wonderballs/loto proy.png';

const wonderball56 = new Image();
wonderball56.src = 'wonderballs/loto.png';
allEpicWonderballsTypes.push(wonderball56);

const card56 = {
  img: wonderball56,
  coinsPrice: 10000,
  cost: 100,
  defense: 0.15,
  power: 13,
  health: 390,
  type: distanceshoot,
  projectile_img: lotoproy,
  projectile_type: teledirected,
  shootingFrames : 2,
  restingFrames : 1,
  shootFrame: 3,
  isepic:true,
  storagekey: "lotoBought"
}
if(Number(localStorage.lotoBought)==0){
  allEpicWonderballs.push(card56);
}else{
  allTypes.push(card56);
}
const tiraguisantesproy = new Image();
tiraguisantesproy.src = 'wonderballs/tiragiusantes proy.png';

const wonderball58 = new Image();
wonderball58.src = 'wonderballs/tiraguisantes.png';
allEpicWonderballsTypes.push(wonderball58);

const card58 = {
  img: wonderball58,
  coinsPrice: 15000,
  cost: 150,
  defense: 0.15,
  power: 25,
  health: 300,
  type: distanceshoot,
  projectile_img: tiraguisantesproy,
  projectile_type: arcpath,
  shootingFrames : 1,
  restingFrames : 2,
  shootFrame: 3,
  isepic:true,
  storagekey: "tiragiusantesBought"
}
if(Number(localStorage.tiragiusantesBought)==0){
  allEpicWonderballs.push(card58);
}else{
  allTypes.push(card58);
}
const canonbirdproy = new Image();
canonbirdproy.src = 'wonderballs/canon birdproy.png';

const wonderball59 = new Image();
wonderball59.src = 'wonderballs/canon bird.png';
allEpicWonderballsTypes.push(wonderball59);

const card59 = {
  img: wonderball59,
  coinsPrice: 15000,
  cost: 150,
  defense: 0.15,
  power: 125,
  health: 300,
  type: support,
  projectile_img: canonbirdproy,
  projectile_type: teledirected,
  shootingFrames : 1,
  restingFrames : 1,
  shootFrame: 2,
  isepic:true,
  storagekey: "canonbirdBought"
}
if(Number(localStorage.canonbirdBought)==0){
  allEpicWonderballs.push(card59);
}else{
  allTypes.push(card59);
}
const arqueopterixproy = new Image();
arqueopterixproy.src = 'wonderballs/arqueopterix proy.png';

const wonderball60 = new Image();
wonderball60.src = 'wonderballs/arqueopterix.png';
allEpicWonderballsTypes.push(wonderball60);

const card60 = {
  img: wonderball60,
  coinsPrice: 15000,
  cost: 150,
  defense: 0.15,
  power: 125,
  health: 300,
  type: distanceshoot,
  projectile_img: arqueopterixproy,
  projectile_type: straightpath,
  shootingFrames : 1,
  restingFrames : 2,
  shootFrame: 3,
  isepic:true,
  storagekey: "arqueopterixBought"
}
if(Number(localStorage.arqueopterixBought)==0){
  allEpicWonderballs.push(card60);
}else{
  allTypes.push(card60);
}
const melonpultacongeladaproy = new Image();
melonpultacongeladaproy.src = 'wonderballs/melonpulta congeladaproy.png';

const wonderball61 = new Image();
wonderball61.src = 'wonderballs/melonpultacongelada.png';
allEpicWonderballsTypes.push(wonderball61);

const card61 = {
  img: wonderball61,
  coinsPrice: 1000,
  cost: 500,
  defense: 0.34,
  power: 60,
  health: 300,
  type: distanceshoot,
  projectile_img: melonpultacongeladaproy,
  projectile_type: arcpath,
  shootingFrames : 1,
  restingFrames : 3,
  shootFrame: 4,
  isepic:true,
  storagekey: "melonpultacongeladaBought"
}
if(Number(localStorage.melonpultacongeladaBought)==0){
  allEpicWonderballs.push(card61);
}else{
  allTypes.push(card61);
}


const setaovniproy2 = new Image();
setaovniproy2.src = 'wonderballs/seta ovniproy2.png';

const wonderball62 = new Image();
wonderball62.src = 'wonderballs/seta ovni.png';
allEpicWonderballsTypes.push(wonderball62);

const card62 = {
  img: wonderball62,
  coinsPrice: 11000,
  cost: 450,
  defense: 1,
  power: 600,
  health: 700,
  type: multiattack,
  projectile_img: setaovniproy2,
  projectile_type: straightpath,
  shootingFrames :1,
  restingFrames : 4,
  shootFrame: 2,
  isepic:true,
  storagekey: "setaovniBought"
}
if(Number(localStorage.setaovniBought)==0){
  allEpicWonderballs.push(card62);
}else{
  allTypes.push(card62);
}
