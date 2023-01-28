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
  coinsPrice: 10000,
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


const setaovniproy1 = new Image();
setaovniproy1.src = 'wonderballs/seta ovniproy1.png';

const setaovniproy2 = new Image();
setaovniproy2.src = 'wonderballs/seta ovniproy2.png';

const setaovniproy3 = new Image();
setaovniproy3.src = 'wonderballs/seta ovniproy3.png';

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
  number_projectiles: 3,
  projectile_img: setaovniproy1,
  projectile_type: timestopproj,
  projectile_img_1: setaovniproy2,
  projectile_type_1: teledirected,
  projectile_img_2: setaovniproy3,
  projectile_type_2: penetratingproj,
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

const wonderball63 = new Image();
wonderball63.src = 'wonderballs/apisonaflor.png';
wonderballTypes.push(wonderball63);

const card63 = {
  img: wonderball63,
  coinsPrice: 2000,
  cost: 50,
  defense: 120,
  power: 234,
  health: 450,
  type:contactshoot,
  shootingFrames : 1,
  restingFrames : 3,
  rechargeFrames: 2,
  shootFrame:4,
  isepic:true,
  storagekey: "apisonaflorBought"
}
if(Number(localStorage.apisonaflorBought)==0){
  allEpicWonderballs.push(card63);
}else{
  allTypes.push(card63);
}
const fuentinfuentinproy = new Image();
fuentinfuentinproy.src = 'wonderballs/fuentin fuentinproy.png';

const wonderball64 = new Image();
wonderball64.src = 'wonderballs/fuentin fuentin.png';
allEpicWonderballsTypes.push(wonderball64);

const card64 = {
  img: wonderball64,
  coinsPrice: 5000,
  cost: 275,
  defense: 0.35,
  power: 43,
  health: 300,
  type: distanceshoot,
  projectile_img: fuentinfuentinproy,
  projectile_type: straightpath,
  shootingFrames : 1,
  restingFrames : 3,
  shootFrame: 2,
  isepic:true,
  storagekey: "fuentinfuentinBought"
}
if(Number(localStorage.fuentinfuentinBought)==0){
  allEpicWonderballs.push(card64);
}else{
  allTypes.push(card64);
}
const corazonelctricoproy = new Image();
corazonelctricoproy.src = 'wonderballs/corazon elctricoproy.png';

const wonderball65 = new Image();
wonderball65.src = 'wonderballs/corazon electrico.png';
allEpicWonderballsTypes.push(wonderball65);

const card65 = {
  img: wonderball65,
  coinsPrice: 5000,
  cost: 175,
  defense: 0.35,
  power: 43,
  health: 300,
  type: distanceshoot,
  projectile_img: corazonelctricoproy,
  projectile_type: penetratingproj,
  shootingFrames : 1,
  restingFrames : 3,
  shootFrame: 4,
  isepic:true,
  storagekey: "corazonelctricoBought"
}
if(Number(localStorage.corazonelctricoBought)==0){
  allEpicWonderballs.push(card65);
}else{
  allTypes.push(card65);
}
const juncoelectricoproy = new Image();
juncoelectricoproy.src = 'wonderballs/junco electricoproy.png';

const wonderball66 = new Image();
wonderball66.src = 'wonderballs/junco electrico.png';
allEpicWonderballsTypes.push(wonderball66);

const card66 = {
  img: wonderball66,
  coinsPrice: 5000,
  cost: 125,
  defense: 0.35,
  power: 43,
  health: 300,
  type: distanceshoot,
  projectile_img: juncoelectricoproy,
  projectile_type: penetratingproj,
  shootingFrames : 2,
  restingFrames : 3,
  shootFrame: 3,
  isepic:true,
  storagekey: "juncoelctricoBought"
}
if(Number(localStorage.juncoelectricoBought)==0){
  allEpicWonderballs.push(card66);
}else{
  allTypes.push(card66);
}
const wonderball67 = new Image();
wonderball67.src = 'wonderballs/carpintaladro.png';
wonderballTypes.push(wonderball67);

const card67 = {
  img: wonderball67,
  coinsPrice: 2000,
  cost: 150,
  defense: 120,
  power: 4,
  health: 1450,
  type:contactshoot,
  shootingFrames : 1,
  restingFrames : 2,
  rechargeFrames: 2,
  shootFrame:3,
  isepic:true,
  storagekey: "carpintaldroBought"
}
if(Number(localStorage.carpintaldroBought)==0){
  allEpicWonderballs.push(card67);
}else{
  allTypes.push(card67);
}
const wonderball68 = new Image();
wonderball68.src = 'wonderballs/wasp.png';
wonderballTypes.push(wonderball68);

const card68 = {
  img: wonderball68,
  coinsPrice: 32000,
  cost: 150,
  defense: 120,
  power: 0.40,
  health: 1450,
  type:contactshoot,
  shootingFrames : 1,
  restingFrames : 3,
  rechargeFrames: 3,
  shootFrame:4,
  isepic:true,
  storagekey: "waspBought"
}
if(Number(localStorage.waspBought)==0){
  allEpicWonderballs.push(card68);
}else{
  allTypes.push(card68);
}
