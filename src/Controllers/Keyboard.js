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
  cameraControls: function(){0
    let map = WW.Components.maps[WW.Components.selectedMapIndex];
    let camera = map.cameras[map.selectedCameraIndex];
    let canMove = !WW.visibleRightMenu && !WW.visibleBaseMenu && !WW.visibleAirMenu && !WW.visiblePortMenu && !WW.visibleActionsMenu;
    
    for(let key in this.validKeys){
      if(this.validKeys[key].pressed){
        switch(this.validKeys[key].code){
          case this.validKeys.UP_ARROW.code:
            if(canMove){
              camera.moveUp();
              this.validKeys.UP_ARROW.pressed = false;
            }
          break;
          case this.validKeys.DOWN_ARROW.code:
            if(canMove){
              camera.moveDown();
              this.validKeys.DOWN_ARROW.pressed = false;
            }
          break;
          case this.validKeys.RIGHT_ARROW.code:
            if(canMove){
              camera.moveRight();
              this.validKeys.RIGHT_ARROW.pressed = false;
            }
          break;
          case this.validKeys.LEFT_ARROW.code:
            if(canMove){
              camera.moveLeft();
              this.validKeys.LEFT_ARROW.pressed = false;
            }
          break;
          case this.validKeys.KEY_Z.code:
            camera.zoom -= 5;
            camera.updateView();
            this.validKeys.KEY_Z.pressed = false;
          break;
          case this.validKeys.KEY_X.code:
            camera.zoom += 5;
            camera.updateView();
            this.validKeys.KEY_X.pressed = false;
          break;
        }
      }
    }
  },
  menuControls: function(){
    let map = WW.Components.maps[WW.Components.selectedMapIndex];
    let cameraPosition = {x:map.cameras[map.selectedCameraIndex].position.x/WW.Config.TILE_WIDTH, y:map.cameras[map.selectedCameraIndex].position.y/WW.Config.TILE_HEIGHT};
    let canMove = !WW.visibleRightMenu && !WW.visibleBaseMenu && !WW.visibleAirMenu && !WW.visiblePortMenu && !WW.visibleActionsMenu;

    for(let key in this.validKeys){
      if(this.validKeys[key].pressed){
        switch(this.validKeys[key].code){
          case this.validKeys.KEY_Q.code:
            if(canMove){
              this.toggleRightMenu();
            }
            this.validKeys.KEY_Q.pressed = false;
          break;
          case this.validKeys.ENTER_KEY.code:
            let unitAtPosition = map.unitAtPosition(cameraPosition.x, cameraPosition.y);
            let team = map.teams[map.teamTurnIndex];
            let selectedUnit = team.selectedUnit;

            if(selectedUnit){
              if(unitAtPosition && unitAtPosition.team === map.teams[map.teamTurnIndex].name){
                selectedUnit.move(cameraPosition.x, cameraPosition.y);
              }else{
                if(selectedUnit.canMoveTo(cameraPosition.x, cameraPosition.y)){
                  selectedUnit.move(cameraPosition.x, cameraPosition.y);
                }
              }
              map.unselectUnit();
            }else{
              if(unitAtPosition && unitAtPosition.team === map.teams[map.teamTurnIndex].name && !unitAtPosition.used){
                selectedUnit = map.selectUnit(unitAtPosition);
              }
            }

            if(!WW.visibleRightMenu && !WW.visibleActionsMenu && !selectedUnit && !map.getUnitAt(cameraPosition.x, cameraPosition.y)){
              let currentTurnTeamName = map.teams[map.teamTurnIndex].name;
              switch(map.grid.grid[cameraPosition.y][cameraPosition.x]){
                case 10:
                  if(map.buildings.filter(building => building instanceof WW.Data.Buildings.Base 
                      && building.position.x === cameraPosition.x 
                      && building.position.y === cameraPosition.y)[0].team === currentTurnTeamName){
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
  toggleActionsMenu: function(){
    let actionsMenu = document.querySelector('#actions-panel');
    if(WW.visibleActionsMenu){
      actionsMenu.style.display = 'none';
      WW.visibleActionsMenu = false;
      this.changeActionableActionsOff();
    }else{
      actionsMenu.style.display = 'flex';
      WW.visibleActionsMenu = true;
      this.changeActionableActions();
    }
  },
  changeActionableActions: function(){
    let map = WW.Components.maps[WW.Components.selectedMapIndex];
    let cameraPosition = {x:map.cameras[map.selectedCameraIndex].position.x/WW.Config.TILE_WIDTH, y:map.cameras[map.selectedCameraIndex].position.y/WW.Config.TILE_HEIGHT};

    let unit = map.unitAtPosition(cameraPosition.x, cameraPosition.y);
    let onBuilding = map.buildings.filter(building => (building.position.x === unit.position.x && building.position.y === unit.position.y));

    if(unit.canCapture && onBuilding.length > 0 && onBuilding[0].team !== map.teams[map.teamTurnIndex].name){
      document.querySelector('#action-2').style.display = 'block';
      document.querySelector('#action-2').onclick = unit.capture.bind(unit);
    }

    let attacableCells = [];
    for(let range of unit.range){
      let unit;
      unit = map.getUnitAt(cameraPosition.x-range, cameraPosition.y)
      if(unit && unit.team !== map.teams[map.teamTurnIndex].name){
        attacableCells.push(unit);
      }
      unit = map.getUnitAt(cameraPosition.x+range, cameraPosition.y)
      if(unit && unit.team !== map.teams[map.teamTurnIndex].name){
        attacableCells.push(unit);
      }
      unit = map.getUnitAt(cameraPosition.x, cameraPosition.y-range)
      if(unit && unit.team !== map.teams[map.teamTurnIndex].name){
        attacableCells.push(unit);
      }
      unit = map.getUnitAt(cameraPosition.x, cameraPosition.y+range)
      if(unit && unit.team !== map.teams[map.teamTurnIndex].name){
        attacableCells.push(unit);
      }
    }

    if(attacableCells.length > 0){
      document.querySelector('#action-1').style.display = 'block';
      document.querySelector('#action-1').onclick = unit.attack.bind(unit, attacableCells[Math.floor(Math.random()*attacableCells.length)]);
    }



    document.querySelector('#action-4').onclick = unit.wait.bind(unit);

  },
  changeActionableActionsOff: function(){
    document.querySelector('#action-1').style.display = 'none';
    document.querySelector('#action-2').style.display = 'none';
    // document.querySelector('#action-3').style.display = 'none';
  },
  changeAffordableUnits: function(){
    let map = WW.Components.maps[WW.Components.selectedMapIndex];
    let availableFunds = map.teams[map.teamTurnIndex].funds;
    let units = document.querySelectorAll('#base-menu .unit:not(:first-child) .cost, #air-menu .unit:not(:first-child) .cost, #port-menu .unit:not(:first-child) .cost');
    for(let unit of units){
      if(+unit.textContent > availableFunds){
        unit.parentNode.classList += ' disabled';
        unit.parentNode.onclick = null;
      }else{
        unit.parentNode.classList = 'unit';
        unit.parentNode.onclick = map.createUnit.bind(map);
      }
    }
  }
};