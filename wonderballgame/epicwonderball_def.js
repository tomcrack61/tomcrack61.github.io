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
  power: 220,
  health: 545,
  type: jetix,
  projectile_img: jetixproy,
  projectile_type: straightpath,
  shootingFrames : 1,
  restingFrames : 2,
  shootFrame: 2,
  shootingFramesv : 2,
  restingFramesv : 3,
  shootFramev: 4,
  shootingFramesc : 4,
  restingFramesc : 3,
  shootFramec: 5,
  shootingFramesd : 5,
  restingFramesd : 4,
  shootFramed: 8,
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
  shootFrame: 3,
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
  shootFrame:2,
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
  shootFrame: 2,
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
  shootFrame: 2,
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
  shootFrame: 1,
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
  shootFrame: 2,
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
  shootFrame: 3,
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
  shootFrame:3,
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
  shootFrame: 1,
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
  shootFrame: 3,
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
  shootFrame: 2,
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
  shootFrame:2,
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
  shootFrame:3,
  isepic:true,
  venom: true,
  storagekey: "waspBought"
}
if(Number(localStorage.waspBought)==0){
  allEpicWonderballs.push(card68);
}else{
  allTypes.push(card68);
}
const rafleciaprimitivaproy = new Image();
rafleciaprimitivaproy.src = 'wonderballs/raflecia primitivaproy.png';

const wonderball69 = new Image();
wonderball69.src = 'wonderballs/raflecia primitiva.png';
allEpicWonderballsTypes.push(wonderball69);

const card69 = {
  img: wonderball69,
  coinsPrice: 10000,
  cost: 450,
  defense: 0.55,
  power: 25,
  health: 300,
  type: distanceshoot,
  projectile_img: rafleciaprimitivaproy,
  projectile_type: arcpath,
  shootingFrames : 1,
  restingFrames : 2,
  shootFrame: 2,
  isepic:true,
  venom: true,
  storagekey: "rafleciaprimitivaBought"
}
if(Number(localStorage.rafleciaprimitivaBought)==0){
  allEpicWonderballs.push(card69);
}else{
  allTypes.push(card69);
}
const jalapeñoproy = new Image();
jalapeñoproy.src = 'wonderballs/jalapeño proy.png';

const wonderball70 = new Image();
wonderball70.src = 'wonderballs/jalapeño.png';
allEpicWonderballsTypes.push(wonderball70);

const card70 = {
  img: wonderball70,
  coinsPrice: 10000,
  cost: 125,
  defense: 45,
  power: 12555,
  health: 1300,
  type: instant,
  projectile_img: jalapeñoproy,
  shootingFrames : 1,
  restingFrames : 2,
  shootFrame: 2,
  isepic:true,
  storagekey: "jalapeñoBought"
}
if(Number(localStorage.jalapeñoBought)==0){
  allEpicWonderballs.push(card70);
}else{
  allTypes.push(card70);
}
const wonderball71 = new Image();
wonderball71.src = 'wonderballs/doudis mecanico.png';
wonderballTypes.push(wonderball71);

const card71 = {
  img: wonderball71,
  coinsPrice: 2000,
  cost: 150,
  defense:0.70,
  power: 4,
  health: 11450,
  type:contactshoot,
  shootingFrames : 1,
  restingFrames : 2,
  rechargeFrames: 2,
  shootFrame:2,
  isepic:true,
  storagekey: "carpintaldroBought"
}
if(Number(localStorage.carpintaldroBought)==0){
  allEpicWonderballs.push(card71);
}else{
  allTypes.push(card71);
}
const frailejonmedioproy = new Image();
frailejonmedioproy.src = 'wonderballs/frailejon medio proy.png';

const wonderball72 = new Image();
wonderball72.src = 'wonderballs/frailejon medio.png';
allEpicWonderballsTypes.push(wonderball72);

const card72 = {
  img: wonderball72,
  coinsPrice: 5000,
  cost: 175,
  defense: 0.45,
  power: 23,
  health: 1300,
  type: distanceshoot,
  projectile_img: juncoelectricoproy,
  projectile_type: penetratingproj,
  shootingFrames : 2,
  restingFrames : 3,
  shootFrame: 2,
  isepic:true,
  storagekey: "frailejonmedioBought"
}
if(Number(localStorage.frailejonmedioBought)==0){
  allEpicWonderballs.push(card72);
}else{
  allTypes.push(card72);
}
const wonderball73 = new Image();
wonderball73.src = 'wonderballs/seta espinosa.png';
wonderballTypes.push(wonderball73);

const card73 = {
  img: wonderball73,
  coinsPrice: 32000,
  cost: 175,
  defense: 23,
  power: 0.40,
  health: 1450,
  type:trap,
  shootingFrames : 1,
  restingFrames : 3,
  rechargeFrames: 3,
  shootFrame:3,
  isepic:true,
  venom: true,
  storagekey: "setaespinosaBought"
}
if(Number(localStorage.setaespinosaBought)==0){
  allEpicWonderballs.push(card73);
}else{
  allTypes.push(card73);
}
const wonderball74 = new Image();
wonderball74.src = 'wonderballs/girasol cantante.png';
wonderballTypes.push(wonderball74);

const card74 = {
  img: wonderball74,
  coinsPrice: 20000,
  cost: 125,
  defense: 1206,
  power: 125,
  health: 450,
  type:producer,
  shootingFrames : 2,
  restingFrames : 2,
  rechargeFrames: 1,
  shootFrame:2,
  isepic:true,
  storagekey: "girasolcantanteBought"
}
if(Number(localStorage.girasolcantanteBought)==0){
  allEpicWonderballs.push(card74);
}else{
  allTypes.push(card74);
}
const wonderball75 = new Image();
wonderball75.src = 'wonderballs/ramphorincus.png';
wonderballTypes.push(wonderball75);

const card75 = {
  img: wonderball75,
  coinsPrice: 2000,
  cost: 250,
  defense: 0.99,
  power: 4,
  health: 31450,
  type:contactshoot,
  shootingFrames : 4,
  restingFrames : 2,
  rechargeFrames: 3,
  shootFrame:6,
  isepic:true,
  storagekey: "ramphorincusBought"
}
if(Number(localStorage.ramphorincusBought)==0){
  allEpicWonderballs.push(card75);
}else{
  allTypes.push(card75);
}
const wonderball76 = new Image();
wonderball76.src = 'wonderballs/longisquama.png';
wonderballTypes.push(wonderball76);

const card76 = {
  img: wonderball76,
  coinsPrice: 112000,
  cost: 450,
  defense: 10,
  power: 4,
  health: 121450,
  type:contactshoot,
  shootingFrames : 2,
  restingFrames : 2,
  rechargeFrames: 2,
  shootFrame:4,
  isepic:true,
  storagekey: "carpintaldroBought"
}
if(Number(localStorage.carpintaldroBought)==0){
  allEpicWonderballs.push(card76);
}else{
  allTypes.push(card76);
}
const repetidoraproyproy = new Image();
repetidoraproyproy.src = 'wonderballs/repetidoraproy.png';

const wonderball77 = new Image();
wonderball77.src = 'wonderballs/tripitidora.png';
allEpicWonderballsTypes.push(wonderball77);

const card77 = {
  img: wonderball77,
  coinsPrice: 5000,
  cost: 325,
  defense: 0.35,
  power: 43,
  health: 300,
  type: distanceshoot,
  projectile_img: wonderball16pry,
  projectile_type: penetratingproj,
  shootingFrames : 1,
  restingFrames : 3,
  shootFrame: 3,
  isepic:true,
  storagekey: "tripitidoraBought"
}
if(Number(localStorage.tripitidoraBought)==0){
  allEpicWonderballs.push(card77);
}else{
  allTypes.push(card77);
}
const wonderball78 = new Image();
wonderball78.src = 'wonderballs/estoque bird.png';
wonderballTypes.push(wonderball78);

const card78 = {
  img: wonderball78,
  coinsPrice: 112000,
  cost: 450,
  defense: 10,
  power: 4,
  health: 121450,
  type:contactshoot,
  shootingFrames : 2,
  restingFrames : 2,
  rechargeFrames: 2,
  shootFrame:3,
  isepic:true,
  storagekey: "carpintaldroBought"
}
if(Number(localStorage.carpintaldroBought)==0){
  allEpicWonderballs.push(card78);
}else{
  allTypes.push(card78);
}
const anturiumproy = new Image();
anturiumproy.src = 'wonderballs/anturium proy.png';

const wonderball79 = new Image();
wonderball79.src = 'wonderballs/anturium.png';
allEpicWonderballsTypes.push(wonderball79);

const card79 = {
  img: wonderball79,
  coinsPrice: 5000,
  cost: 175,
  defense: 0.35,
  power: 19,
  health: 1300,
  type: distanceshoot,
  projectile_img: anturiumproy,
  projectile_type: penetratingproj,
  shootingFrames : 1,
  restingFrames : 4,
  shootFrame: 4,
  isepic:true,
  storagekey: "anturiumBought"
}
if(Number(localStorage.anturiumBought)==0){
  allEpicWonderballs.push(card79);
}else{
  allTypes.push(card79);
}
const pairanaplaneproy = new Image();
pairanaplaneproy.src = 'wonderballs/pairana planeproy.png';
const pairanaplaneSpecial = new Image();
pairanaplaneSpecial.src = 'wonderballs/pairana plane especial.png';

const wonderball80 = new Image();
wonderball80.src = 'wonderballs/pairana plane.png';
allEpicWonderballsTypes.push(wonderball80);

const card80 = {
specialimg:pairanaplaneSpecial,
  img: wonderball80,
  coinsPrice: 5000,
  cost: 375,
  defense: 0.35,
  power: 13,
  health: 1300,
  type: distanceshoot,
  projectile_img:pairanaplaneproy ,
  projectile_type:straightpath ,
  shootingFrames : 1,
  restingFrames : 3,
  shootFrame: 3,
  isepic:true,
  storagekey: "pairanaplaneBought"
}
if(Number(localStorage.pairanaplaneBought)==0){
  allEpicWonderballs.push(card80);
}else{
  allTypes.push(card80);
}
const wonderball81 = new Image();
wonderball81.src = 'wonderballs/platillos ball.png';
wonderballTypes.push(wonderball81);

const card81 = {
  img: wonderball81,
  coinsPrice: 112000,
  cost: 450,
  defense: 10,
  power: 4,
  health: 121450,
  type:contactshoot,
  shootingFrames : 2,
  restingFrames : 7,
  rechargeFrames: 2,
  shootFrame:6,
  isepic:true,
  storagekey: "platillosballBought"
}
if(Number(localStorage.platillosballBought)==0){
  allEpicWonderballs.push(card81);
}else{
  allTypes.push(card81);
}
const pugbertoproy = new Image();
pugbertoproy.src = 'wonderballs/pug berto proy.png';

const wonderball82 = new Image();
wonderball82.src = 'wonderballs/pug berto 1.png';
allEpicWonderballsTypes.push(wonderball82);

const card82 = {
  img: wonderball82,
  coinsPrice: 5000,
  cost: 475,
  defense: 0.35,
  power: 18,
  health: 1300,
  type: distanceshoot,
  projectile_img: pugbertoproy,
  projectile_type: penetratingproj,
  shootingFrames : 1,
  restingFrames : 2,
  shootFrame: 2,
  isepic:true,
  storagekey: "anturiumBought"
}
if(Number(localStorage.anturiumBought)==0){
  allEpicWonderballs.push(card82);
}else{
  allTypes.push(card82);
}
const geishafloralproy = new Image();
geishafloralproy.src = 'wonderballs/geisha floral proy.png';

const wonderball83 = new Image();
wonderball83.src = 'wonderballs/geisha floral.png';
allEpicWonderballsTypes.push(wonderball83);

const card83 = {
  img: wonderball83,
  coinsPrice: 5000,
  cost: 200,
  defense: 0.35,
  power: 88,
  health: 1300,
  type: distanceshoot,
  projectile_img: geishafloralproy,
  projectile_type: penetratingproj,
  shootingFrames : 5,
  restingFrames : 5,
  shootFrame: 9,
  isepic:true,
  storagekey: "geishaBought"
}
if(Number(localStorage.geishaBought)==0){
  allEpicWonderballs.push(card83);
}else{
  allTypes.push(card83);
}
const lanzamaizproy = new Image();
lanzamaizproy.src = 'wonderballs/lanza maiz proy.png';

const wonderball84 = new Image();
wonderball84.src = 'wonderballs/lanza maiz.png';
allEpicWonderballsTypes.push(wonderball84);

const card84 = {
  img: wonderball84,
  coinsPrice: 5000,
  cost: 100,
  defense: 0.35,
  power: 48,
  health: 1300,
  type: distanceshoot,
  projectile_img: lanzamaizproy,
  projectile_type: arcpath,
  shootingFrames : 4,
  restingFrames : 4,
  shootFrame: 7,
  isepic:true,
  storagekey: "anturiumBought"
}


if(Number(localStorage.anturiumBought)==0){
  allEpicWonderballs.push(card84);
}else{
  allTypes.push(card84);
}


//Wonderball levels
for(i=0; i< allTypes.length; i++){
  key="wonderball"+i+"level";
  if (!localStorage[key]) {
    localStorage.setItem(key, 1);
  }
}
const yiqiproy = new Image();
yiqiproy.src = 'wonderballs/yi qiproy.png';

const wonderball86 = new Image();
wonderball86.src = 'wonderballs/yi qi.png';
allEpicWonderballsTypes.push(wonderball86);

const card86 = {
  img: wonderball86,
  coinsPrice: 5000,
  cost: 50,
  defense: 0.35,
  power: 18,
  health: 1300,
  type: distanceshoot,
  projectile_img: yiqiproy,
  projectile_type: penetratingproj,
  shootingFrames : 4,
  restingFrames : 4,
  shootFrame: 7,
  isepic:true,
  storagekey: "yiqiBought"
}
if(Number(localStorage.yiqiBought)==0){
  allEpicWonderballs.push(card86);
}else{
  allTypes.push(card86);
}
