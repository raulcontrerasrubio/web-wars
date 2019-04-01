window.onload = function(){
  WW.Controllers.ImageManager.loadedImages = WW.Controllers.ImageManager.loadImages([WW.Data.Tiles.dataset,WW.Data.Units.dataset]);
  window.onresize = function(){
    WW.setFullScreen();
    let currentMap = WW.Components.maps[WW.Components.selectedMapIndex]
    currentMap.cameras[currentMap.selectedCameraIndex].updateView();
  };
  // Index of DOM

  WW.startGame();
};
