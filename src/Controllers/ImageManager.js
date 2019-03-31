WW.Controllers.ImageManager = {
  loadedImages: {},
  loadImages: function(dataset){
    let response = {};
    for(let key in dataset){
      if(typeof dataset[key].img === 'string'){
        response[key] = new Image();
        response[key].src = dataset[key].img;
      }
    }
    return response;
  }
}