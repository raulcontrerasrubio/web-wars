WW.Data.Units.Mech = class Mech extends WW.Data.Unit{
  constructor(x,y, team = 'red'){
    super();
    this.position = {x, y};
    this.team = team;
    this.type = 'land';
    this.movementType = 'mech';
    this.cost = 3000;
    this.movement = 2;
    this.vision = 2;
    this.damageChart = {
      infantry: new WW.Data.DamageChart(null,65),
      mech: new WW.Data.DamageChart(null,55),
      recon: new WW.Data.DamageChart(85,18),
      tank: new WW.Data.DamageChart(55,6),
      mediumTank: new WW.Data.DamageChart(15,1),
      neoTank: new WW.Data.DamageChart(15,1),
      apc: new WW.Data.DamageChart(75,20),
      artillery: new WW.Data.DamageChart(70,32),
      rockets: new WW.Data.DamageChart(85,35),
      antiAir: new WW.Data.DamageChart(65,6),
      missiles: new WW.Data.DamageChart(85,35),
      fighter: null,
      bomber: null,
      bCopter: new WW.Data.DamageChart(null,9),
      tCopter: new WW.Data.DamageChart(null,35),
      battleship: null,
      cruiser: null,
      lander: null,
      submarine: null,
    };
    this.fuel = 70;
    this.image = WW.Controllers.ImageManager.loadedImages.mech[team];
    this.ammo = 3;
    this.canCapture = true;
    this.isCapturing = false;
  }
  printCapture(){
    WW.ctx.save();
    WW.ctx.translate(this.position.x*WW.Config.TILE_WIDTH, this.position.y*WW.Config.TILE_HEIGHT);
    WW.ctx.fillStyle = 'black';
    WW.ctx.fillRect(WW.Config.TILE_WIDTH - 5, WW.Config.TILE_HEIGHT - 5, 5, 5);
    WW.ctx.fillStyle = 'white';
    WW.ctx.font = '6px Arial';
    WW.ctx.fillText(`C`, WW.Config.TILE_WIDTH - 5, WW.Config.TILE_HEIGHT);
    WW.ctx.restore();
  }

  capture(){
    this.isCapturing = true;
    WW.Controllers.Keyboard.toggleActionsMenu();
  }
};