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

      if(typeof dataset[key].img === 'object' && (dataset[key].img.hasOwnProperty('white') || dataset[key].img.hasOwnProperty('horizontal'))){
        response[key] = {};
        for(let name in dataset[key].img){
          response[key][name] = {};
          response[key][name].src = new Image();
          response[key][name].src.src = dataset[key].img[name].origin;
          response[key][name].fromX = dataset[key].img[name].x;
          response[key][name].fromY = dataset[key].img[name].y;
          response[key][name].toX = dataset[key].img[name].toX;
          response[key][name].toY = dataset[key].img[name].toY;
          response[key][name].w = dataset[key].img[name].w;
          response[key][name].h = dataset[key].img[name].h;
        }
      }
    }
    return response;
  }
};