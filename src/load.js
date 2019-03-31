window.onload = function(){
  WW.Controllers.ImageManager.loadedImages = WW.Controllers.ImageManager.loadImages(WW.Data.Tiles.dataset);
  window.onresize = function(){
    WW.setFullScreen();
  };
  // Index of DOM

  WW.startGame();
};
