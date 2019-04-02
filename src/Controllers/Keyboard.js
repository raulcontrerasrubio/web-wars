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
    KEY_Z: {
      pressed: false,
      code: 90
    },
    KEY_X: {
      pressed: false,
      code: 88,
    },
    ENTER_KEY: {
      pressed: false,
      code: 13,
    },
    KEY_Q: {
      pressed: false,
      code: 81,
    }
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
    this.menuControls();
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
          case this.validKeys.KEY_Z.code:
            camera.zoom -= 5;
            this.validKeys.KEY_Z.pressed = false;
          break;
          case this.validKeys.KEY_X.code:
            camera.zoom += 5;
            this.validKeys.KEY_X.pressed = false;
          break;
          case this.validKeys.ENTER_KEY.code:
            this.validKeys.ENTER_KEY.pressed = false;
          break;
        }
      }
    }
  },
  menuControls: function(){
    let map = WW.Components.maps[WW.Components.selectedMapIndex];

    for(let key in this.validKeys){
      if(this.validKeys[key].pressed){
        switch(this.validKeys[key].code){
          case this.validKeys.KEY_Q.code:
            this.toggleRightMenu();
            this.validKeys.KEY_Q.pressed = false;
          break;
        }
      }
    }
  },
  select: function(cb){
    cb();
  },
  toggleRightMenu: function(){
    let rightMenu = document.querySelector('#turn-menu');
    if(WW.visibleRightMenu){
      rightMenu.style.display = 'none';
      WW.visibleRightMenu = false;
    }else{
      rightMenu.style.display = 'flex';
      WW.visibleRightMenu = true;
    }
  }
};