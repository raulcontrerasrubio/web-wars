WW.Components.Map = class Map{
  constructor(grid = FF.Data.Layouts.test, teams = []){
    this.grid = grid;
    this.cameras = [new WW.Components.Camera({rows: this.grid.grid.length, cols: this.grid.grid[0].length})];
    this.selectedCameraIndex = 0;
    this.teams = teams;
    this.teamTurnIndex = 0;
    this.actors = [];
    this.day = 1;
    // {type,team,capture,position (x,y)}
    /*
      {
        team:'green', 
        position:{x:0,y:0}
      },
      {
        team:'green', 
        position:{x:0,y:1}
      }
    */
    this.buildings = [
      {
        team:'red', 
        position:{x:5,y:1}
      },
      {
        team:'blue', 
        position:{x:1,y:28}
      },
      {
        team:'green', 
        position:{x:45,y:25}
      },
      {
        team:'yellow', 
        position:{x:33,y:10}
      },
      {
        team:'black', 
        position:{x:45,y:5}
      },
      {
        team:'red', 
        position:{x:5,y:8}
      },
      {
        team:'blue', 
        position:{x:9,y:22}
      },
      {
        team:'green', 
        position:{x:10,y:22}
      },
      {
        team:'yellow', 
        position:{x:33,y:10}
      },
      {
        team:'black', 
        position:{x:45,y:5}
      },
      {
        team:'red', 
        position:{x:19,y:8}
      },
      {
        team:'red', 
        position:{x:5,y:22}
      },
      {
        team:'yellow', 
        position:{x:7,y:22}
      },
      {
        team:'black', 
        position:{x:6,y:22}
      },
      {
        team:'red', 
        position:{x:19,y:8}
      },
      {
        team:'blue', 
        position:{x:20,y:8}
      },
      {
        team:'green', 
        position:{x:21,y:8}
      },
      {
        team:'yellow', 
        position:{x:22,y:8}
      },
      {
        team:'black', 
        position:{x:23,y:8}
      },
      {
        team:'red', 
        position:{x:4,y:9}
      },
      {
        team:'blue', 
        position:{x:5,y:9}
      },
      {
        team:'green', 
        position:{x:6,y:9}
      },
      {
        team:'yellow', 
        position:{x:7,y:9}
      },
      {
        team:'black', 
        position:{x:8,y:9}
      },
      {
        team:'red', 
        position:{x:43,y:13}
      },
      {
        team:'blue', 
        position:{x:44,y:13}
      },
      {
        team:'green', 
        position:{x:45,y:13}
      },
      {
        team:'yellow', 
        position:{x:46,y:13}
      },
      {
        team:'black', 
        position:{x:47,y:13}
      },
    ];
  }
  tileExists(x, y){
    try{
      this.grid.grid[y][x];
      return true;
    }catch(e){
      return false;
    }
  }; 
  draw(){
    this.cameras[this.selectedCameraIndex].draw(this.printAll.bind(this));
  }
  printAll(){
    this.drawTiles();
    this.cameras[this.selectedCameraIndex].printPosition();
    this.actors.forEach(actor => actor.draw());
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

  printTile(x, y){
    var tile = this.getTileType(x, y);
    var img;
    if(tile && WW.Controllers.ImageManager.loadedImages[tile.name].hasOwnProperty('white')){
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

};