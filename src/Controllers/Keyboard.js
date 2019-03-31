WW.Controllers.Keyboard = {
  validKeys: {
    LEFT_ARROW: {
      pressed: false,
      code: 37
    },
    UP_ARROW: {
      pressed: false,
      code: 38
    },
    DOWN_ARROW: {
      pressed: false,
      code: 40
    },
    RIGHT_ARROW: {
      pressed: false,
      code: 39
    },
  },
  setup: function(){
    document.addEventListener('keydown', this.keyPress.bind(this));
    document.addEventListener('keyup', this.keyRelease.bind(this));
  },
  keyPress: function(evt){
    evt.preventDefault();
 
    for(let key in this.validKeys){
      if(this.validKeys[key].code === evt.keyCode){
        this.validKeys[key].pressed = true;
      }
    }
  },
  keyRelease: function(evt){
    evt.preventDefault();
    
    for(let key in this.validKeys){
      if(this.validKeys[key].code === evt.keyCode){
        this.validKeys[key].pressed = false;
      }
    }
  },
  keyController: function(){
    this.cameraControls();
  },
  cameraControls: function(){
    let map = WW.Components.maps[WW.Components.selectedMapIndex];
    let camera = map.cameras[map.selectedCameraIndex];
    
    for(let key in this.validKeys){
      if(this.validKeys[key].pressed){
        switch(this.validKeys[key].code){
          case this.validKeys.UP_ARROW.code:
            camera.moveUp();
            this.validKeys.UP_ARROW.pressed = false;
          break;
          case this.validKeys.DOWN_ARROW.code:
            camera.moveDown();
            this.validKeys.DOWN_ARROW.pressed = false;
          break;
          case this.validKeys.RIGHT_ARROW.code:
            camera.moveRight();
            this.validKeys.RIGHT_ARROW.pressed = false;
          break;
          case this.validKeys.LEFT_ARROW.code:
            camera.moveLeft();
            this.validKeys.LEFT_ARROW.pressed = false;
          break;
        }
      }
    }
  }
};