WW.Components.Map = class Map{
  constructor(grid = FF.Data.Layouts.test, teams = []){
    this.grid = grid;
    this.cameras = [new WW.Components.Camera({rows: this.grid.grid.length, cols: this.grid.grid[0].length})];
    this.selectedCameraIndex = 0;
    this.teams = [...teams];
    this.teamTurnIndex = 0;
    this.buildings = [...grid.buildings];
    this.day = 1;
    this.loadTeamPanel();
    this.loadEvents();
  }
  tileExists(x, y){
    try{
      this.grid.grid[y][x];
      return true;
    }catch(e){
      return false;
    }
  }
  update(){
    this.teams.forEach(team => team.update());
  } 
  draw(){
    this.cameras[this.selectedCameraIndex].draw(this.printAll.bind(this));
  }
  printAll(){
    this.drawTiles();
    this.cameras[this.selectedCameraIndex].printPosition();
    this.teamDraw();
  }
  drawTiles(){
    for(let i = this.cameras[this.selectedCameraIndex].view.top, rows = this.cameras[this.selectedCameraIndex].view.bottom; i < rows; i+= 1){
      for(let j = this.cameras[this.selectedCameraIndex].view.left, cols = this.cameras[this.selectedCameraIndex].view.right; j < cols; j += 1){
        this.printTile(j, i);
      }
    }
  }
  getTileType(x, y){
    if(this.tileExists(x, y)){
      var response = false;
      var currentTile = this.grid.grid[y][x];
      var foundTile = WW.Data.Tiles.getTileById(currentTile);
      
      if(foundTile){
        response = foundTile;
      }

      return response;
    }
  }

  getNearlyTiles(x, y, tile){
    if(WW.Controllers.ImageManager.loadedImages[tile.name].hasOwnProperty('fourWays')){
      if(this.grid.grid[y-1] && this.grid.grid[y+1] && this.getTileType(x-1, y).name  === tile.name && this.getTileType(x+1, y).name === tile.name && this.getTileType(x, y-1).name === tile.name && this.getTileType(x, y+1).name === tile.name){
        return 'fourWays';
      }
      if(this.grid.grid[y-1] && this.getTileType(x-1, y).name  === tile.name && this.getTileType(x+1, y).name === tile.name && this.getTileType(x, y-1).name === tile.name){
        return 'threeWaysUp';
      }
      if(this.grid.grid[y+1] && this.getTileType(x-1, y).name  === tile.name && this.getTileType(x+1, y).name === tile.name && this.getTileType(x, y+1).name === tile.name){
        return 'threeWaysDown';
      }
      if(this.grid.grid[y-1] && this.grid.grid[y+1] && this.getTileType(x-1, y).name === tile.name && this.getTileType(x, y-1).name === tile.name && this.getTileType(x, y+1).name === tile.name){
        return 'threeWaysLeft';
      }

      if(this.grid.grid[y-1] && this.grid.grid[y+1] && this.getTileType(x+1, y).name  === tile.name && this.getTileType(x, y-1).name === tile.name && this.getTileType(x, y+1).name === tile.name){
        return 'threeWaysRight';
      }

      if(this.grid.grid[y+1] && this.getTileType(x+1, y).name === tile.name && this.getTileType(x, y+1).name === tile.name){
        return 'twoWaysUpRight';
      }

      if(this.grid.grid[y+1] && this.getTileType(x-1, y).name === tile.name && this.getTileType(x, y+1).name === tile.name){
        return 'twoWaysUpLeft';
      }

      if(this.grid.grid[y-1] && this.getTileType(x+1, y).name === tile.name && this.getTileType(x, y-1).name === tile.name){
        return 'twoWaysDownRight';
      }

      if(this.grid.grid[y-1] && this.getTileType(x-1, y).name === tile.name && this.getTileType(x, y-1).name === tile.name){
        return 'twoWaysDownLeft';
      }

      if(this.grid.grid[y-1] && tile.name === this.getTileType(x, y-1).name || this.grid.grid[y+1] && tile.name === this.getTileType(x, y+1).name){
        return 'vertical';
      }
      
      return 'horizontal';

    }

    if(WW.Controllers.ImageManager.loadedImages[tile.name].horizontal){
      if(this.grid.grid[y-1] && tile.name === this.getTileType(x, y-1).name || this.grid.grid[y+1] && tile.name === this.getTileType(x, y+1).name){
        return 'vertical';
      }
      
      return 'horizontal';
    }
  }

  getNearlyShore(x, y, tile){
    if(WW.Controllers.ImageManager.loadedImages[tile.name].hasOwnProperty('top')){
      if(this.grid.grid[y-1] && tile.name === this.getTileType(x-1, y).name && tile.name === this.getTileType(x+1, y).name && this.getTileType(x, y-1).name === 'sea'){
        return 'middleTop';
      }
      if(this.grid.grid[y+1] && tile.name === this.getTileType(x-1, y).name && tile.name === this.getTileType(x+1, y).name && this.getTileType(x, y+1).name === 'sea'){
        return 'middleBottom';
      }
      if(this.grid.grid[y+1] && this.grid.grid[y-1] && tile.name === this.getTileType(x, y-1).name && tile.name === this.getTileType(x, y+1).name && this.getTileType(x+1, y).name === 'sea'){
        return 'middleRight';
      }
      if(this.grid.grid[y+1] && this.grid.grid[y-1] && tile.name === this.getTileType(x, y-1).name && tile.name === this.getTileType(x, y+1).name && this.getTileType(x-1, y).name === 'sea'){
        return 'middleLeft';
      }
      if(this.grid.grid[y-1] && tile.name === this.getTileType(x, y-1).name && tile.name === this.getTileType(x-1, y).name){
        return 'cornerTopRight';
      }
      if(this.grid.grid[y-1] && tile.name === this.getTileType(x, y-1).name && tile.name === this.getTileType(x+1, y).name){
        return 'cornerTopLeft';
      }
      if(this.grid.grid[y+1] && tile.name === this.getTileType(x, y+1).name && tile.name === this.getTileType(x-1, y).name){
        return 'cornerBottomRight';
      }
      if(this.grid.grid[y+1] && tile.name === this.getTileType(x, y+1).name && tile.name === this.getTileType(x+1, y).name){
        return 'cornerBottomLeft';
      }
      if(this.grid.grid[y-1] && this.getTileType(x, y-1).name === 'sea'){
        return 'top';
      }
      if(this.grid.grid[y+1] && this.getTileType(x, y+1).name === 'sea'){
        return 'bottom';
      }
      if(this.grid.grid[y+1] && this.getTileType(x+1, y).name === 'sea'){
        return 'right';
      }
      if(this.grid.grid[y+1] && this.getTileType(x-1, y).name === 'sea'){
        return 'left';
      }
      
      throw new Error(tile.name + ' is not found');
    }
  }

  printTile(x, y){
    var tile = this.getTileType(x, y);
    var img;
    if(tile && WW.Controllers.ImageManager.loadedImages[tile.name].hasOwnProperty('red')){
      switch(this.getTeamColor(x, y)){
        case 'red':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].red;
        break;
        case 'blue':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].blue;
        break;
        case 'yellow':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].yellow;
        break;
        case 'green':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].green;
        break;
        case 'black':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].black;
        break;
        default:
          img = WW.Controllers.ImageManager.loadedImages[tile.name].white;
        break;
      }
    }

    if(tile && WW.Controllers.ImageManager.loadedImages[tile.name].hasOwnProperty('top')){
      switch(this.getNearlyShore(x, y, tile)){
        case 'top':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].top;
        break;
        case 'bottom':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].bottom;
        break;
        case 'right':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].right;
        break;
        case 'left':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].left;
        break;
        case 'middleTop':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].middleTop;
        break;
        case 'middleBottom':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].middleBottom;
        break;
        case 'middleRight':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].middleRight;
        break;
        case 'middleLeft':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].middleLeft;
        break;
        case 'cornerTopLeft':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].cornerTopLeft;
        break;
        case 'cornerTopRight':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].cornerTopRight;
        break;
        case 'cornerBottomLeft':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].cornerBottomLeft;
        break;
        case 'cornerBottomRight':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].cornerBottomRight;
        break;
        default:
          throw new Error('Image not defined');
      }
    }

    if(tile && WW.Controllers.ImageManager.loadedImages[tile.name].hasOwnProperty('horizontal')){
      switch(this.getNearlyTiles(x, y, tile)){
        case 'fourWays':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].fourWays;
        break;
        case 'threeWaysUp':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].threeWaysUp;
        break;
        case 'threeWaysDown':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].threeWaysDown;
        break;
        case 'threeWaysRight':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].threeWaysRight;
        break;
        case 'threeWaysLeft':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].threeWaysLeft;
        break;
        case 'twoWaysUpRight':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].twoWaysUpRight;
        break;
        case 'twoWaysUpLeft':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].twoWaysUpLeft;
        break;
        case 'twoWaysDownRight':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].twoWaysDownRight;
        break;
        case 'twoWaysDownLeft':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].twoWaysDownLeft;
        break;
        case 'horizontal':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].horizontal;
        break;
        case 'vertical':
          img = WW.Controllers.ImageManager.loadedImages[tile.name].vertical;
        break;
        default:
          throw new Error('Image not defined');
      }
    }
    if(tile && WW.Controllers.ImageManager.loadedImages[tile.name] && !img){
      img = WW.Controllers.ImageManager.loadedImages[tile.name];
    }
    
      var posY = y * WW.Config.TILE_HEIGHT;
      var posX = x * WW.Config.TILE_WIDTH;
      var bg = WW.Controllers.ImageManager.loadedImages.plain;
      WW.ctx.drawImage(bg.src, bg.fromX, bg.fromY, bg.toX, bg.h, posX - bg.w+WW.Config.TILE_WIDTH, posY - bg.h+WW.Config.TILE_HEIGHT, bg.w, bg.h);
      WW.ctx.drawImage(img.src, img.fromX, img.fromY, img.w, img.h, posX, posY - img.h+WW.Config.TILE_HEIGHT, img.w, img.h);
  }

  getTeamColor(x, y){
    for(let building of this.buildings){
      if(building.position.x === x && building.position.y === y){
        return building.team;
      }
    }
    return 'white';
  }

  teamDraw(){
    this.teams.forEach(team => team.draw());
  }

  nextTurn(){
    WW.Controllers.Keyboard.toggleRightMenu();
    this.teams[this.teamTurnIndex].units.forEach(unit => {
      unit.used = false;
      if(unit.isCapturing){
        unit.isCapturing = false;
      }
    });
    this.teamTurnIndex++;
    if(this.teamTurnIndex > this.teams.length - 1){
      this.teams.forEach(team => {
        let fundsIncrement = this.buildings.filter(building => building.team === team.name).length * 1000;
        team.funds += fundsIncrement;
      });
      this.teamTurnIndex = 0;
      this.day++;
    }
    this.loadTeamPanel();
  }

  loadTeamPanel(){
    document.querySelector('#team-name').innerText = this.teams[this.teamTurnIndex].name;
    document.querySelector('#team-funds').innerText = this.teams[this.teamTurnIndex].funds;
    document.querySelector('#day').innerText = this.day;
  }

  loadEvents(){
    document.querySelector('#next-turn').onclick = this.nextTurn.bind(this);
    document.querySelector('#team-panel').style.display = 'flex';
  }

  createUnit(e){
    let {x, y} = this.cameras[this.selectedCameraIndex].position;
    let team = this.teams[this.teamTurnIndex];
    let id = !!e.target.parentNode.id.replace(/[^\d]/g, '') ? +e.target.parentNode.id.replace(/[^\d]/g, '') : +e.target.id.replace(/[^\d]/g, '');
    let base = e.target.parentNode.id.split('-')[0];
    let cost = !isNaN(+e.target.parentNode.children[0].innerText) ? +e.target.parentNode.children[0].innerText : +e.target.children[0].innerText;
    let unit;
    switch(base){
      case 'air':
        WW.Controllers.Keyboard.toggleAirMenu();
        switch(id){
          case 1:
            unit = this.addUnit(new WW.Data.Units.Fighter(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 2:
            unit = this.addUnit(new WW.Data.Units.Bomber(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 3:
            unit = this.addUnit(new WW.Data.Units.BCopter(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 4:
            unit = this.addUnit(new WW.Data.Units.TCopter(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
        }
      break;
      case 'base':
        WW.Controllers.Keyboard.toggleBaseMenu();
        switch(id){
          case 1:
            unit = this.addUnit(new WW.Data.Units.Infantry(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 2:
            unit = this.addUnit(new WW.Data.Units.Mech(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 3:
            unit = this.addUnit(new WW.Data.Units.Recon(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 4:
            unit = this.addUnit(new WW.Data.Units.Tank(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 5:
            unit = this.addUnit(new WW.Data.Units.MediumTank(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 6:
            unit = this.addUnit(new WW.Data.Units.NeoTank(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 7:
            unit = this.addUnit(new WW.Data.Units.APC(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 8:
            unit = this.addUnit(new WW.Data.Units.Artillery(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 9:
            unit = this.addUnit(new WW.Data.Units.Rockets(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 10:
            unit = this.addUnit(new WW.Data.Units.AntiAir(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 11:
            unit = this.addUnit(new WW.Data.Units.Missiles(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
        }
      break;
      case 'port':
        WW.Controllers.Keyboard.togglePortMenu();
        switch(id){
          case 1:
            unit = this.addUnit(new WW.Data.Units.Battleship(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 2:
            unit = this.addUnit(new WW.Data.Units.Cruiser(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 3:
            unit = this.addUnit(new WW.Data.Units.Lander(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
          case 4:
            unit = this.addUnit(new WW.Data.Units.Submarine(x/WW.Config.TILE_WIDTH, y/WW.Config.TILE_HEIGHT, team.name));
          break;
        }
      break;
    }
    unit.used = true;
    team.funds -= cost;
    this.loadTeamPanel();
  }

  unitAtPosition(x, y){
    let availableUnits = this.teams.map(team => team.units.filter(unit => unit.position.x === x && unit.position.y === y))
      .filter(team => team.length === 1);
    return availableUnits[0] ? availableUnits[0][0] : false;
  }

  addUnit(unitClass){
    let thisTeam = this.teams[this.teamTurnIndex];
    thisTeam.units.push(unitClass);
    return thisTeam.units[thisTeam.units.length - 1];
  }

  selectUnit(unit){
    this.teams[this.teamTurnIndex].selectedUnit = unit;
    return this.teams[this.teamTurnIndex].selectedUnit;
  }

  unselectUnit(){
    this.teams[this.teamTurnIndex].selectedUnit = null;
  }

  getBuildingAt(x, y){
    for(let building of this.buildings){
      if(building.position.x === x && building.position.y === y){
        return building;
      }
    }
    return false;
  }

  getUnitAt(x, y){
    for(let team of this.teams){
      for(let unit of team.units){
        if(unit.position.x === x && unit.position.y === y){
          return unit;
        }
      }
    }
    return false;
  }
  
};