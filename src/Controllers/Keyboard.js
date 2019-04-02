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
            if(!WW.visibleRightMenu && !WW.visibleBaseMenu && !WW.visibleAirMenu && !WW.visiblePortMenu){
              camera.moveUp();
              this.validKeys.UP_ARROW.pressed = false;
            }
          break;
          case this.validKeys.DOWN_ARROW.code:
            if(!WW.visibleRightMenu && !WW.visibleBaseMenu && !WW.visibleAirMenu && !WW.visiblePortMenu){
              camera.moveDown();
              this.validKeys.DOWN_ARROW.pressed = false;
            }
          break;
          case this.validKeys.RIGHT_ARROW.code:
            if(!WW.visibleRightMenu && !WW.visibleBaseMenu && !WW.visibleAirMenu && !WW.visiblePortMenu){
              camera.moveRight();
              this.validKeys.RIGHT_ARROW.pressed = false;
            }
          break;
          case this.validKeys.LEFT_ARROW.code:
            if(!WW.visibleRightMenu && !WW.visibleBaseMenu && !WW.visibleAirMenu && !WW.visiblePortMenu){
              camera.moveLeft();
              this.validKeys.LEFT_ARROW.pressed = false;
            }
          break;
          case this.validKeys.KEY_Z.code:
            camera.zoom -= 5;
            this.validKeys.KEY_Z.pressed = false;
          break;
          case this.validKeys.KEY_X.code:
            camera.zoom += 5;
            this.validKeys.KEY_X.pressed = false;
          break;
        }
      }
    }
  },
  menuControls: function(){
    let map = WW.Components.maps[WW.Components.selectedMapIndex];
    let cameraPosition = {x:map.cameras[map.selectedCameraIndex].position.x/16, y:map.cameras[map.selectedCameraIndex].position.y/16};
    for(let key in this.validKeys){
      if(this.validKeys[key].pressed){
        switch(this.validKeys[key].code){
          case this.validKeys.KEY_Q.code:
            if(!WW.visibleBaseMenu && !WW.visibleAirMenu && !WW.visiblePortMenu){
              this.toggleRightMenu();
            }
            this.validKeys.KEY_Q.pressed = false;
          break;
          case this.validKeys.ENTER_KEY.code:
            let currentTurnTeamName = map.teams[map.teamTurnIndex].name;
            switch(map.grid.grid[cameraPosition.y][cameraPosition.x]){
              case 10:
                if(map.buildings.filter(building => building instanceof WW.Data.Buildings.Base && building.position.x === cameraPosition.x && building.position.y === cameraPosition.y)[0].team === currentTurnTeamName){
                  this.changeAffordableUnits();
                  this.toggleBaseMenu();
                }
              break;
              case 11:
                if(map.buildings.filter(building => building instanceof WW.Data.Buildings.Airport && building.position.x === cameraPosition.x && building.position.y === cameraPosition.y)[0].team === currentTurnTeamName){
                  this.changeAffordableUnits();
                  this.toggleAirMenu();
                }
              break;
              case 12:
                if(map.buildings.filter(building => building instanceof WW.Data.Buildings.Port && building.position.x === cameraPosition.x && building.position.y === cameraPosition.y)[0].team === currentTurnTeamName){
                  this.changeAffordableUnits();
                  this.togglePortMenu();
                }
              break;
            }
            this.validKeys.ENTER_KEY.pressed = false;
          break;
        }
      }
    }
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
  },
  toggleBaseMenu: function(){
    let baseMenu = document.querySelector('#base-menu');
    if(WW.visibleBaseMenu){
      baseMenu.style.display = 'none';
      WW.visibleBaseMenu = false;
    }else{
      baseMenu.style.display = 'flex';
      WW.visibleBaseMenu = true;
    }
  },
  toggleAirMenu: function(){
    let airMenu = document.querySelector('#air-menu');
    if(WW.visibleAirMenu){
      airMenu.style.display = 'none';
      WW.visibleAirMenu = false;
    }else{
      airMenu.style.display = 'flex';
      WW.visibleAirMenu = true;
    }
  },
  togglePortMenu: function(){
    let portMenu = document.querySelector('#port-menu');
    if(WW.visiblePortMenu){
      portMenu.style.display = 'none';
      WW.visiblePortMenu = false;
    }else{
      portMenu.style.display = 'flex';
      WW.visiblePortMenu = true;
    }
  },
  changeAffordableUnits: function(){
    let map = WW.Components.maps[WW.Components.selectedMapIndex];
    let availableFunds = map.teams[map.teamTurnIndex].funds;
    let units = document.querySelectorAll('#base-menu .unit:not(:first-child) .cost, #air-menu .unit:not(:first-child) .cost, #port-menu .unit:not(:first-child) .cost');
    for(let unit of units){
      if(+unit.textContent > availableFunds){
        unit.parentNode.classList += ' disabled';
      }else{
        unit.parentNode.classList = 'unit';
      }
    }
  }
};