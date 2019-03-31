WW.Components.Camera = class Camera{
  constructor(gridDimensions, x = 0, y = 0){
    this.position = {
      x: x,
      y: y
    };
    this.CAMERA_TILES_SIDES_UP_BOTTOM = null;
    this.CAMERA_TILES_SIDES_RIGHT_LEFT = null;
    this.speed = 5;
    this.moving = {
      up: false,
      down: false,
      left: false,
      right: false,
    };
    this.view = {top: null, bottom: null, left: null, right: null};
    this.zoom = 0;
    this.gridDimensions = gridDimensions;
    this.updateView();
  }
  draw(callback){
    WW.ctx.save();
    let {translateX, translateY, scale} = this.checkBounds();    
    WW.ctx.scale(1+scale, 1+scale);
    WW.ctx.translate(translateX, translateY);   
    
    callback();
    WW.ctx.restore();
  }
  checkBounds(){
    let {rows, cols} = this.gridDimensions;
    let zoom = this.zoom/100;
    let scale = zoom >= 0 ? zoom : zoom/2;

    var translateX = -this.position.x + WW.w/(2+(scale*2));
    var translateY = -this.position.y + WW.h/(2+(scale*2));
    
    if(translateX > WW.Config.TILE_WIDTH){
      translateX = WW.Config.TILE_WIDTH;
    }
    
    if(translateX < -1 * (WW.Config.TILE_WIDTH*(cols + 1) - (WW.w/(1+scale)))){
      translateX = -1 * (WW.Config.TILE_WIDTH*(cols + 1) - (WW.w/(1+scale)));
    }
    
    if(translateY > WW.Config.TILE_HEIGHT){
      translateY = WW.Config.TILE_HEIGHT;
    }
    
    if(translateY < -1 * (WW.Config.TILE_HEIGHT*(rows + 1) - (WW.h/(1+scale)))){
      translateY = -1 * (WW.Config.TILE_HEIGHT*(rows + 1) - (WW.h/(1+scale)));
    }
    
    return {translateX, translateY, scale};
  }
  updateView(){
    let scale = this.zoom/100 >= 0 ? this.zoom/100 : this.zoom/(100*2); 
    let {rows, cols} = this.gridDimensions;

    this.CAMERA_TILES_SIDES_UP_BOTTOM = 2 * Math.floor(( (WW.h/(1+scale))/WW.Config.TILE_HEIGHT)/2);
    this.CAMERA_TILES_SIDES_RIGHT_LEFT = 2 * Math.floor(( (WW.w/(1+scale))/WW.Config.TILE_WIDTH)/2);

    this.view = {
      top: Math.floor(this.position.y/WW.Config.TILE_HEIGHT) - this.CAMERA_TILES_SIDES_UP_BOTTOM < 0 ? 0 : Math.floor(this.position.y/WW.Config.TILE_HEIGHT) - this.CAMERA_TILES_SIDES_UP_BOTTOM,
      bottom: Math.floor(this.position.y/WW.Config.TILE_HEIGHT) + this.CAMERA_TILES_SIDES_UP_BOTTOM > rows ? rows : Math.floor(this.position.y/WW.Config.TILE_HEIGHT) + this.CAMERA_TILES_SIDES_UP_BOTTOM,
      left: Math.floor(this.position.x/WW.Config.TILE_WIDTH) - this.CAMERA_TILES_SIDES_RIGHT_LEFT < 0 ? 0 : Math.floor(this.position.x/WW.Config.TILE_WIDTH) - this.CAMERA_TILES_SIDES_RIGHT_LEFT,
      right: Math.floor(this.position.x/WW.Config.TILE_WIDTH) + this.CAMERA_TILES_SIDES_RIGHT_LEFT > cols ? cols : Math.round(this.position.x/WW.Config.TILE_WIDTH) + this.CAMERA_TILES_SIDES_RIGHT_LEFT
    }
  }
  printPosition(){
    WW.ctx.beginPath()
    WW.ctx.fillStyle = "blue";
    WW.ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
    WW.ctx.fill();
    WW.ctx.closePath();
  }
  moveLeft(){ 
    let nextX = Math.floor(this.position.x/Config.TILE_WIDTH);
    if(nextX <= 0 || nextX > Game.map.grid[Math.floor(this.position.y/Config.TILE_HEIGHT)].length - 1){return;}
    this.position.x -= this.speed * (Config.TILE_WIDTH/60); 
    this.updateView();
  }
  moveRight(){ 
    let nextX = Math.floor(this.position.x/Config.TILE_WIDTH);
    if(nextX < 0 || nextX >= Game.map.grid[Math.floor(this.position.y/Config.TILE_HEIGHT)].length - 1){return;}
    this.position.x += this.speed * (Config.TILE_WIDTH/60); 
    this.updateView();
  }
  moveUp(){ 
    let nextY = Math.floor(this.position.y/Config.TILE_HEIGHT);
    if(nextY <= 0 || nextY > Game.map.grid.length - 1){return;}
    this.position.y -= this.speed * (Config.TILE_HEIGHT/60); 
    this.updateView();
  }
  moveDown(){ 
    let nextY = Math.floor(this.position.y/Config.TILE_HEIGHT);
    if(nextY < 0 || nextY >= Game.map.grid.length - 1){return;}
    this.position.y += this.speed * (Config.TILE_HEIGHT/60); 
    this.updateView();
  }
  
};

// var Camera = function(target){
  
//   var self = this;

  // this.TARGET_TOP_LIMIT_TO_MOVE_CAMERA;
  // this.TARGET_BOTTOM_LIMIT_TO_MOVE_CAMERA;
  // this.TARGET_LEFT_LIMIT_TO_MOVE_CAMERA;
  // this.TARGET_RIGHT_LIMIT_TO_MOVE_CAMERA;
  // this.CAMERA_TILES_SIDES_UP_BOTTOM;
  // this.CAMERA_TILES_SIDES_RIGHT_LEFT;

  // this.speed;
  // this.movingUp;
  // this.movingDown;
  // this.movingLeft;
  // this.movingRight;

  // this.position = {x: null, y: null};
  // this.target = target;
  // this.targetPosition = {x: null, y: null};
  // this.view = {top: null, bottom: null, left: null, right: null};

  // this.zoom;

//   this.init = () => {
//     if(target){
//       self.focus();
//       self.speed = target.speed;
//     }else{
//       let {row, col} = Game.map.getRandomCoord();
//       self.position = {
//         x: col * Config.TILE_WIDTH,
//         y: row * Config.TILE_HEIGHT
//       }

//       self.speed = Config.DEFAULT_CAMERA_SPEED;
//     }

//     self.movingUp = false;
//     self.movingDown = false;
//     self.movingLeft = false;
//     self.movingRight = false;

//     self.zoom = 0;

//     self.updateView();
//   }

//   this.setSpeed = (speed) => {
//     if(!self.target && /\d/.test(speed) && speed >= Config.CAMERA_MIN_SPEED && speed <= Config.CAMERA_MAX_SPEED){
//       self.speed = speed;
//       return true;
//     }
//     return false;
//   }

//   this.setZoom = (zoom) => {
//     if(isNaN(zoom) || zoom < Config.CAMERA_MIN_ZOOM || zoom > Config.CAMERA_MAX_ZOOM){
//       return false;
//     }
//     self.zoom = zoom;
//     self.updateView();

//     if(self.target){
//       self.focus();
//     }

//     return true;
//   }

//   this.restoreZoom = () => {
//     self.setZoom(Config.DEFAULT_CAMERA_ZOOM);
//   }

//   this.focus = () => {
//     self.position = {
//       x: target.image.position.x + Config.TILE_WIDTH/2,
//       y: target.image.position.y + Config.TILE_HEIGHT/2
//     }

//     self.targetPosition = {
//       x: target.image.position.x,
//       y: target.image.position.y
//     }
//   }

//   this.moveIfNeeded = () => {
//     if(self.isTargetBeyondTopLimit()){
//       while(self.isTargetBeyondTopLimit()){
//         self.moveUp();
//       }
//     }

//     if(self.isTargetBeyondBottomLimit()){
//       while(self.isTargetBeyondBottomLimit()){
//         self.moveDown();
//       }
//     }

//     if(self.isTargetBeyondRightLimit()){
//       while(self.isTargetBeyondRightLimit()){
//         self.moveRight();
//       }
//     }

//     if(self.isTargetBeyondLeftLimit()){
//       while(self.isTargetBeyondLeftLimit()){
//         self.moveLeft();
//       }
//     }
//   }

// this.moveLeft = () => { 
//   let nextX = Math.floor(self.position.x/Config.TILE_WIDTH);
//   if(nextX <= 0 || nextX > Game.map.grid[Math.floor(self.position.y/Config.TILE_HEIGHT)].length - 1){return;}
//   self.position.x -= self.speed * (Config.TILE_WIDTH/60); 
//   self.updateView();
// }
// this.moveRight = () => { 
//   let nextX = Math.floor(self.position.x/Config.TILE_WIDTH);
//   if(nextX < 0 || nextX >= Game.map.grid[Math.floor(self.position.y/Config.TILE_HEIGHT)].length - 1){return;}
//   self.position.x += self.speed * (Config.TILE_WIDTH/60); 
//   self.updateView();
// }
// this.moveUp = () => { 
//   let nextY = Math.floor(self.position.y/Config.TILE_HEIGHT);
//   if(nextY <= 0 || nextY > Game.map.grid.length - 1){return;}
//   self.position.y -= self.speed * (Config.TILE_HEIGHT/60); 
//   self.updateView();
// }
// this.moveDown = () => { 
//   let nextY = Math.floor(self.position.y/Config.TILE_HEIGHT);
//   if(nextY < 0 || nextY >= Game.map.grid.length - 1){return;}
//   self.position.y += self.speed * (Config.TILE_HEIGHT/60); 
//   self.updateView();
// }

//   this.isTargetBeyondTopLimit = () => self.targetPosition.y < self.position.y - self.TARGET_TOP_LIMIT_TO_MOVE_CAMERA * Config.TILE_HEIGHT;
//   this.isTargetBeyondBottomLimit = () => self.targetPosition.y > self.position.y + self.TARGET_BOTTOM_LIMIT_TO_MOVE_CAMERA * Config.TILE_HEIGHT;
//   this.isTargetBeyondRightLimit = () => self.targetPosition.x > self.position.x + self.TARGET_RIGHT_LIMIT_TO_MOVE_CAMERA * Config.TILE_WIDTH;
//   this.isTargetBeyondLeftLimit = () => self.targetPosition.x < self.position.x - self.TARGET_LEFT_LIMIT_TO_MOVE_CAMERA * Config.TILE_WIDTH;

//   this.updateView = () => {

//     let scale = self.zoom/100 >= 0 ? self.zoom/100 : self.zoom/(100*2); 
    
//     self.TARGET_TOP_LIMIT_TO_MOVE_CAMERA = Math.floor(( (Game.canvas.height/(1+scale))/4) / Config.TILE_HEIGHT);
//     self.TARGET_BOTTOM_LIMIT_TO_MOVE_CAMERA = Math.floor(( (Game.canvas.height/(1+scale))/4) / Config.TILE_HEIGHT);
//     self.TARGET_LEFT_LIMIT_TO_MOVE_CAMERA = Math.floor(( (Game.canvas.width/(1+scale))/4) / Config.TILE_WIDTH);
//     self.TARGET_RIGHT_LIMIT_TO_MOVE_CAMERA = Math.floor(( (Game.canvas.width/(1+scale))/4) / Config.TILE_WIDTH);
//     self.CAMERA_TILES_SIDES_UP_BOTTOM = 2 * Math.floor(( (Game.canvas.height/(1+scale))/Config.TILE_HEIGHT)/2);
//     self.CAMERA_TILES_SIDES_RIGHT_LEFT = 2 * Math.floor(( (Game.canvas.width/(1+scale))/Config.TILE_WIDTH)/2);

//     self.view = {
//       top: Math.floor(self.position.y/Config.TILE_HEIGHT) - self.CAMERA_TILES_SIDES_UP_BOTTOM < 0 ? 0 : Math.floor(self.position.y/Config.TILE_HEIGHT) - self.CAMERA_TILES_SIDES_UP_BOTTOM,
//       bottom: Math.floor(self.position.y/Config.TILE_HEIGHT) + self.CAMERA_TILES_SIDES_UP_BOTTOM > Game.map.grid.length ? Game.map.grid.length : Math.floor(self.position.y/Config.TILE_HEIGHT) + self.CAMERA_TILES_SIDES_UP_BOTTOM,
//       left: Math.floor(self.position.x/Config.TILE_WIDTH) - self.CAMERA_TILES_SIDES_RIGHT_LEFT < 0 ? 0 : Math.floor(self.position.x/Config.TILE_WIDTH) - self.CAMERA_TILES_SIDES_RIGHT_LEFT,
//       right: Math.floor(self.position.x/Config.TILE_WIDTH) + self.CAMERA_TILES_SIDES_RIGHT_LEFT > Game.map.grid[Math.floor(self.position.y/Config.TILE_HEIGHT)].length ? Game.map.grid[Math.floor(self.position.y/Config.TILE_HEIGHT)].length : Math.round(self.position.x/Config.TILE_WIDTH) + self.CAMERA_TILES_SIDES_RIGHT_LEFT
//     }
    
//   }

//   this.showPosition = () => {
//     Game.context.beginPath()
//     Game.context.fillStyle = "blue";
//     Game.context.arc(self.position.x, self.position.y, 10, 0, Math.PI * 2);
//     Game.context.fill();
//     Game.context.closePath();
//   }

//   this.use = () => {
//     if(target){
//       self.targetPosition.x = target.image.position.x + Config.TILE_WIDTH/2;
//       self.targetPosition.y = target.image.position.y + Config.TILE_HEIGHT/2;
  
//       this.moveIfNeeded();
//     }
//   }

//   this.init();
// }