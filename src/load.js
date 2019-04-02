window.onload = function(){
  WW.Controllers.ImageManager.loadedImages = WW.Controllers.ImageManager.loadImages([WW.Data.Tiles.dataset,WW.Data.Units.dataset]);
  window.onresize = function(){
    WW.setFullScreen();
    if(WW.Components.maps.length >= 1){
      let currentMap = WW.Components.maps[WW.Components.selectedMapIndex]
      currentMap.cameras[currentMap.selectedCameraIndex].updateView();
    }
  };
  // Index of DOM
  WW.mainScreen();
};
