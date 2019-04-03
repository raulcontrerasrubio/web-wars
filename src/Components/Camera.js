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
    this.zoom = 220;
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

    this.CAMERA_TILES_SIDES_UP_BOTTOM = 2 * Math.floor(( (WW.h/(1+scale))/WW.Config.TILE_HEIGHT)/2) + 1;
    this.CAMERA_TILES_SIDES_RIGHT_LEFT = 2 * Math.floor(( (WW.w/(1+scale))/WW.Config.TILE_WIDTH)/2) + 1;

    this.view = {
      top: Math.floor(this.position.y/WW.Config.TILE_HEIGHT) - this.CAMERA_TILES_SIDES_UP_BOTTOM < 0 ? 0 : Math.floor(this.position.y/WW.Config.TILE_HEIGHT) - this.CAMERA_TILES_SIDES_UP_BOTTOM,
      bottom: Math.floor(this.position.y/WW.Config.TILE_HEIGHT) + this.CAMERA_TILES_SIDES_UP_BOTTOM > rows ? rows : Math.floor(this.position.y/WW.Config.TILE_HEIGHT) + this.CAMERA_TILES_SIDES_UP_BOTTOM,
      left: Math.floor(this.position.x/WW.Config.TILE_WIDTH) - this.CAMERA_TILES_SIDES_RIGHT_LEFT < 0 ? 0 : Math.floor(this.position.x/WW.Config.TILE_WIDTH) - this.CAMERA_TILES_SIDES_RIGHT_LEFT,
      right: Math.floor(this.position.x/WW.Config.TILE_WIDTH) + this.CAMERA_TILES_SIDES_RIGHT_LEFT > cols ? cols : Math.round(this.position.x/WW.Config.TILE_WIDTH) + this.CAMERA_TILES_SIDES_RIGHT_LEFT
    }
  }
  printPosition(){
    // Top left
    WW.ctx.fillStyle = 'red';
    WW.ctx.beginPath();
    WW.ctx.moveTo(this.position.x, this.position.y);
    WW.ctx.lineTo(this.position.x + WW.Config.TILE_WIDTH/8, this.position.y - WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x - WW.Config.TILE_WIDTH/8, this.position.y - WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x - WW.Config.TILE_WIDTH/8, this.position.y + WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x, this.position.y);
    WW.ctx.fill();
    WW.ctx.closePath();
    // Top right
    WW.ctx.fillStyle = 'red';
    WW.ctx.beginPath();
    WW.ctx.moveTo(this.position.x + WW.Config.TILE_WIDTH, this.position.y);
    WW.ctx.lineTo(this.position.x + WW.Config.TILE_WIDTH - WW.Config.TILE_WIDTH/8, this.position.y - WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x + WW.Config.TILE_WIDTH + WW.Config.TILE_WIDTH/8, this.position.y - WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x + WW.Config.TILE_WIDTH + WW.Config.TILE_WIDTH/8, this.position.y + WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x + WW.Config.TILE_WIDTH, this.position.y);
    WW.ctx.fill();
    WW.ctx.closePath();
    // Down right
    WW.ctx.fillStyle = 'red';
    WW.ctx.beginPath();
    WW.ctx.moveTo(this.position.x + WW.Config.TILE_WIDTH, this.position.y + WW.Config.TILE_HEIGHT);
    WW.ctx.lineTo(this.position.x + WW.Config.TILE_WIDTH + WW.Config.TILE_WIDTH/8, this.position.y + WW.Config.TILE_HEIGHT - WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x + WW.Config.TILE_WIDTH + WW.Config.TILE_WIDTH/8, this.position.y + WW.Config.TILE_HEIGHT + WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x + WW.Config.TILE_WIDTH - WW.Config.TILE_WIDTH/8, this.position.y + WW.Config.TILE_HEIGHT + WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x + WW.Config.TILE_WIDTH, this.position.y + WW.Config.TILE_HEIGHT);
    WW.ctx.fill();
    WW.ctx.closePath();
    // Down left
    WW.ctx.fillStyle = 'red';
    WW.ctx.beginPath();
    WW.ctx.moveTo(this.position.x, this.position.y + WW.Config.TILE_HEIGHT);
    WW.ctx.lineTo(this.position.x - WW.Config.TILE_WIDTH/8, this.position.y + WW.Config.TILE_HEIGHT - WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x - WW.Config.TILE_WIDTH/8, this.position.y + WW.Config.TILE_HEIGHT + WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x + WW.Config.TILE_WIDTH/8, this.position.y + WW.Config.TILE_HEIGHT + WW.Config.TILE_HEIGHT/8);
    WW.ctx.lineTo(this.position.x, this.position.y + WW.Config.TILE_HEIGHT);
    WW.ctx.fill();
    WW.ctx.closePath();
  }
  moveLeft(){ 
    let cols = this.gridDimensions.cols;
    let nextX = Math.floor(this.position.x/WW.Config.TILE_WIDTH);
    if(nextX <= 0 || nextX > cols - 1){return;}
    this.position.x -= WW.Config.TILE_WIDTH; 
    this.updateView();
  }
  moveRight(){ 
    let cols = this.gridDimensions.cols;
    let nextX = Math.floor(this.position.x/WW.Config.TILE_WIDTH);
    if(nextX < 0 || nextX >= cols - 1){return;}
    this.position.x += WW.Config.TILE_WIDTH; 
    this.updateView();
  }
  moveUp(){ 
    let rows = this.gridDimensions.rows;
    let nextY = Math.floor(this.position.y/WW.Config.TILE_HEIGHT);
    if(nextY <= 0 || nextY > rows - 1){return;}
    this.position.y -= WW.Config.TILE_HEIGHT; 
    this.updateView();
  }
  moveDown(){ 
    let rows = this.gridDimensions.rows;
    let nextY = Math.floor(this.position.y/WW.Config.TILE_HEIGHT);
    if(nextY < 0 || nextY >= rows - 1){return;}
    this.position.y += WW.Config.TILE_HEIGHT; 
    this.updateView();
  }
  
};