WW.Data.Unit = class Unit{
  constructor(){
    this.position = {x:null, y:null};
    this.team = '';
    this.type = '';
    this.movementType = '';
    this.cost = 1000;
    this.health = 100;
    this.movement = 0;
    this.vision = 0;
    this.damageChart = {
      infantry: null,
      mech: null,
      recon: null,
      tank: null,
      mediumTank: null,
      neoTank: null,
      apc: null,
      artillery: null,
      rockets: null,
      antiAir: null,
      missiles: null,
      fighter: null,
      bomber: null,
      bCopter: null,
      tCopter: null,
      battleship: null,
      cruiser: null,
      lander: null,
      submarine: null,
    };
    this.fuel = 99;
    this.image = null;
    this.used = false;
    this.viewRight = true;
    this.ammo = null;
    this.range = [1];
    this.canSumerge = false;
    this.canSupply = false;
    this.canCharge = false;
    this.canJoin = false;
    this.canCapture = false;
  }
  getIntegerHealthPoints(){
    return Math.ceil(this.health/10);
  }
  move(){

  }
  draw(){
    let img = this.image;
    let x = this.position.x;
    let y = this.position.y;
    var posY = y * WW.Config.TILE_HEIGHT;
    var posX = x * WW.Config.TILE_WIDTH;
    WW.ctx.save();
    WW.ctx.translate(x, y);
    if(this.used){
      WW.ctx.filter = 'saturate(30%)'
    }
    if(this.getIntegerHealthPoints() < 10){
      this.printDamage();
    }
    if(!this.viewRight){
      WW.ctx.scale(-1, 1);
    }
    WW.ctx.drawImage(img.src, img.fromX, img.fromY, img.w, img.h, posX, posY, img.w, img.h);
    WW.ctx.restore();
  }
  toggleView(){
    this.viewRight = !this.viewRight;
  }
  printDamage(){
    WW.ctx.fillStyle = 'black';
    WW.ctx.fillRect(0, WW.Config.TILE_HEIGHT - 5, 5, 5);
    WW.ctx.fillStyle = 'white';
    WW.ctx.font = '6px Arial';
    WW.ctx.fillText(`${this.getIntegerHealthPoints()}`, 0, WW.Config.TILE_HEIGHT);
  }
}