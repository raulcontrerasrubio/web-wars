WW.Controllers.ImageManager = {
  loadedImages: {},
  loadImages: function(dataset){
    let response = {};
    for(let key in dataset){
      if(dataset[key].img instanceof WW.Data.ImageCoord){
        response[key] = {};
        response[key].src = new Image();
        response[key].src.src = dataset[key].img.origin;
        response[key].fromX = dataset[key].img.x;
        response[key].fromY = dataset[key].img.y;
        response[key].toX = dataset[key].img.toX;
        response[key].toY = dataset[key].img.toY;
        response[key].w = dataset[key].img.w;
        response[key].h = dataset[key].img.h;
      }
      // Ask the map the team color
      if(typeof dataset[key].img === 'object' && dataset[key].img.hasOwnProperty('white')){
        response[key] = {};
        for(let team in dataset[key].img){
          response[key][team] = {};
          response[key][team].src = new Image();
          response[key][team].src.src = dataset[key].img[team].origin;
          response[key][team].fromX = dataset[key].img[team].x;
          response[key][team].fromY = dataset[key].img[team].y;
          response[key][team].toX = dataset[key].img[team].toX;
          response[key][team].toY = dataset[key].img[team].toY;
          response[key][team].w = dataset[key].img[team].w;
          response[key][team].h = dataset[key].img[team].h;
        }
      }
    }
    return response;
  }
}