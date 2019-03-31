WW.Components.Map = class Map{
  constructor(grid = FF.Data.Layouts.test, teams = []){
    this.grid = grid;
    this.cameras = [new WW.Components.Camera({rows: this.grid.grid.length, cols: this.grid.grid[0].length})];
    this.selectedCameraIndex = 0;
    this.teams = teams;
    this.turn = 0;
    this.actors = [];
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
  };

  printTile(x, y){
    var tile = this.getTileType(x, y);
    if(tile && WW.Controllers.ImageManager.loadedImages[tile.name]){
      var posY = y * WW.Config.TILE_HEIGHT + WW.Config.TILE_HEIGHT/2;
      var posX = x * WW.Config.TILE_WIDTH + WW.Config.TILE_WIDTH/2;
      
      WW.Helpers.drawBitMap(WW.Controllers.ImageManager.loadedImages[tile.name], posX, posY);
    }      
      
  };
};


// var Map = function(layout){
//   var self = this;

//   this.grid;
//   this.actors;

//   this.init = () => {
//     self.grid = layout ? layout : self.createEmptyMap(Config.DEFAULT_MAP_ROWS, Config.DEFAULT_MAP_COLS);
//     self.actors = [];
//   };

//   Map.prototype.createEmptyMap = (rows, cols) => {
//     var map = [];
//     for(var i = 0; i < rows; i += 1){
//       map.push([]);
//       for(var j = 0; j < cols; j += 1){
//         map[i].push(0);
//       }
//     }
//     return map;
//   };

//   this.isAnyTileAvailable = () => {
//     let listOfAvailableTilesId = Tile.getAccesibleToDirectionTilesId();
//     return listOfAvailableTilesId.filter(id => {
//       for(var r of self.grid){
//         if(r.indexOf(id) !== -1){
//           return true;
//         }
//       }
//       return false;
//     }).length !== 0;
//   };

//   this.getRandomPosition = () => {
//     if(self.isAnyTileAvailable()){
//       let validId = Tile.getAccesibleToDirectionTilesId();
//       var valid = false;
//       while(!valid){
//         var {row, col} = self.getRandomCoord();
//         valid = validId.includes(self.grid[row][col]);
//       }
//       return {row,col};
//     }
//     return false;
//   };

//   this.getRandomCoord = () => {
//     let row = Math.floor(Math.random() * self.grid.length);
//     let col = Math.floor(Math.random() * self.grid[row].length);
//     return {row,col};
//   }

//   this.isValidRow = (y) => {
//     return y >= 0 && self.grid[y];
//   };

//   this.canAccessFrom = (x, y, direction) => {
//     if(y < 0){return false;}
//     if(y > self.grid.length - 1){ return false;}
//     if(x < 0){return false;}
//     if(x > self.grid[y].length - 1){return false;}

//     return Tile.getAccesibleFromDirectionTilesId(direction).includes(self.grid[y][x]);
//   };

//   this.canAccessTo = (x, y, direction) => {
//     if(y < 0){return false;}
//     if(y > self.grid.length - 1){ return false;}
//     if(x < 0){return false;}
//     if(x > self.grid[y].length - 1){return false;}

//     return Tile.getAccesibleToDirectionTilesId(direction).includes(self.grid[y][x]);
//   };

//   this.isAnyObstacleActor = (x, y) => {
//     let obstacles = self.actors.filter(actor => actor.isObstacle);
//     for(let obstacle of obstacles){
//       if(obstacle.position.x === x && obstacle.position.y === y){
//         return true;
//       }
//     }
//     return false;
//   }

//   this.isFreeCell = (x, y, direction) => {
//     return self.isValidRow(y) && self.isAnyObstacleActor(x, y) && self.canAccessTo(x, y, direction);
//   };
  
//   this.addRover = (id, controls) => {
//     if(self.isAnyTileAvailable()){
//         let newRover = new Rover(id);
//         newRover.setControls(controls);
//         self.actors.push(newRover);
//         Game.createCamera(newRover);
//         return true;
//     }else{
//       console.log("¡No hay más espacio!");
//     }
//     return false;
//   };

//   this.printTilesOnScreen = () => {
//     for(let i = Game.selectedCamera.view.top, rows = Game.selectedCamera.view.bottom; i < rows; i+= 1){
//       for(let j = Game.selectedCamera.view.left, cols = Game.selectedCamera.view.right; j < cols; j += 1){
//         self.printTile(j, i);
//       }
//     }
//   };

//   this.tileExists = (x, y) => {
//     try{
//       this.grid[y][x];
//       return true;
//     }catch(e){
//       return false;
//     }
//   }; 

//   this.getTileType = (x, y) => {
//     if(self.tileExists(x, y)){
//       var response = false;
//       var currentTile = this.grid[y][x];
//       var foundTile = Tile.getTileById(currentTile);
      
//       if(foundTile){
//         response = foundTile;
//       }

//       return response;
//     }
//   };

//   this.printTile = (x, y) => {
//     var tile = self.getTileType(x, y);
//     if(tile && tile.image){
//       var posY = y * Config.TILE_HEIGHT + Config.TILE_HEIGHT/2;
//       var posX = x * Config.TILE_WIDTH + Config.TILE_WIDTH/2;
      
//       Common.drawBitMap(tile.image, posX, posY);
//     }      
      
//   };

//   // Execution
//   this.init();
  
// }