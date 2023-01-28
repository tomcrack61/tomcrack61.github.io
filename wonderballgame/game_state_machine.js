function animate(){
  console.log(game.state);
  if(game.state == "initDialog"){
    animateDialog(welcomeDialogImg);
  }
  else if(game.state == "gameOver"){
    animateDialog(gameOverDialogImg);
  }
  else if(game.state == "win"){
    animateDialog(winDialogImg);
  }
  else if(game.state == "map"){
    animateMap();
  }
  else if(game.state == "selection"){
    animateSelection();
  }
  else if(game.state == "play"){
    animateGame();
  }
  else if(game.state == "store"){
    animateStore();
  }
  else if(game.state == "puzzleStore"){
    animatePuzzleStore();
  }
  requestAnimationFrame(animate)
}

console.log("starting");
animate();
